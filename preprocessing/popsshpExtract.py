import shapefile as sf
from shapely.geometry import Polygon
from pyproj import Proj
import json
from Model.util import get_projection

class POPsItem():
    def __init__(self, CDCode, CDName, bbl, yearBuilt, CDShape):
        self.__code = CDCode
        self.__name = CDName
        self.__bbl = bbl
        self.__yearBuilt = yearBuilt
        self.__shape = CDShape
        

    def exportHeader(self, fp, delimiter):
        fp.write("POPSCode")
        fp.write(delimiter)
        fp.write("BUILDNAME")
        fp.write(delimiter)
        # fp.write("NEIGHBORS")
        fp.write("BBL")
        fp.write(delimiter)
        fp.write("YEAR_BUILT")
        fp.write(delimiter)
        fp.write("SHAPE")
        fp.write("\n")

    def exportData(self, fp, delimiter):
        fp.write(self.__code)
        fp.write(delimiter)
        fp.write(self.__name)
        fp.write(delimiter)
        # fp.write(json.dumps(self.__neighbors))
        fp.write(self.__bbl)
        fp.write(delimiter)
        fp.write(self.__yearBuilt)
        fp.write(delimiter)
        fp.write(json.dumps(self.__shape))
        fp.write("\n")

    def getPOPsCode(self):
        return self.__code

    def getPOPsName(self):
        return self.__name

    def getPOPsBBL(self):
        return self.__bbl

    def getPOPsShape(self):
        return self.__shape

    def getYearbuilt(self):
        return self.__yearBuilt

