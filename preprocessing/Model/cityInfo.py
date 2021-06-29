from Model.boroughInfo import BoroughInfo
from Model.categoricalSummary import CategoricalSummary
from Model.numericalSummary import NumericalSummary
from Model.util import *
from typing import List


class CityInfo:
    """ Simple tips: boroughName is string """

    def __init__(self, cityName, years):
        self.__cityName = cityName
        self.__years = years
        self.__boroughList: List[BoroughInfo] = []
        self.__citySummaries = {}

    def createCitySummaries(self):
        for boroughItem in self.__boroughList:
            boroughItem.createBoroughSummaries()

        # for each attribute create properly summary
        for attrSelected in uniqueFieldsSet:
            for boroughItem in self.__boroughList:
                # got block summary to collapse then together
                boroughSummary = boroughItem.getSummaryByAttrName(attrSelected)
                if boroughSummary is None:
                    continue
                # Create properly summary type
                citySummary = self.__citySummaries.get(attrSelected)
                if citySummary is None:
                    if isNumericAttribute(attrSelected):
                        citySummary = NumericalSummary()
                    else:
                        citySummary = CategoricalSummary(int)
                    self.__citySummaries[attrSelected] = citySummary
                # go through year to collect each data
                for year in self.__years:
                    boroughYearSummaryItem = boroughSummary.getSummaryFromKey(year)
                    if boroughYearSummaryItem is not None:
                        if isNumericAttribute(attrSelected):
                            citySummary.insertItem(year, boroughYearSummaryItem.get('sum'),
                                                   lotRef=boroughItem.getBoroughCode,
                                                   count=boroughYearSummaryItem.get('count'),
                                                   wasFound=boroughYearSummaryItem.get('attrFound'))
                        else:
                            # Transform transtype in a only numbers summary
                            for categoricalType in boroughYearSummaryItem:
                                lotsLength = boroughYearSummaryItem.get(categoricalType)
                                # getting from borough summary summary trasntype count
                                citySummary.insertItem(year, categoricalType, lotsLength,
                                                       CategoricalSummary.SUM)

    def getBlocksAvailable(self, neighCode):
        result = []
        boroughCode = neighCode[0:2]
        rightBoroughCode = getRightBoroughCode(boroughCode)
        boroughItem = self.getBoroughItem(rightBoroughCode)
        if boroughItem is not None:
            result += boroughItem.getBlocksAvailable(neighCode)
        return result

    def getCityName(self):
        return self.__cityName

    def insertBoroughData(self, boroughItem):
        # boroughName = boroughItem.getBoroughName()
        self.__boroughList.append(boroughItem)

    def getLayerInfo(self, year, neighCode, blockCode, lotCode):
        result = []
        if neighCode is None:
            for boroughItem in self.__boroughList:
                result += boroughItem.getLayerInfo(year, neighCode, blockCode, lotCode)
        else:
            boroughCode = neighCode[0:2]
            boroughCode = getRightBoroughCode(boroughCode)
            boroughItem = self.getBoroughItem(boroughCode)
            if boroughItem is not None:
                result += boroughItem.getLayerInfo(year, neighCode, blockCode, lotCode)
        return result

    def insertBlockItem(self, year, boroughCode, blockCode, bblockItem):
        boroughItem = self.getBoroughItem(boroughCode)
        if boroughItem is not None:
            boroughItem.insertBlockItem(year, blockCode, bblockItem)

    def getBoroughItem(self, boroughCode):
        for item in self.__boroughList:
            if item.getBoroughCode() == boroughCode:
                return item
        return None

    def getNeighborhoodShapes(self):
        result = []
        for borough in self.__boroughList:
            result += borough.getNeighborhoodShapes()

        return result

    def getNeighborhoodLotsLayer(self, boroughCode, neighborCode):
        boroughItem = self.getBoroughItem(boroughCode)
        result = boroughItem.getNeighborhoodLotsLayer(neighborCode)
        return result

    def getLotInformation(self, year, lotBBL, neighborCode):
        result = []
        if lotBBL is not None:
            if len(lotBBL) > 10:
                boroCode = lotBBL[0]
                boroItem = self.getBoroughItem(boroCode)
                result = boroItem.getLotInformation(year, lotBBL, neighborCode)
        return result

    def getNeighborhoodInformation(self, year, attrName, boroughCode, neighCode):
        result = []
        boroItem = self.getBoroughItem(boroughCode)
        if boroItem is not None:
            result = boroItem.getNeighborhoodInformation(year, attrName, neighCode)
        return result

    def extractAttrSummarySubCategories(self, year, attrName):
        result = []
        if not(isNumericAttribute(attrName)):
            attrSummary = self.__citySummaries.get(attrName)
            if attrSummary is not None:
                realItem = attrSummary.getSummaryFromKey(year)
                result = sorted(list(realItem.keys()))
        return result

    def lotLayerFiltered(self, year, attrName, operator, value, boroughCode, neighborCode, blockCode):
        result = []
        if boroughCode is not None:
            boroughItemSelected = self.getBoroughItem(boroughCode)
            if boroughItemSelected is not None:
                result += boroughItemSelected.lotLayerFiltered(year, attrName, operator, value, neighborCode, blockCode)
        else:
            for boroughItem in self.__boroughList:
                result += boroughItem.lotLayerFiltered(year, attrName, operator, value, neighborCode, blockCode)
        return result
