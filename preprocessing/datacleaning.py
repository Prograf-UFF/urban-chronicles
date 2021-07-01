import shapefile as sf
import json
import os
from shapely.geometry import Polygon
from Model.util import *
from multiprocessing import Process

class DataCleaning():
    def __init__(self, fileName, _year, _delimiter, _outputFilePath):
        self._fileName = fileName
        self._fileYear = _year
        self._delimiter = _delimiter
        self._outFileData = _outputFilePath
        self._outFileAttr = _outputFilePath.replace(".out","attr.out")
        # NAD83 = CRS.from_epsg(4269)
        # NAD83 = CRS.from_epsg(32118)
        # WGS84 = CRS.from_epsg(4326)
        self.globalProjection = get_projection()
        self._boroughMap = {"MN": "1", "BX": "2", "BK": "3", "QN": "4", "SI": "5"}
    
    def __readShapefile(self):
        '''
        Create a shapefile instance that will read shapes and record from shapefile
        '''
        print("Start creating shapefile reader")
        self._plutoShape = sf.Reader(self._fileName)
        print("End of creating shapefile reader")
        
    def __processFields(self):
        '''
        Process File fiels and store fieldName, fieldType and its location on shapefile Records
        '''
        print("Start processing file Fields")
        # Normalizing fields returning
        # (index-1) because the first elements on fields is a deletionFlag that is not in the records
        fileFields = [(data[0].upper(), data[1], index-1) for index, data in enumerate(self._plutoShape.fields) if type(data) is not tuple]
        self._sortedFields = sorted(fileFields, key=lambda data: data[0])
        print("End of processing file Fields")
        return self._sortedFields
    
    def __processDataAttributes(self, _record):
        '''
        This function processa data atributes based on important atributes list. It use datatype convertion
        @param _record record from each read iteration
        '''
        attributes = {}
        # Getting File Data
        fields_to_extract = getExtractFields()
        for fieldName in fields_to_extract:
            # search an tuple that has field position information
            fieldElem = self.__searchElem(fieldName)

            if fieldElem is None:
                if fieldName == "BUILTFAR":
                    fieldElem = self.__searchElem("FAR")
                elif fieldName == "LANDUSE":
                    fieldElem = self.__searchElem("LANDUSE2")
                elif fieldName == "EXEMPTTOT":#exemptTotl
                    fieldElem = self.__searchElem("EXEMPTTOTL")
                    if fieldElem is None:
                        fieldElem = self.__searchElem("EXEMPTTOTA")

            fieldData = None
            if fieldElem is not None:
                fieldData = _record[fieldElem[2]]
                # Getting Data Type ins order to convert field data to properly DataType
                fieldDataType = fieldElem[1]
                if fieldDataType == 'C':
                    fieldData = str(fieldData)
                    fieldData = fieldData.replace(";", " ")
                elif fieldDataType == 'N':
                    fieldData = int(fieldData)
                elif fieldDataType == 'F':
                    fieldData = float(fieldData)
            
            attributes[fieldName] = fieldData
        
        return attributes

    def __processShapeFile(self):
        '''
        Processing shapefile to extract data info from shapefile
        '''
        print("Start processing File Data")
        recordsProcessed = 0
        recordsDiscarted = 0

        # Getting Important Field Length once
        fields_to_extract = getExtractFields()
        importantFieldLen = len(fields_to_extract)

        # Getting shapefile data
        shapefileData = self._plutoShape.shapeRecords()

        writeHeader = True

        # Open files to write data
        with open(self._outFileData, 'w') as _fpGeo, open(self._outFileAttr, 'w') as _fpAttr:
            index = 0
            # Loop through lines
            for lineData in shapefileData:
                index += 1
                # Getting lotShape
                lotShape = lineData.shape
                # Get shape parts
                numberOfShapePartitions = lotShape.parts
                # Get shape points
                numberOfPoints = lotShape.points

                # Discart lot that does not have shape points
                if len(numberOfPoints) == 0:
                    # print("discarting lot that does not have shape point")
                    recordsDiscarted += 1
                    continue

                # Getting bbl From Data
                bblFieldElement = self.__searchElem("BBL")
                if bblFieldElement is None:
                    bblFieldElement = self.__searchElem("TBL")
                bblData = int(lineData.record[bblFieldElement[2]])
                
                # Getting borough
                boroughNameFieldElement = self.__searchElem("BOROUGH")
                boroughNameData = lineData.record[boroughNameFieldElement[2]]

                # Getting borough
                boroughCodeFieldElement = self.__searchElem("BOROCODE")
                boroughCodeData = ''
                if (boroughCodeFieldElement is None):
                    boroughCodeData = self._boroughMap.get(boroughNameData)
                else :
                    boroughCodeData = str(int(lineData.record[boroughCodeFieldElement[2]]))

                # Getting block
                blockCodeFieldElement = self.__searchElem("BLOCK")
                blockCodeData = str(int(lineData.record[blockCodeFieldElement[2]]))
                blockCodeData = blockCodeData.zfill(5)

                # Getting lot
                lotCodeFieldElement = self.__searchElem("LOT")
                lotCodeData = str(int(lineData.record[lotCodeFieldElement[2]]))
                lotCodeData = lotCodeData.zfill(4)

                # generate manually BBL Code
                builtBBL = "{0}{1}{2}".format(boroughCodeData, blockCodeData, lotCodeData)

                # Extract Important fields from Data Record
                attributesData = self.__processDataAttributes(lineData.record)
                lotParts = lotShape.parts
                lotPoints = lotShape.points

                # Extract and deal with lot geometry
                geometries = self.__processLotGeometries(lotParts, lotPoints)

                # geoData = []
                # for geometry in geometries:
                #     # Converting NY To Global coordinates
                #     globalShape = self.__convertNYToGlobal(geometry)
                #     geoData.append(globalShape)
                
                # Writing Header on file
                if writeHeader:
                    # writing data headers to output file
                    self.__writeHeader(_fpAttr, isGeometry = False)
                    self.__writeHeader(_fpGeo, isGeometry = True)
                    writeHeader = False
                
                # Writing Data on file
                self.__writeDataAttributes(_fpAttr, builtBBL, attributesData)
                self.__writeDataGeometry(_fpGeo, builtBBL, geometries)
                
                # Printing status
                if index != 0 and index % 1000 == 0:
                    print("{0} records were processed.".format(recordsProcessed))
                    # break
                recordsProcessed += 1

        # Printing reading stats
        print("{0} records were processed.".format(recordsProcessed))
        print("{0} records were discarted.".format(recordsDiscarted))
        print("End of processing File Data")

    def __processLotGeometries(self, lotShapeParts, lotShapePoints):
        '''
        This function get shape parts and shape points. 
        As results, it produces a list that contains each shape points.
        '''
        shapes = []
        for i, index in enumerate(lotShapeParts):
            if i == len(lotShapeParts)-1:
                shapes.append(lotShapePoints[index:len(lotShapePoints)])
            else:
                shapes.append(lotShapePoints[index:lotShapeParts[i+1]])
        
        externalShapes = []
        removed = 0
        for shape in shapes:
            poly = Polygon(shape)
            # removing invalid shapes
            if not poly.is_valid:
                removed += 1
                continue
            external = True
            # Test if poly is inner poly
            for externalShape in externalShapes:
                externalPoly = Polygon(externalShape)
                if poly.within(externalPoly):
                    external = False
                    break
            # Test If poly is not inner from externals poly
            if external:
                externalShapes.append(shape)             
        
        return externalShapes

    def __writeDataGeometry(self, _fp, builtBBL, geometries):
        _fp.write(self._fileYear)
        _fp.write(self._delimiter)
        _fp.write(builtBBL)
        _fp.write(self._delimiter)
        _fp.write(json.dumps(geometries))
        _fp.write("\n")

    def __writeDataAttributes(self, _fp, builtBBL, attributesData):
        _fp.write(self._fileYear)
        _fp.write(self._delimiter)
        _fp.write(builtBBL)
        _fp.write(self._delimiter)
        extractAttributes = getExtractFields()
        # iterate to get selected fields from file
        for index, fieldName in enumerate(extractAttributes):
            attrData = attributesData.get(fieldName)
            attrData = str(attrData) if attrData is not None else "unknown"
            _fp.write(attrData)
            if index < len(extractAttributes)-1: 
                _fp.write(self._delimiter)
        _fp.write("\n")

    def __writeHeader(self, _fp, isGeometry = True):
        _fp.write("YEAR")
        _fp.write(self._delimiter)
        _fp.write("BBL")
        _fp.write(self._delimiter)

        if not(isGeometry):
            extractFields = getExtractFields()
            for index, fieldName in enumerate(extractFields):
                _fp.write(fieldName.upper())
                if index < len(extractFields)-1: 
                    _fp.write(self._delimiter)
            _fp.write("\n")
        else:
            _fp.write("LOT_GEOMETRY")
            _fp.write("\n")

    def __searchElem(self, fieldName):
        '''
        Return field Index if file has this field using binary search
        @param fieldName
        @return fieldIndex
        '''
        upperFielName = fieldName.upper()
        iniIndex = 0
        finalIndex = len(self._sortedFields) - 1
        # start lopping to find Elem
        while iniIndex <= finalIndex:
            midIndex = int((finalIndex + iniIndex)/2)
            midElem = self._sortedFields[midIndex]
            midElemName = midElem[0]
            # compare if mid elem is the search elem
            if upperFielName == midElemName:
                return midElem
            # compare if search elem is grather than the mid, loop upper slice
            elif upperFielName > midElemName:
                iniIndex = midIndex + 1
            # compare if search elem is less than the mid elem, loop lower slice 
            elif upperFielName < midElemName:
                finalIndex = midIndex - 1
        # return none if we can not find any element
        return None

    def __convertNYToGlobal(self, points):
        '''
        This function convert points coordinate from NY island to Global coordinate.
        '''
        new_points = []
        for point in points:
            temp_point = self.globalProjection.transform(point[0], point[1])
            new_points.append(temp_point)
        # for point in points :
        #     converted_point = []
            # point_in_meters = []
            # point_in_meters.append(point[0] * 0.3048)
            # point_in_meters.append(point[1] * 0.3048)
            # self.globalProjection.transform(point, converted_point)
            # new_points.append(converted_point)
        # new_points = [(self.globalProjection.transform(point[0]*0.3048, point[1]*0.3048)) for point in points]
        return new_points

    def startProcessing(self):
        '''
        This function has starts all execution pipeline
        '''
        self.__readShapefile()
        self.__processFields()
        self.__processShapeFile()
        
    def testLibrary(self):
        print("Testing Data")
        testID = 0
        
        print("Test", testID, self._sortedFields)
        testID += 1
        
        print("Test", testID, self.__searchElem("garagearea"))
        testID += 1

