import json


class AttributesDS:
    def __init__(self, deli = ";"):
        self.__attributesDS = {}
        self.__uniqueID = 0
        self.__delimiter = deli

    def __getId(self):
        result = self.__uniqueID
        self.__uniqueID += 1
        return result

    def getCurrentId(self):
        return self.__uniqueID

    def insertLotAttribute(self, boroughCode, attribute):
        """
        This function add lot attribute to data structure and return an attribute ID
        @param attribute - Lot attribute for the given year
        @result attributeId - Id that the attribute has at the data structure
        """
        if type(boroughCode) is str:
            boroughCode = int(boroughCode)
        
        boroughDS = self.__attributesDS.get(boroughCode)
        if boroughDS is None:
            boroughDS = {}
            self.__attributesDS[boroughCode] = boroughDS

        result = self.__getId()
        if type(attribute) == dict:
            attribute = json.dumps(attribute)
        boroughDS[result] = attribute
        return result

    def getAttribute(self, boroughCode, id):
        """
        This function return a attribute from a given id
        @param id -  attribute id
        @return attribute - lot attribute
        """
        if type(boroughCode) is str:
            boroughCode = int(boroughCode)
        resultAttribute = self.__attributesDS.get(boroughCode)
        result = None
        if id is not None and resultAttribute is not None:
            result = json.loads(resultAttribute.get(id))
        return result

    def replaceAttributes(self, boroughCode, id, attributes):
        """
        This method replace an modified attribute
        """
        if type(boroughCode) is str:
            boroughCode = int(boroughCode)
        boroughDS = self.__attributesDS.get(boroughCode)
        if boroughDS is None:
            boroughDS = {}
            self.__attributesDS[boroughCode] = boroughDS
        if type(attributes) == dict:
            attribute = json.dumps(attributes)
        boroughDS[id] = attribute

    def dump(self, fileName):
        """
        This method dumps data structure into the given file
        @param fileName - file path that will be used to store Attribute Data Structure
        """
        with open(fileName, 'w') as fp:
            for boroughCode in self.__attributesDS:
                boroughDS = self.__attributesDS.get(boroughCode)
                for id in boroughDS:
                    attribute = boroughDS.get(id)
                    if type(attribute) == list:
                        attribute = json.dumps(attribute)
                    fp.write("{0}{deli}{1}{deli}{2}\n".format(boroughCode, id, attribute, deli=self.__delimiter))

    def load(self, boroughCode, fileName):
        """
        This Method loads attribute data structure from a file
        @param fileName - file where data structure is stored
        """
        __attributes = {}
        if type(boroughCode) is str:
            boroughCode = int(boroughCode)
        with open(fileName, 'r') as fp:
            for line in fp:
                lineSplitted = line.split(self.__delimiter)
                id = int(lineSplitted[1])
                if id > self.__uniqueID:
                    self.__uniqueID = id
                attribute = lineSplitted[2]
                __attributes[id] = attribute
        self.__attributesDS[boroughCode] = __attributes


if __name__ == '__main__':
    gDs = AttributesDS()
    nAttribute = {"a":1,"b": 2,"c": 3}
    id = gDs.insertLotAttribute(nAttribute)
    print(id)
    gDs.dump("./arg.txt")

    nDS = AttributesDS()
    nDS.load("./arg.txt")
    geo = nDS.getAttribute(id)
    print(geo)
