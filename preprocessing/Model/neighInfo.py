from pyproj import Proj
from Model.blockitem import BlockItem
from Model.blockInfo import BlockInfo
from Model.categoricalSummary import CategoricalSummary
from Model.numericalSummary import NumericalSummary, NumericalSummaryItem
from Model.util import uniqueFieldsSet, isNumericAttribute
from typing import List, Dict


class NeighborhoodInfo:
    def __init__(self, neighCode, neighName, _years, shape):
        self.__neighborhoodCode = neighCode
        self.__neighborhoodName = neighName
        self.__shapes = shape
        self.__years = _years
        self.__blockList: List[BlockInfo] = []
        self.__neighborSummaries = {}

        self.globalProjection = Proj(init='esri:102718')

    def getBlockCounts(self):
        return len(self.__blockList)

    def getBlockList(self):
        return self.__blockList

    def getNeighborhoodName(self):
        return self.__neighborhoodName

    def getNeighborhoodCode(self):
        return self.__neighborhoodCode

    def __convertNYToGlobal(self, points):
        """
        This function convert points coordinate from NY island to Global coordinate.
        """
        new_points = [(self.globalProjection(point[0] * 0.3048, point[1] * 0.3048, inverse=True)) for point in points]
        return new_points

    def createNeighborhoodSummaries(self):
        # for each attribute create properly summary
        for attrSelected in uniqueFieldsSet:
            for blockItem in self.__blockList:
                # got block summary to collapse then together
                blockSummary = blockItem.getSummaryByAttrName(attrSelected)
                if blockSummary is None:
                    continue
                # Create properly summary type
                neighborhoodSummary = self.__neighborSummaries.get(attrSelected)
                if neighborhoodSummary is None:
                    if isNumericAttribute(attrSelected):
                        neighborhoodSummary = NumericalSummary()
                    else:
                        neighborhoodSummary = CategoricalSummary(int)
                    self.__neighborSummaries[attrSelected] = neighborhoodSummary
                # go through year to collect each data
                for year in self.__years:
                    blockYearSummaryItem = blockSummary.getSummaryFromKey(year)
                    if blockYearSummaryItem is not None:
                        if attrSelected == "ASSESSTOT" and year == "2002" and blockYearSummaryItem.get("attrFound"):
                            print("Achei")
                        if isNumericAttribute(attrSelected):
                            neighborhoodSummary.insertItem(year, blockYearSummaryItem.get("sum"),
                                                           lotRef=blockItem.getBlockCode(),
                                                           count=blockYearSummaryItem.get("count"), 
                                                           wasFound=blockYearSummaryItem.get("attrFound"))
                        else:
                            # Transform transtype in a only numbers summary
                            for categoricalType in blockYearSummaryItem:
                                lotsLength = len(blockYearSummaryItem.get(categoricalType))
                                # getting from borough summary summary trasntype count
                                neighborhoodSummary.insertItem(year, categoricalType, lotsLength,
                                                               CategoricalSummary.SUM)

    def getLayerInfo(self, year, neighCode, blockCode, lotCode):
        result = []
        # Just in case neighCode is none, we does not have any neighborhhod selected yet.
        if neighCode is None:
            neighborhoodCode = self.getNeighborhoodCode()
            neighborhoodName = self.getNeighborhoodName()
            result_aux = {"code": neighborhoodCode, "name":neighborhoodName, "summaries":{}}
            for attrName in uniqueFieldsSet:
                summaries = result_aux.get("summaries")
                attrSummary = self.getSummaryByAttrName(attrName, year)
                summaries[attrName] = attrSummary
            result += [result_aux]
        # But, If NeighCode is selected
        else:
            if blockCode is None:
                for blockItem in self.__blockList:
                    result += blockItem.getLayerInfo(year, blockCode, lotCode)
            else:
                blockItem = self.getBlockItem(blockCode)
                if blockItem is not None:
                    result += blockItem.getLayerInfo(year, blockCode, lotCode)
        return result

    def getBlocksAvailable(self):
        result = []
        for blockItem in self.__blockList:
            blockCode = blockItem.getBlockCode()
            result.append(blockCode)
        result = sorted(result)
        return result

    def getSummaryByAttrName(self, attrName, year=None):
        result = {}
        if year is None:
            result = self.__neighborSummaries.get(attrName)
        else:
            attrSummary = self.__neighborSummaries.get(attrName)
            if attrSummary is not None:
                result = attrSummary.getSummaryFromKey(year)
        return result

    def getShapes(self):
        return self.__shapes

    def insertBlockInfo(self, blockInfo):
        # blockName = blockInfo.getBlockName()
        self.__blockList.append(blockInfo)

    def getBlockItem(self, blockCode):
        for item in self.__blockList:
            if item.getBlockCode() == blockCode:
                return item
        return None

    def getNeighborhoodLotsLayer(self):
        result = []
        for block in self.__blockList:
            result += block.getLotsData()
        return result

    def getLotInformation(self, year, lotBBL):
        result = []
        blockCode = lotBBL[1:6]
        blockItem = self.getBlockItem(blockCode)
        if blockItem is not None:
            result = blockItem.getLotInformation(year, lotBBL)
        return result

    def lotLayerFiltered(self, year, attrName, operator, value, blockCode):
        result = []
        if blockCode is not None:
            blockItemSelected = self.getBlockItem(blockCode)
            if blockItemSelected is not None:
                result += blockItemSelected.lotLayerFiltered(year, attrName, operator, value)
        else:
            for blockItem in self.__blockList:
                result += blockItem.lotLayerFiltered(year, attrName, operator, value)
        return result