def run_process(_borough, _fileName, _delimiter):
    for _year in years:
            print("Starting year: {0}".format(_year))
            # fullFilePath = "D:/projects/NewYorkCity/{fileYear}/{borough}/{fileName}"
            print(os.path.join(os.getcwd(), "./NewYorkCity/{fileYear}/{borough}/{fileName}"))
            fullFilePathTemplate = os.path.join(os.getcwd(),"./NewYorkCity/{fileYear}/{borough}/{fileName}")
            fullFilePath = fullFilePathTemplate.format(borough=_borough, fileYear=_year, fileName=_fileName)
            print(_fileName, fullFilePath)
            if not os.path.exists( fullFilePath + '.shp' ):
                fullFilePath = fullFilePathTemplate.format(borough=_borough, fileYear=_year, fileName=_fileName.lower())
                print(_fileName, fullFilePath)
            
            outputFilePath = "./Data/{borough}/{fileYear}".format(borough=_borough, fileYear=_year)
            # verify if borough folder already exists, if not then create it
            if not os.path.exists(outputFilePath):
                os.makedirs(outputFilePath)
            # create path to save files from borough
            outputFilePath = os.path.join(outputFilePath, "{borough}_{fileYear}_raw.out".format(borough=_borough, fileYear=_year))
            # Calling Data cleaner
            dataCleaning = DataCleaning(fullFilePath, _year, _delimiter,  outputFilePath)
            dataCleaning.startProcessing()
            # dataCleaning.testLibrary()

if __name__ == '__main__':
    _dict = {"Manhattan":"MNMapPLUTO", "Brooklyn":"BKMapPLUTO", "StatenIsland":"SIMapPLUTO", "Bronx":"BXMapPLUTO", "Queens":"QNMapPLUTO" }
    # _dict = {"StatenIsland":"SIMapPLUTO", "Bronx":"BXMapPLUTO", "Queens":"QNMapPLUTO" }
    # _dict = {"Queens":"QNMapPLUTO"}
    ps = []
    for _borough in boroughs:
        _fileName = _dict.get(_borough)
        print(_borough, _fileName)
        _delimiter = ";"
        if _fileName == None:
            continue
        p = Process(target=run_process, args=(_borough, _fileName, _delimiter))
        ps.append(p)
    for p in ps:
        p.start()
    for p in ps:
        p.join()