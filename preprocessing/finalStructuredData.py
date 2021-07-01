import json
import os

from typing import Optional, Any
from Model.lotData import LotData
from Model.neighborhood import NeighborhoodHandler
from Model.util import *
from Model.geometryds import GeometryDS
from Model.attributesds import AttributesDS
from shapely.geometry.polygon import Polygon
from multiprocessing import Process


class FinalStructured:
    def __init__(self, years, allowRedundanceRemoval, delimiter, neighFileName, boroughID, _type):
        self._years = years
        self.__applyRedundanceRemoval = allowRedundanceRemoval
        self._boroughID = boroughID
        self._delimiter = delimiter
        self.__neighborhoodStructure = NeighborhoodHandler(neighFileName, delimiter)
        self._highsDataStructure = {}
        self._lowsDataStructure = {}
        self._CategDataStructure = {}
        self._transtypeDataStructure = {}
        self._attributesChanges = {}
        self._lGeometryDataStructure = GeometryDS()
        self._lAttNumHighsDataStructure: AttributesDS = AttributesDS()
        self._lAttNumLowsDataStructure: AttributesDS = AttributesDS()
        self._lAttrCategDataStructure: AttributesDS = AttributesDS()
        self.fplogOut = open("./Data/{0}_{1}_log.csv".format(boroughID, _type), 'w')

    def processGeometriesFile(self, fileName, year):
        """
        This Method Receive a fileName and create final dataSctrucutre for only transtype base on it
        """
        newGeometries = 0
        keepGeometries = 0
        with open(fileName, 'r') as fp:
            for ind, line in enumerate(fp):
                if ind == 0 and "YEAR;BBL" in line:
                    continue
                lineSplitted = line.replace("\n", "").split(self._delimiter)
                # 0 - YEAR
                year = lineSplitted[0]
                # 1 - FAKEBBL
                BBL = lineSplitted[1]
                # 3 - GEOMETRY json stringfied
                geometry = lineSplitted[2]
                ## INSETING TRANSTYPE
                # Starting filling up the data structured
                lotInfo = self._transtypeDataStructure.get(BBL)
                if lotInfo is None:
                    lotInfo = LotData()
                    lotInfo.setBBL(BBL)
                    self._transtypeDataStructure[BBL] = lotInfo
                similarPreviousGeometry = False
                if self.__applyRedundanceRemoval:
                    prevYear = getPreviousYear(year, self._years)
                    # Compare lot geometry with the last year
                    if prevYear is not None:
                        prevGeometryID = lotInfo.getShapes(prevYear)
                        # if prev Geometry ID is none, this lot does not have geometry
                        if prevGeometryID is not None:
                            prevGeometry = self._lGeometryDataStructure.getGeometry(self._boroughID, prevGeometryID)
                            prevGeometries = json.loads(prevGeometry)
                            currGeometries = json.loads(geometry)                        
                            if self.__verifyGeometries(currGeometries, prevGeometries):
                                lotInfo.insertGeometry(year, prevGeometryID)
                                similarPreviousGeometry = True
                                keepGeometries += 1
                            else:
                                newGeometries += 1
                    else:
                        newGeometries += 1
                if not(similarPreviousGeometry):
                    geometryID = self._lGeometryDataStructure.insertLotGeometry(self._boroughID, geometry)
                    lotInfo.insertGeometry(year, geometryID)
                    
        prevYear = getPreviousYear(year, self._years)
        self.fplogOut.write("{year}{deli}{0}{deli}{1}\n".format(keepGeometries, newGeometries, year=year, deli=self._delimiter))
        # print("[Geometries]{deli}{0} to {1}, {2} geometries were kept.".format(prevYear, year, keepGeometries))

    def __verifyGeometries(self, currentShapes, previousShapes):
        results = [self.__findSimilar(currentShape, previousShapes) for currentShape in currentShapes]
        
        accept = True

        for result in results:
            accept = accept and result
        
        return accept

    def __findSimilar(self, currentShape, previousShapes):
        curr = Polygon(currentShape)
        for previousShape in previousShapes:
            prev = Polygon(previousShape)

            intersectPoly = prev.intersection(curr)

            prevPorcentage = intersectPoly.area / prev.area
            currPorcentage = intersectPoly.area / curr.area

            if prevPorcentage > 0.9 and currPorcentage > 0.9:
                return True
        return False

    def processAttributeFile(self, fileName, year):
        highKeep = 0
        highNew = 0
        lowsKeep = 0
        lowsNew = 0
        categKeep = 0
        categNew = 0
        with open(fileName, 'r') as fp:
            for line in fp:
                lineSplitted = line.replace("\n", "").split(self._delimiter)
                # 0 - YEAR
                year = lineSplitted[0]
                # 1 - REALBBL
                realBBL = lineSplitted[1]
                # 2 - numerical highs
                highs = json.loads(lineSplitted[2])
                # 3 - numerical low
                lows = json.loads(lineSplitted[3])
                # 4 - categorical
                categ = json.loads(lineSplitted[4])
                
                # test highs
                pHighKeep, pHighNew = self.attributesRedundancyRemoval(year, realBBL, highs, self._highsDataStructure, self._lAttNumHighsDataStructure)
                highKeep += pHighKeep
                highNew += pHighNew
                # test lows
                pLowsKeep, pLowsNew = self.attributesRedundancyRemoval(year, realBBL, lows, self._lowsDataStructure, self._lAttNumLowsDataStructure)
                lowsKeep += pLowsKeep
                lowsNew += pLowsNew
                # test categories
                pCategKeep, pCategNew = self.attributesRedundancyRemoval(year, realBBL, categ, self._CategDataStructure, self._lAttrCategDataStructure)
                categKeep += pCategKeep
                categNew += pCategNew
        self.fplogOut.write("{year}{deli}{0}{deli}{1}\n".format( highKeep, highNew, year=year, deli=self._delimiter) )
        self.fplogOut.write("{year}{deli}{0}{deli}{1}\n".format( lowsKeep, lowsNew, year=year, deli=self._delimiter) )
        self.fplogOut.write("{year}{deli}{0}{deli}{1}\n".format( categKeep, categNew, year=year, deli=self._delimiter) )

    def attributesRedundancyRemoval(self, year, realBBL, attributesData, attributesBBLData, attributesDataStructures):
        yearData = attributesBBLData.get(realBBL)
        keepAttributes = 0
        newAttributes = 0
        if yearData is None:
            yearData = {}
        # Searching yearDataAttributes
        attributesYearData = yearData.get(year)
        if attributesYearData is None:
            attributesYearData = attributesData
        else:
            print("{0} collapsed on {1}".format(realBBL, year))

        hasToAddOnAttributeDS = True
        if self.__applyRedundanceRemoval:
            properlyID = -1
            prevYear = getPreviousYear(year, self._years)
            if prevYear is not None:
                prevID = yearData.get(prevYear)
                if prevID is not None:
                    prevYearAttributeData = attributesDataStructures.getAttribute(self._boroughID, prevID)
                    if self.__keepAttributes(realBBL, prevYearAttributeData, attributesYearData):
                        properlyID = prevID
                        hasToAddOnAttributeDS = False
                        keepAttributes += 1
                    else:
                        newAttributes += 1
            else:
                newAttributes += 1

        if hasToAddOnAttributeDS:
            properlyID = attributesDataStructures.insertLotAttribute(self._boroughID, attributesYearData)
        # ADD on year Attribute data
        yearData[year] = properlyID
        # Add on final Data Structure
        attributesBBLData[realBBL] = yearData
        return (keepAttributes, newAttributes)

    def __keepAttributes(self, bbl, prevYearAttributeData, currentAttributesYearData):
        hasToKeep = True
        
        for attrName in prevYearAttributeData:
            if str(attrName).upper() in ["BOROCODE","BOROUGH","BLOCK","LOT", "LOTSALIVE"]:
                continue
            prevData = prevYearAttributeData.get(attrName)
            currData = currentAttributesYearData.get(attrName)
            if str(attrName).upper() in ["NUMFLOORS"]:
                prevData = int(float(prevData))
                currData = int(float(currData))
            else:
                if prevData != "unknown" and len(prevData) > 0:
                    oldValue = prevData
                    try:
                        prevData = float(prevData)
                    except:
                        prevData = oldValue
                if currData != "unknown" and len(currData) > 0:
                    oldValue = currData
                    try:
                        currData = float(currData)
                    except:
                        currData = oldValue
            if prevData != currData:
                if hasToKeep:
                    hasToKeep = False
                #     print("")
                #     print("HERE {0}".format(bbl))
                count = self._attributesChanges.get(attrName)
                if count is None:
                    count = 0
                count += 1
                self._attributesChanges[attrName] = count
                # print("{0}: {1}-{2}".format(attrName, prevData, currData))
                # return False
        
        return hasToKeep

    def showAttributesChanges(self, borough, year):
        if len(self._attributesChanges) == 0:
            return
        prevYear = getPreviousYear(year, self._years)
        currYear = year if '.2' in year else "{0}.1".format(year)
        histoFolfer = "./Histogram/{0}".format(borough)
        if not os.path.exists(histoFolfer):
            os.makedirs(histoFolfer)
        fileHistogramName = "./Histogram/{0}/{1}_{2}-{3}_histogram.out".format(borough, borough, prevYear, currYear)

        histogram = list(self._attributesChanges.items()) #[(attrName, count) for attrName, count in self._attributesChanges.items()]
        sorted_histogram = sorted(histogram, key=lambda data: data[1], reverse=True)
        top5Histogram = sorted_histogram[:10]
        # sorted_name_top5histogram = sorted(top5Histogram, key=lambda data: data[0])
        names = [elem[0] for elem in top5Histogram]

        with open(fileHistogramName, 'w') as fp:
            line = self._delimiter.join(names)
            fp.write(line) 
        
    def __dealBuildClassAndLandUse(self, attributesYearData, unnusedLot, missingLandUse, missingBuildingClass):
        # unnusedLot = 0
        # missingLandUse = 0
        # missingBuildingClass = 0
        if "LANDUSE" in uniqueFieldsSet and "BLDGCLASS" in uniqueFieldsSet:
            oldLandUse = attributesYearData.get("LANDUSE")
            buildingClass = attributesYearData.get("BLDGCLASS")
            # stats does not have nor land use nor builduing class
            if oldLandUse == '' and buildingClass == '':
                unnusedLot += 1
            # stats does not have land use
            if oldLandUse == '':
                missingLandUse += 1
            # stats does not have builduing class
            if buildingClass == '':
                missingBuildingClass += 1
            # Assign new Category
            newLandUse = self.__getNewLandUseCategory(oldLandUse)
            # Checking if newLandUse is not none, if it is, UNKNOWN is assigned to it.
            if newLandUse is None:
                missingLandUse += 1
                newLandUse = "UNKNOWN"
            attributesYearData["TLTYPE"] = newLandUse

    def __getNewLandUseCategory(self, oldLandUse):
        if oldLandUse != "":
            if '01' <= oldLandUse <= '03':
                return "RESIDENTIAL"
            elif oldLandUse == '04':
                return "MIXED"
            elif oldLandUse == '05':
                return "COMMERCIAL"
            elif oldLandUse == '06':
                return "INDUSTRIAL"
            elif '07' <= oldLandUse <= '10':
                return "OTHERS"
            elif oldLandUse == "11":
                return "VACANTLAND"
        return None

    def processFinalDataStructure(self, dumpFileName):
        self.fplogOut.close()
        """
        This procedure generates the final dataStructure with only properly information
        """
        transtypeLength = len(self._transtypeDataStructure)
        attributeHighLength = len(self._highsDataStructure)
        attributeLowLength = len(self._lowsDataStructure)
        attributeCategLength = len(self._CategDataStructure)

        print("{0} transtype data length, high: {1}, low: {2}, categ: {3} attributes data length.".format(transtypeLength, attributeHighLength, attributeLowLength, attributeCategLength))

        unknownLots = 0
        with open(dumpFileName, 'w') as fp:
            ind = -1
            for BBL in self._transtypeDataStructure.keys():
                ind += 1
                lotInfo = self._transtypeDataStructure.get(BBL)

                boroughCode = lotInfo.getBoroughCode()
                lastGeometryID = lotInfo.getGeometry()
                if lastGeometryID is None:
                    print("Withou Geometry ID", BBL)
                    continue

                lotShapeDumped = self._lGeometryDataStructure.getGeometry(self._boroughID, lastGeometryID)
                lotShape = json.loads(lotShapeDumped)

                neighCode = self.__neighborhoodStructure.findNeighborhood(boroughCode, lotShape)
                if neighCode == "UNKNOWN":
                    # print(BBL)
                    unknownLots += 1
                else:
                    lotInfo.setNeighborhoodCode(neighCode)

                # Wrinting Header
                if ind == 0:
                    fp.write(lotInfo.getFileHeader(self._delimiter))

                # Getting attributes to a realBBL
                lotAttrHighData = self._highsDataStructure.get(BBL)
                if lotAttrHighData is None:
                    print(BBL, "Does Not have AttrData")
                    continue
                lotAttrLowsData = self._lowsDataStructure.get(BBL)
                if lotAttrLowsData is None:
                    print(BBL, "Does Not have AttrData")
                    continue
                lotAttrCategData = self._CategDataStructure.get(BBL)
                if lotAttrCategData is None:
                    print(BBL, "Does Not have AttrData")
                    continue

                # inserting attribute on lotData
                for year in self._years:
                    attrHighDictFromYear = lotAttrHighData.get(year)
                    if attrHighDictFromYear is not None:
                        lotInfo.insertAttributesData(year, attrHighDictFromYear, "HIGH")
                    attrLowDictFromYear = lotAttrLowsData.get(year)
                    if attrLowDictFromYear is not None:
                        lotInfo.insertAttributesData(year, attrLowDictFromYear, "LOW")
                    attrCategDictFromYear = lotAttrCategData.get(year)
                    if attrCategDictFromYear is not None:
                        lotInfo.insertAttributesData(year, attrCategDictFromYear, "CATEG")

                lineStr = lotInfo.getStringfy(self._delimiter)
                fp.write(lineStr)

                if ind != 0 and ind % 1000 == 0:
                    print("{0} records Processed.".format(ind))
                

        self._lGeometryDataStructure.dump(dumpFileName.replace(".out", "_geometries.out"))
        self._lAttNumHighsDataStructure.dump(dumpFileName.replace(".out", "_attributes_high.out"))
        self._lAttNumLowsDataStructure.dump(dumpFileName.replace(".out", "_attributes_low.out"))
        self._lAttrCategDataStructure.dump(dumpFileName.replace(".out", "_attributes_categ.out"))

        print("Lot that does not have neighborhood", unknownLots)

    # END OF FINAL STRUCTURE
