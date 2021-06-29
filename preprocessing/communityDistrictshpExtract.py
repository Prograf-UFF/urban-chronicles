import shapefile as sf
from shapely.geometry import Polygon
from pyproj import Proj
import json
from Model.util import get_projection

class NeighborhoodItem():
    def __init__(self, neighCode, neighName, neighShape):
        self.__code = neighCode
        self.__name = neighName
        self.__shape = neighShape
        self.__neighbors = []

    def exportHeader(self, fp, delimiter):
        fp.write("CODE")
        fp.write(delimiter)
        fp.write("NEIGHNAME")
        fp.write(delimiter)
        # fp.write("NEIGHBORS")
        # fp.write(delimiter)
        fp.write("SHAPE")
        fp.write("\n")

    def exportData(self, fp, delimiter):
        fp.write(self.__code)
        fp.write(delimiter)
        fp.write(self.__name)
        fp.write(delimiter)
        # fp.write(json.dumps(self.__neighbors))
        # fp.write(delimiter)
        fp.write(json.dumps(self.__shape))
        fp.write("\n")

    def getNeighCode(self):
        return self.__code

    def getNeighName(self):
        return self.__name

    def getNeighShape(self):
        return self.__shape

    def insertNeighbors(self, neighborCode):
        self.__neighbors.append(neighborCode)

    def getNeighbors(self):
        return self.__neighbors

class NeighborhoodHandler():
    def __init__(self, fileName, delimiter):
        self.globalProjection =get_projection()
        self.__delimiter = ";"
        self.__fileName = fileName
        self.__delimiter = delimiter
        self.__neighborhoodData = {}
        self.__loadNeighborhood()
        # self.__processNeighbors()
        self.__generateOutputFile()

    def __convertNYToGlobal(self, points):
        """
        This function convert points coordinate from NY island to Global coordinate.
        """
        new_points = []
        for point in points:
            temp_point = self.globalProjection.transform(point[0], point[1])
            new_points.append(temp_point)
        # new_points = [(self.globalProjection(point[0]*0.3048, point[1]*0.3048)) for point in points]
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
        # [['BoroCode', 'N', 4, 0], ['BoroName', 'C', 13, 0], ['CountyFIPS', 'C', 3, 0], ['NTACode', 'C', 4, 0],
        # ['NTAName', 'C', 75, 0], ['Shape_Leng', 'F', 19, 11], ['Shape_Area', 'F', 19, 11]]
        # [['boro_code', 'N', 33, 31], ['boro_name', 'C', 254, 0], ['county_fip', 'C', 254, 0],
        # ['ntacode', 'C', 254, 0], ['ntaname', 'C', 254, 0], ['shape_area', 'N', 33, 31], ['shape_leng', 'N', 33, 31]]
        print(neighborReader.fields)
        neighborhoodData = neighborReader.shapeRecords()
        # neighborhoodLen = len(neighborhoodData)
        for item in neighborhoodData:
            boroCD = str(item.record.BoroCD)
            # neighBoroCode = elem
            # neighBoroName = item.record[2]
            # neighRecCode = item.record[3]
            # neighRecName = item.record[4]
            # neighCountFIPS = item.record[2]
            # Field linked to Census
            
            neighBoroCode = boroCD[0]
            neighRecCode = boroCD[1:]
            neighRecName = neighRecCode

            shapePoints = item.shape.points
            nShapes = []
            if True:
                shapeParts = item.shape.parts

                shapes = self.__processGeometries(shapeParts, shapePoints)
                
                nShapes = shapes
                
                # nShapes = []
                # for shape in shapes:
                #     nShape = self.__convertNYToGlobal(shape)
                #     nShapes.append(nShape)
            else:
                nShapes = self.__convertNYToGlobal(shapePoints)
                

            neighItem = NeighborhoodItem(neighRecCode, neighRecName, nShapes)
            boroughData = self.__neighborhoodData.get(neighBoroCode)

            if boroughData is None:
                boroughData = []
                self.__neighborhoodData[neighBoroCode] = boroughData

            boroughData.append(neighItem)

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
        with open("./Data/cd_fromboroughs.out", 'w') as _fp:
            for boroughCode in self.__neighborhoodData:
                neighData = self.__neighborhoodData.get(boroughCode)
                for ind, neigh in enumerate(neighData):

                    if ind == 0:
                        _fp.write("BOROUGH")
                        _fp.write(self.__delimiter)
                        neigh.exportHeader(_fp, self.__delimiter)

                    _fp.write(boroughCode)
                    _fp.write(self.__delimiter)
                    neigh.exportData(_fp, self.__delimiter)

if __name__ == '__main__':
    fileName = "./Data/nycd_19c/nycd"
    delimiter = ";"
    # fileName = "/media/claudio/Data/Projects/UFF/LABNY/MapPlutoResources/Neighborhood Tabulation Areas \
    # /NYCNeighborhoods"
    # fullFilePath = "/media/claudio/Data/Projects/UFF/LABNY/MapPlutoResources/{borough}/{fileYear}/{fileName}"
    # .format(borough=_borough, fileYear=_year, fileName=_fileName)
    nh = NeighborhoodHandler(fileName, delimiter)