class POPsHandler():
    def __init__(self, fileName, delimiter):
        self.globalProjection = get_projection()
        self.__delimiter = ";"
        self.__fileName = fileName
        self.__delimiter = delimiter
        self.__neighborhoodData = {}
        self.__loadNeighborhood()
        # self.__processNeighbors()
        self.__generateOutputFile()

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

    def __processGeometries(self, lotShapeParts, lotShapePoints):
        """
        This function get shape parts and shape points.
        As results, it produces a list that contains each shape points.
        """
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

    def __loadNeighborhood(self):
        neighborReader = sf.Reader(self.__fileName)
        # print(neighborReader.fields)
        # [['POPS_Numbe', 'C', 254, 0], ['Borough_Na', 'C', 254, 0], ['Borough_Co', 'N', 10, 0], ['Community_', 'N', 10, 0], ['Address_Nu', 'N', 10, 0], ['Street_Nam', 'C', 254, 0], 
        # ['Zip_Code', 'N', 10, 0], ['Building_A', 'C', 254, 0], ['Tax_Block', 'N', 10, 0], ['Tax_Lot', 'N', 10, 0], ['Building_N', 'C', 254, 0], ['Building_L', 'C', 254, 0], 
        # ['Year_Compl', 'C', 254, 0], ['Building_C', 'C', 254, 0], ['Public_S_1', 'C', 254, 0], ['Developer', 'C', 254, 0], ['Building_1', 'C', 254, 0], ['Principal_', 'C', 254, 0], 
        # ['Size_Requi', 'C', 254, 0], ['Hour_Of_Ac', 'C', 254, 0], ['Amenities_', 'C', 254, 0], ['Other_Requ', 'C', 254, 0], ['Permitted_', 'C', 254, 0], ['Physically', 'C', 254, 0], 
        # ['Latitude', 'F', 19, 11], ['Longitude', 'F', 19, 11], ['XCoordinat', 'N', 10, 0], ['YCoordinat', 'N', 10, 0]]
        boroughs_Names = ["Manhattan", "Bronx", "Brooklyn", "Queens", "StatenIsland"]
        print(neighborReader.fields)
        neighborhoodData = neighborReader.shapeRecords()
        neighborhoodLen = len(neighborhoodData)
        print("Data Len",neighborhoodLen)
        und_const = 0
        completed = 0
        empty = 0
        true_year = 0
        anything = 0
        boroughs = []
        for item in neighborhoodData:
            popsNumber = item.record.POPS_Numbe
            if popsNumber == 'K020009':
                print("HERE")
            # neighBoroName = item.record[2]
            buildingName = item.record.Building_N
            buildingL = item.record.Building_L
            yearBuilt = str(item.record.Year_Compl).upper()

            boroughCode = str(item.record.Borough_Na)
            boroughCode = str(boroughs_Names.index(boroughCode) + 1)
            boroughs.append(boroughCode)
            block = str(item.record.Tax_Block).rjust(5, '0')
            lot = str(item.record.Tax_Lot).rjust(4, '0')
            bbl = "{0}{1}{2}".format(boroughCode, block, lot)

            if "UNDER" in yearBuilt and yearBuilt.index("UNDER") >= 0 :
                und_const += 1
                continue
            elif "COMPL" in yearBuilt and yearBuilt.index("COMPL") >= 0:
                completed += 1
                continue
            elif len(yearBuilt) == 0:
                empty += 1
                continue    
            elif "1" in yearBuilt or "2" in yearBuilt:
                true_year += 1
            else:
                print(yearBuilt)
                anything += 1
                continue

            # yearBuilt = int(yearBuilt)
            # Todo: Fazer algo que melhore essa comparação
            # if yearBuilt < 2002:
            #     yearBuilt = 2002
            # elif yearBuilt > 2017:
            #     continue

            # yearBuilt = str(yearBuilt)
            # neighCountFIPS = item.record[2]
            # Field linked to Census
            
            # neighBoroCode = elem[0]
            # neighRecCode = elem[1:]
            # neighRecName = neighRecCode

            shapePoints = list((item.shape.points)[0])             

            nShapes = self.__convertNYToGlobal([shapePoints])

            neighItem = POPsItem(popsNumber, buildingName, bbl, yearBuilt, nShapes[0])
            boroughData = self.__neighborhoodData.get(boroughCode)

            if boroughData is None:
                boroughData = []
                self.__neighborhoodData[boroughCode] = boroughData

            boroughData.append(neighItem)

        print("Under Construction", und_const)
        print("Completed", completed)
        print("Empty", empty)
        print("Year", true_year)

    def __processNeighbors(self):
        for boroughCode in self.__neighborhoodData:
            boroughData = self.__neighborhoodData.get(boroughCode)

            for indA, itemA in enumerate(boroughData):
                shapeA = itemA.getNeighShape()
                polA = Polygon(shapeA)
                for indB, itemB in enumerate(boroughData):
                    # I cant compare same item
                    if indA == indB:
                        continue

                    shapeB = itemB.getNeighShape()
                    codeB = itemB.getNeighCode()
                    polB = Polygon(shapeB)

                    if polA.intersects(polB):
                        itemA.insertNeighbors(codeB)

    def __generateOutputFile(self):
        header = True
        with open("./Data/pops_fromboroughs.out", 'w') as _fp:
            for boroughCode in self.__neighborhoodData:
                neighData = self.__neighborhoodData.get(boroughCode)
                for neigh in neighData:
                    if header:
                        _fp.write("BOROUGH")
                        _fp.write(self.__delimiter)
                        neigh.exportHeader(_fp, self.__delimiter)
                        header = False

                    _fp.write(boroughCode)
                    _fp.write(self.__delimiter)
                    neigh.exportData(_fp, self.__delimiter)

def run_process():
    fileName = "./Data/nycpops/nycpops"
    delimiter = ";"
    # fileName = "/media/claudio/Data/Projects/UFF/LABNY/MapPlutoResources/Neighborhood Tabulation Areas \
    # /NYCNeighborhoods"
    # fullFilePath = "/media/claudio/Data/Projects/UFF/LABNY/MapPlutoResources/{borough}/{fileYear}/{fileName}"
    # .format(borough=_borough, fileYear=_year, fileName=_fileName)
    nh = POPsHandler(fileName, delimiter)

if __name__ == '__main__':
    run_process()
