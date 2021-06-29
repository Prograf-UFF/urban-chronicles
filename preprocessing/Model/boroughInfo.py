from Model.categoricalSummary import CategoricalSummary
from Model.numericalSummary import NumericalSummary
from Model.util import isNumericAttribute, uniqueFieldsSet
from typing import List
from Model.neighInfo import NeighborhoodInfo

class BoroughInfo:
    def __init__(self, boroughCode, years):
        self.__boroughCode = boroughCode
        self.__years = years
        self.__neighborhoodList: List[NeighborhoodInfo] = []
        self.__boroughSummaries = {}

    def getNeighborhoodCounts(self):
        return len(self.__neighborhoodList)

    def getNeighborhoodList(self):
        return self.__neighborhoodList

    def getBoroughCode(self):
        return self.__boroughCode

    def createBoroughSummaries(self):
        for neighborhoodItem in self.__neighborhoodList:
            neighborhoodItem.createNeighborhoodSummaries()

        # for each attribute create properly summary
        for attrSelected in uniqueFieldsSet:
            for neighborhoodItem in self.__neighborhoodList:
                # got block summary to collapse then together
                neighborhoodSummary = neighborhoodItem.getSummaryByAttrName(attrSelected)
                if neighborhoodSummary is None:
                    continue
                # Create properly summary type
                boroughSummary = self.__boroughSummaries.get(attrSelected)
                if boroughSummary is None:
                    if isNumericAttribute(attrSelected):
                        boroughSummary = NumericalSummary()
                    else:
                        boroughSummary = CategoricalSummary(int)
                    self.__boroughSummaries[attrSelected] = boroughSummary
                # go through year to collect each data
                for year in self.__years:
                    neighborhoodYearSummaryItem = neighborhoodSummary.getSummaryFromKey(year)
                    if neighborhoodYearSummaryItem is not None:
                        if isNumericAttribute(attrSelected):
                            boroughSummary.insertItem(year, neighborhoodYearSummaryItem.get("sum"),
                                                      lotRef=neighborhoodItem.getNeighborhoodCode(),
                                                      count=neighborhoodYearSummaryItem.get('count'),
                                                      wasFound=neighborhoodYearSummaryItem.get("attrFound"))
                        else:
                            # Transform transtype in a only numbers summary
                            for categoricalType in neighborhoodYearSummaryItem:
                                lotsLength = neighborhoodYearSummaryItem.get(categoricalType)
                                # getting from borough summary summary trasntype count
                                boroughSummary.insertItem(year, categoricalType, lotsLength,
                                                          CategoricalSummary.SUM)

    def getLayerInfo(self, year, neighCode, blockCode, lotCode):
        result = []
        if neighCode is None:
            for neighItem in self.__neighborhoodList:
                result += neighItem.getLayerInfo(year, neighCode, blockCode, lotCode)
        else:
            neighItem = self.getNeighborhoodItem(neighCode)
            if neighItem is not None:
                result += neighItem.getLayerInfo(year, neighCode, blockCode, lotCode)
        return result

    def getBlocksAvailable(self, neighCode):
        result = []
        neighItem = self.getNeighborhoodItem(neighCode)
        if neighItem is not None:
            result = neighItem.getBlocksAvailable()
        return result

    def getSummaryByAttrName(self, attrName):
        return self.__boroughSummaries.get(attrName)

    def insertNeighborhoodInfo(self, neighborhoodInfo):
        self.__neighborhoodList.append(neighborhoodInfo)

    def insertBlockItem(self, year, blockCode, bblockItem):
        # TODO: Need get block item
        for neighborItem in self.__neighborhoodList:
            blockItem = neighborItem.getBlockItem(blockCode)
            if blockItem is not None:
                blockItem.insertBlockGraph(year, bblockItem)
                break

    def getNeighborhoodItem(self, neighborhoodCode):
        for item in self.__neighborhoodList:
            if item.getNeighborhoodCode() == neighborhoodCode:
                return item
        return None

    def getNeighborhoodShapes(self):
        return self.__neighborhoodList

    def getNeighborhoodLotsLayer(self, neighborCode):
        result = []
        neighborItem = self.getNeighborhoodItem(neighborCode)
        if neighborItem is not None:
            result = neighborItem.getNeighborhoodLotsLayer()
        return result

    def getLotInformation(self, year, lotBBL, neighborCode):
        result = []
        neighborItem = self.getNeighborhoodItem(neighborCode)
        if neighborItem is not None:
            result = neighborItem.getLotInformation(year, lotBBL)
        return result

    def getNeighborhoodInformation(self, year, attrName, neighCode):
        result = []
        neighborhoodItem = self.getNeighborhoodItem(neighCode)
        if neighborhoodItem is not None:
            attrSummary = neighborhoodItem.getSummaryByAttrName(attrName, year)
            if attrSummary is not None:
                result = attrSummary
        return result

    def lotLayerFiltered(self, year, attrName, operator, value, neighborCode, blockCode):
        result = []
        if neighborCode is not None:
            neighborhoodItemSelected = self.getNeighborhoodItem(neighborCode)
            if neighborhoodItemSelected is not None:
                result += neighborhoodItemSelected.lotLayerFiltered(year, attrName, operator, value, blockCode)
        else:
            for neighborhoodItem in self.__neighborhoodList:
                result += neighborhoodItem.lotLayerFiltered(year, attrName, operator, value, blockCode)
        return result