def run_borough(_borough, delimiter, typedata, allowRedundanceRemoval, neighborhoodFileName):
    _boroughID = get_borough_index(_borough) 
    if _boroughID == -1:
        raise Exception('Borough ID does not exist.')
    _boroughID += 1
    fStructured = FinalStructured(years, allowRedundanceRemoval, delimiter, neighborhoodFileName, _boroughID, typedata)
    fullFilePathTemplate = "./Data/{borough}/{fileYear}/{fileName}"
    fileNameTemplate = "{borough}_{year}_raw.out"
    fileNameAttrTemplate = "{borough}_{year}_rawattr_splitted.out"
    fileNameOutTemplate = "{type}_{borough}_fullFinalData_withNeighCode.out"
    for _year in years:
        _fileName = fileNameTemplate.format(borough=_borough, year=_year)
        _fileNameAttr = fileNameAttrTemplate.format(borough=_borough, year=_year)
        fullFilePath = fullFilePathTemplate.format(borough=_borough, fileYear=_year, fileName=_fileName)
        fullFilePathAttr = fullFilePathTemplate.format(borough=_borough, fileYear=_year, fileName=_fileNameAttr)
        print("Year {0}".format(_year))
        fStructured.processGeometriesFile(fullFilePath, _year)
        fStructured.processAttributeFile(fullFilePathAttr, _year)
        fStructured.showAttributesChanges(_borough, _year)
    # After every file was processed and structures was created, then process final Structure in order to get final
    # dataset
    fileOutName = fileNameOutTemplate.format(borough=_borough, type=typedata)
    print("{0} Processing final file.".format(_borough))
    fStructured.processFinalDataStructure("./Data/{borough}/{fileName}".format(borough=_borough, fileName=fileOutName))

