from Model.lotInfo import LotInfo
from Model.categoricalSummary import CategoricalSummary
from Model.numericalSummary import NumericalSummary
from Model.util import uniqueFieldsSet, isNumericAttribute
from typing import Dict, List


class BlockInfo:
    def __init__(self, blockCode: str, years: List[str]):
        self.__blockCode: str = blockCode
        self.__years: List[str] = years
        self.__lotDataStructure: Dict[str, LotInfo] = {}
        self.__blockSummaries:  Dict[str, any] = {}

    def getBlockCode(self):
        return self.__blockCode

    def getLotsCount(self):
        return len(self.__lotDataStructure)

    def getLotsData(self):
        result = []
        for lotCode in self.__lotDataStructure:
            lotItem = self.__lotDataStructure.get(lotCode)
            result.append(lotItem)
        return result

    def insertLotInfo(self, lotInfo):
        lotBBL = lotInfo.getBBL()
        self.__lotDataStructure[lotBBL] = lotInfo
        # Fill Summaries
        self.__fillSummaries(lotInfo)

    def __fillLotsCountSummary(self, year, lotInfo, attrName):
        properlyAttrSummary = self.__blockSummaries.get(attrName)
        if properlyAttrSummary is None:
            properlyAttrSummary = NumericalSummary()
            self.__blockSummaries[attrName] = properlyAttrSummary
        
        properlyAttrSummary.insertItem(key=year, value=1, lotRef=lotInfo.getBBL())

    def __fillSummaries(self, lotInfo):
        for attrSelected in uniqueFieldsSet:
            for year in self.__years:
                # get properly summary
                if attrSelected == "LOTSALIVE":
                    if lotInfo.wasAlive(year):
                        self.__fillLotsCountSummary(year, lotInfo, attrSelected)
                else:
                    properlyAttrSummary = self.__blockSummaries.get(attrSelected)
                    # check if the field is either numeric or categorical
                    selectedAttributeIsNumeric = isNumericAttribute(attrSelected)
                    # In the case of not existing summary, create properly one.
                    if properlyAttrSummary is None:
                        if selectedAttributeIsNumeric:
                            properlyAttrSummary = NumericalSummary()
                        else:
                            properlyAttrSummary = CategoricalSummary(list)
                        self.__blockSummaries[attrSelected] = properlyAttrSummary
                    # Insert lot info on that
                    itemValueDict = lotInfo.getAttributeData(year)
                    if itemValueDict is not None:
                        itemValue = itemValueDict.get(attrSelected)
                        if selectedAttributeIsNumeric:
                            properlyAttrSummary.insertItem(key=year, value=itemValue, lotRef=lotInfo.getBBL())
                        else:
                            properlyAttrSummary.insertItem(key=year, subKey=itemValue, value=lotInfo.getBBL(),
                                                        insertType=CategoricalSummary.APPEND)

    def getLayerInfo(self, year, blockCode, lotCode):
        result = []
        # Just in case neighCode is none, we does not have any neighborhhod selected yet.
        if blockCode is None:
            blockCode = self.getBlockCode()
            result_aux = {"code": blockCode, "name": blockCode, "summaries": {}}
            for attrName in uniqueFieldsSet:
                summaries = result_aux.get("summaries")
                attrSummary = self.getSummaryByAttrName(attrName, year)
                if attrSummary is not None:
                    summaries[attrName] = attrSummary
            result += [result_aux]
        # But, If NeighCode is selected
        else:
            if lotCode is None:
                for lotBBL in self.__lotDataStructure:
                    lotItem = self.__lotDataStructure.get(lotBBL)
                    resultSummary = lotItem.getLayerInfo(year)
                    if resultSummary is not None:
                        result += resultSummary
            else:
                lotItem = self.getLotInfoData(lotCode)
                if lotItem is not None:
                    resultSummary = lotItem.getLayerInfo(year)
                    if resultSummary is not None:
                        result += resultSummary
        return result

    def getSummaryByAttrName(self, attrName, year=None):
        result = {}
        if year is None:
            result = self.__blockSummaries.get(attrName)
        else:
            attrSummary = self.__blockSummaries.get(attrName)
            if attrSummary is not None:
                summaryItem = attrSummary.getSummaryFromKey(year)
                if summaryItem is not None:
                    result = summaryItem
        return result

    def getLotInfoData(self, lotBBL):
        return self.__lotDataStructure.get(lotBBL)

    def getLotInformation(self, year, lotBBL):
        result = []
        lotItem = self.getLotInfoData(lotBBL)
        if lotItem is not None:
            result = lotItem.getLotInformation(year)
        return result

    def lotLayerFiltered(self, year, attrName, operator, value):
        result = []
        # TODO: filter lot by some attribute, it can be done on summary or manually

        # get properly summary
        attributeSummary = self.getSummaryByAttrName(attrName)
        if attributeSummary is not None:
            attributeSummaryByYear = attributeSummary.get(year)
            if attributeSummaryByYear is not None:
                pass

        return result
