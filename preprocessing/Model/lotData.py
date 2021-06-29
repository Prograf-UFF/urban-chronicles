import json
# BBL;NEIGHCODE;PARENT;CHILDREN;TRANSTYPE;STATUS;GEOMETRY;ATTRIBUTES

class LotData(object):
    @staticmethod
    def parseLineSplitted(lineSplitted):
        lotData = LotData()
        lotData.setBBL(lineSplitted[0])
        lotData.setNeighborhoodCode(lineSplitted[1])
        lotData.setGeometries(json.loads(lineSplitted[2]))
        lotData.setAttributes(json.loads(lineSplitted[3]), "HIGH")
        lotData.setAttributes(json.loads(lineSplitted[4]), "LOW")
        lotData.setAttributes(json.loads(lineSplitted[5]), "CATEG")
        return lotData
        
    def __init__(self):
        self.__geometries = {}
        self.__attributesHigh = {}
        self.__attributesLow = {}
        self.__attributesCateg = {}
        self.__bbl = ""
        self.__neighborhoodCode = ""
        self.__cdCode = ""

    def wasAlive(self, year):
        yearsAlive = sorted(list(self.__geometries.keys()))
        return year in yearsAlive

    def yearsAlive(self):
        yearsAlive = sorted(list(self.__geometries.keys()))
        return yearsAlive

    def getNeighborhoodCode(self):
        return self.__neighborhoodCode

    def setNeighborhoodCode(self, code):
        self.__neighborhoodCode = code

    def getBBL(self):
        return self.__bbl

    def setBBL(self, _bbl):
        self.__bbl = _bbl

    def getBlockCode(self):
        blockCode = self.__bbl
        blockCode = blockCode[1:6]
        return blockCode

    def getBoroughCode(self):
        boroughCode = self.__bbl[0]
        return boroughCode

    def getGeometries(self):
        return self.__geometries

    def getShapes(self, year):
        lotShape = self.__geometries.get(year)
        return lotShape

    def getGeometry(self):
        if len(self.__geometries) > 0:
            yearsAlive = sorted(list(self.__geometries.keys()))
            geometry = self.__geometries.get(yearsAlive[len(yearsAlive) - 1])
            return geometry
        return None

    def setGeometries(self, geometries):
        for year in geometries:
            geometry = geometries.get(year)
            self.insertGeometry(year, geometry)

    def getAttributeDataFromYear(self, year, _type):
        return self.getAttributeData(year, _type)

    def getAttributeData(self, year, _type):
        attributes = self.getAttributes(_type)
        yearData = attributes.get(year)
        return yearData

    def getAttributes(self, _type):
        if _type == "HIGH":
            return self.__attributesHigh
        elif _type == "LOW":
            return self.__attributesLow
        elif _type == "CATEG":
            return self.__attributesCateg

    def setAttributes(self, attributes, _type):
        if _type == "HIGH":
            self.__attributesHigh = attributes
        elif _type == "LOW":
            self.__attributesLow = attributes
        elif _type == "CATEG":
            self.__attributesCateg = attributes
        

    def insertGeometry(self, year, geometry):
        if self.__geometries.get(year) is None:
            self.__geometries[year] = geometry
        else:
            print("GEOMETRY COLLAPSED form bbl {0} on {1}".format(self.__bbl, year ) )

    def insertAttributesData(self, year, attrData, _type):
        if _type == "HIGH":
            self.addAtributeToContainer(year, attrData, self.__attributesHigh)
        elif _type == "LOW":
            self.addAtributeToContainer(year, attrData, self.__attributesLow)
        elif _type == "CATEG":
            self.addAtributeToContainer(year, attrData, self.__attributesCateg)
    
    def addAtributeToContainer(self, year, attrData, attrContainer):
        if attrContainer.get(year) is None:
            attrContainer[year] = attrData
        else:
            print("ATTRIBUTES COLLAPSED", self.__bbl)

    def getFileHeader(self, delimiter):
        result = ""
        result += "BBL"
        result += delimiter
        result += "NEIGHCODE"
        result += delimiter
        result += "GEOMETRIES" 
        result += delimiter
        result += "ATTRIBUTES"
        result += "\n"

        return result

    def getStringfy(self, delimiter=";"):
        '''
        Get object stringfy using an specific delimiter or ";" as default
        '''
        result = ""
        result += self.__bbl
        result += delimiter
        result += self.__neighborhoodCode
        result += delimiter
        result += json.dumps(self.__geometries)
        result += delimiter
        result += json.dumps(self.__attributesHigh)
        result += delimiter
        result += json.dumps(self.__attributesLow)
        result += delimiter
        result += json.dumps(self.__attributesCateg)
        result += "\n"

        return result