# Functions to be parallelize
def run_process(delimiter, typedata):
    neighborhoodFileName = "./Data/{type}_fromboroughs.out".format(type=typedata)
    allowRedundanceRemoval = True
    ps = []
    for _borough in boroughs:
        # TODO: pass boroughCode that will be used to retrive Attribute and geometry
        # run_borough(_borough, delimiter, typedata, allowRedundanceRemoval, neighborhoodFileName)
        p = Process(target=run_borough, args=(_borough, delimiter, typedata, allowRedundanceRemoval, neighborhoodFileName))
        p.start()
        ps.append(p)
    for p in ps:
        p.join()

def consolidate_results(delimiter):
    
    for _borough in boroughs:
        fileBoroughName = "./Histogram/{0}_histogram.out".format(_borough)
        elemSet = set()
        fristRound = True
        with open(fileBoroughName, 'w') as fpOut:
            for year in years:
                prevYear = getPreviousYear(year, years)
                if prevYear is None:
                    continue
                currYear = year if '.2' in year else "{0}.1".format(year)
                fileHistogramName = "./Histogram/{0}/{1}_{2}-{3}_histogram.out".format(_borough, _borough, prevYear, currYear)
                with open(fileHistogramName, 'r') as fp:
                    elem = fp.readline()
                    yearElemSet = set(elem.replace("\n","").split(delimiter))
                    if year > '2003':
                        if fristRound:
                            fristRound = False
                            elemSet = yearElemSet
                        else:
                            elemSet = elemSet.intersection(yearElemSet)
                    fpOut.write("{0}\n".format(elem))
            fpOut.write("\n{0}\n".format( delimiter.join( list(elemSet) ) ))


def run_process():
    # _boroughs = ["Manhattan", "Brooklyn"]
    delimiter = ";"
    # types = ["cd", "neigh"]
    types = ["cd", "neigh"]
    ps = []
    for typeData in types:
        print("run {0}".format(typeData))
        p = Process(target=run_process, args=(delimiter, typeData))
        ps.append(p)
        p.start()
    for p in ps:
        p.join()
        # run_process(delimiter, typeData)
    # consolidate_results(delimiter)

if __name__ == '__main__':
    run_process()
