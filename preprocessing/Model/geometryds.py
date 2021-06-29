import json


class GeometryDS:
    def __init__(self, deli = ";"):
        self.__geometriesDS = {}
        self.__uniqueID = 0
        self.__delimiter = deli

    def __getId(self):
        result = self.__uniqueID
        self.__uniqueID += 1
        return result

    def getCurrentId(self):
        return self.__uniqueID

    def insertLotGeometry(self, boroughCode, geometry):
        """
        This function add lot geometry to data structure and return an geometry ID
        @param geometry - Lot geometry for the given year
        @result geometryId - Id that the geometry has at the data structure
        """
        if type(boroughCode) is str:
            boroughCode = int(boroughCode)
        
        boroughDS = self.__geometriesDS.get(boroughCode)
        if boroughDS is None:
            boroughDS = {}
            self.__geometriesDS[boroughCode] = boroughDS
        result = self.__getId()
        if type(geometry) == list:
            geometry = json.dumps(geometry)
        boroughDS[result] = geometry
        return result

    def getGeometry(self, boroughCode, id):
        """
        This function return a geometry from a given id
        @param id -  geometry id
        @return geometry - lot geometry
        """
        if type(boroughCode) is str:
            boroughCode = int(boroughCode)
        resultGeoemtries = self.__geometriesDS.get(boroughCode)
        result = None
        if resultGeoemtries is not None:
            result = resultGeoemtries.get(id)
        return result

    def dump(self, fileName):
        """
        This method dumps data structure into the given file
        @param fileName - file path that will be used to store Geometry Data Structure
        """
        with open(fileName, 'w') as fp:
            for boroughCode in self.__geometriesDS:
                boroughDS = self.__geometriesDS.get(boroughCode)
                for id in boroughDS:
                    geometry = boroughDS.get(id)
                    if type(geometry) == list:
                        geometry = json.dumps(geometry)
                    fp.write("{0}{deli}{1}{deli}{2}\n".format(boroughCode, id, geometry, deli=self.__delimiter))

    def load(self, boroughCode, fileName):
        """
        This Method loads geometry data structure from a file
        @param fileName - file where data structure is stored
        """
        geometries = {}
        if type(boroughCode) is str:
            boroughCode = int(boroughCode)
        with open(fileName, 'r') as fp:
            for line in fp:
                lineSplitted = line.split(self.__delimiter)
                id = int(lineSplitted[1])
                if id > self.__uniqueID:
                    self.__uniqueID = id
                geometry = lineSplitted[2]
                geometries[id] = geometry
        self.__geometriesDS[boroughCode] = geometries


if __name__ == '__main__':
    gDs = GeometryDS()
    nGeometry = [1, 2, 3]
    id = gDs.insertLotGeometry(1, nGeometry)
    print(id)
    gDs.dump("./arg.txt")

    nDS = GeometryDS()
    nDS.load(1, "./arg.txt")
    geo = nDS.getGeometry(1, id)
    print(geo)
