from Model.lotData import LotData
from Model.util import *
from typing import List

class LotInfo:
    def __init__(self, lotData: LotData, years):
        self.__lotData: LotData = lotData
        self.__years: List[str] = years

    def wasAlive(self, year):
        return self.__lotData.wasAlive(year)

    def getShapes(self, year):
        return self.__lotData.getShapes(year)

    def getNeighborhoodCode(self):
        return self.__lotData.getNeighborhoodCode()

    def getBBL(self):
        return self.__lotData.getBBL()

    def getLotInformation(self, year):
        result = []
        lotAttrData = self.getAttributeData(year)
        if lotAttrData is not None:
            result = lotAttrData
        return result

    def getAttributeData(self, year):
        return self.__lotData.getAttributeData(year)

    def getLayerInfo(self, year):
        lotBBL = self.getBBL()
        result_aux = {"code": lotBBL, "name": lotBBL, "summaries": {}}
        attrSummaries = self.__lotData.getAttributeData(year)
            
        result = []
        if attrSummaries is not None:
            for attrName in uniqueFieldsSet:
                if attrName == "LOTSALIVE":
                    result_aux['summaries'][attrName] = {"sum": 1}
                else:
                    attrValue = attrSummaries.get(attrName)
                    result_aux['summaries'][attrName] = {"sum": attrValue}
        else:
            return None
        result.append(result_aux)
        return result
