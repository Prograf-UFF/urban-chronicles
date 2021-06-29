import json
import jsonpickle
from Model.lotData import LotData
from Model.urbaneLayer import UrbaneLayer
from Model.neighborhood import NeighborhoodHandler, NeighborhoodItem
from Model.util import *
from Model.blockitem import BlockItem
from Model.geometryds import GeometryDS
from Model.attributesds import AttributesDS
from Model.summarybuilder import SummaryBuilder
from typing import List
# from multiprocessing import Process
from threading import Thread


class PlutoDataStructure:
    def __init__(self, _years, neighborhoodsFileName, _boroughsAvailable, delimiter, geometryDataStructure, attributesDataStructure):
        self.__years = _years
        self.__cityInfo = {} # CityInfo("New York City", self.__years)
        self.__summaries = {}
        self.__boroNeighSummary = {}
        self.__boroughsIds = _boroughsAvailable
        self.__delimiter = delimiter
        self.__geometryDS = geometryDataStructure
        self.__attributesDS: AttributesDS = attributesDataStructure
        self.__cannotFindNeighborhood = 0
        self.__neighHandler = None
        self.__loadNeighborhoodData(neighborhoodsFileName)

    # Private Section

    def __loadNeighborhoodData(self, fileName):
        self.__neighHandler: NeighborhoodHandler = NeighborhoodHandler(fileName, self.__delimiter)

    def __createUrbaneLotsLayer(self, lotInfoResult, year):
        hasShape = 0
        finalLayer = {"type": "FeatureCollection", "features": []}
        print("BEFORE", len(lotInfoResult))
        for lotInfo in lotInfoResult:
            lotShapeId = lotInfo.getShapes(year)
            lotShape = self.__geometryDS.getGeometry(int(lotInfo.getBBL()[0]), lotShapeId)
            if lotShape is not None:
                lotShape = json.loads(lotShape)
                uData = UrbaneLayer(lotShape[0], lotInfo.getBBL(), 0)
                finalLayer["features"].append(uData.getUrbaneLayerObject())
                hasShape += 1
        print("AFTER", hasShape)
        return finalLayer

    def __createUrbaneNeighborLayer(self, neighborhoodListResult):
        finalLayer = {"type": "FeatureCollection", "features": []}
        for neigh in neighborhoodListResult:
            shape = neigh.getNeighShape()
            uData = UrbaneLayer(shape[0], neigh.getNeighCode(), 0)
            finalLayer.get("features").append(uData.getUrbaneLayerObject())
        return finalLayer

    def __urbaneChartDataFormatter(self, _result, keys):
        queryResult = []

        for key in keys:
            objectList = []
            for year in self.__years:
                nYear = "{0}-{1}-02".format(year, "01") if ".2" not in year else "{0}-{1}-02".format(
                    year.replace(".2", ""), "06")
                obj = {"year": nYear, "count": 0, "key": key}
                yearData = _result.get(year)
                if yearData is not None:
                    keyCount = yearData.get(key)
                    if keyCount is not None:
                        obj['count'] = keyCount
                objectList.append(obj)
            queryResult.append(objectList)
        return queryResult


    def __generateLotOutputSummary(self, name, code, attributeValues):
        result = {}
        result["name"] = name
        result["code"] = code
        result["summaries"] = {}
        
        for attributeCode in uniqueFieldsSet:
            attributeValue = attributeValues.get(attributeCode)
            attributeSummary = {}
            if attributeValue is None:
                attributeSummary = self.__createDefaultSummary()
            else:
                attributeSummary = self.__createDefaultSummary(attributeValue)
                attributeSummary["attrFound"] = True
            summaries = result.get("summaries")
            summaries[attributeCode] = attributeSummary
        return result

    def __generateOutputSummary(self, year, name, code, summary):
        # TODO: Need to find neighborhood Name
        result = {}
        result["name"] = name
        result["code"] = code
        result["summaries"] = {}
        for attributeCode in uniqueFieldsSet:
            attributeYear = summary.get(attributeCode)
            attributeSummaryResult = {}
            if attributeYear is None:
                attributeSummaryResult = self.__createDefaultSummary()
            else:
                attributeYearSummaray = attributeYear.get(year)
                if attributeYearSummaray is None:
                    attributeSummaryResult = self.__createDefaultSummary()
                else:
                    attributeYearSummaray["attrFound"] = True
                    summarySum = attributeYearSummaray["sum"]
                    summaryCount = attributeYearSummaray["count"]
                    attributeYearSummaray["mean"] = summarySum/summaryCount if summaryCount != 0 else 0
                    attributeSummaryResult = attributeYearSummaray
            summaries = result.get("summaries")
            summaries[attributeCode] = attributeSummaryResult
        return result

    def __createDefaultSummary(self, value = 0, count = 1):
        if type(value) is str:
            value = float(value)
        result = {}
        result["sum"] = value
        result["min"] = value
        result["max"] = value
        result["count"] = count
        result["mean"] = value
        result["attrFound"] = False 
        return result


    # END Private Section

    # Load Structure Section
    def insertPlutoLotData(self, _plutoLotData: LotData):
        """
        This function insert pluto lot data on this structure
        """
        # lotInfo: LotInfo = LotInfo(_plutoLotData, self.__years)
                
        blockCode = _plutoLotData.getBlockCode()
        boroughCode = _plutoLotData.getBoroughCode()

        neighborhoodCode = _plutoLotData.getNeighborhoodCode()

        boroughInfo = self.__cityInfo.get(boroughCode)
        if boroughInfo is None:
            boroughInfo = {}
            self.__cityInfo[boroughCode] = boroughInfo
        
        neighborhoodInfo = boroughInfo.get(neighborhoodCode)
        if neighborhoodInfo is None:
            neighborhoodInfo = {}
            boroughInfo[neighborhoodCode] = neighborhoodInfo

        blockInfo = neighborhoodInfo.get(blockCode)
        if blockInfo is None:
            blockInfo = []
            neighborhoodInfo[blockCode] = blockInfo
        
        essentialLotData = _plutoLotData

        blockInfo.append(essentialLotData)
        
    def dump_to_json(self):
        json.dump(self.__cityInfo, open('test.json', 'w'))

    def createSummaries(self):        
        print("Can not find neighborhood on {0} tax lots.".format(self.__cannotFindNeighborhood))
        print("Start Summaries")
        # self.__cityInfo.createCitySummaries()
        SummaryBuilder.createSummaries(self.__summaries, self.__cityInfo, self.__attributesDS)
        print("End of Summaries")

    
    def insertBoroNeighSummary(self, year, borough, boroughNeighSummary):
        yearNeighborData = self.__boroNeighSummary.get(year)
        if yearNeighborData is None:
            yearNeighborData = boroughNeighSummary
            self.__boroNeighSummary[year] = boroughNeighSummary
        else:
            yearNeighborData += boroughNeighSummary
            self.__boroNeighSummary[year] = yearNeighborData

    # END Load Structure Section

    def getBlocksAvailable(self, neighCode):
        result = []
        boroughAbbr = neighCode[0:2]
        boroughCode = getRightBoroughCode(boroughAbbr)
        boroughInfo = self.__cityInfo.get(boroughCode)
        if boroughInfo is None:
            raise Exception ("Borough Code is not available.")
        
        neighInfo = boroughInfo.get(neighCode)
        if neighInfo is None:
            raise Exception ("Neighborhood is not available.")
        
        result = sorted(list(neighInfo.keys()))
        
        return result

    def getFullLayerInfo(self, boroughCode=None, neighCode=None, blockCode=None):
        result = {}
        threads = []
        for year in years:
            t = Thread(target=self.getLayerInfoCall, args=(result, year, boroughCode, neighCode, blockCode,))
            threads.append(t)

        for t in threads: 
            t.start()

        for t in threads: 
            t.join()
        
        return result
    
    def getLayerInfoCall(self, results, year, boroughCode, neighCode, blockCode ):
        results[year] = self.getLayerInfo(year, boroughCode, neighCode, blockCode)

    def getLayerInfo(self, year, boroughCode=None, neighCode=None, blockCode=None, lotCode=None):
        """
            LayerInfoCode -> attributecode -> summary [This information is year based.] 
            Response format (
                [
                    {
                    'name' : '<Object Name>',
                    'code' : '<Object Code>',
                    'summaries' : 
                        {
                            'attributeName' : 
                                {
                                    'min' : '<min-value>',
                                    'max' : '<max-value>',
                                    'count' : '<count-value>',
                                    'mean' : '<mean-value>',
                                    'sum' : '<sum-value>',
                                    'attrFound' : '<bool-found>'
                                }
                        }
                    }
                ]
            )
        """

        if boroughCode is None:
            return self.__processCitySummary(year)
        
        if neighCode is None:
            return self.__processBoroughSummary(year, boroughCode, True)
        
        boroughData = self.__cityInfo.get(boroughCode)
        neighborhoodData = boroughData.get(neighCode)

        if blockCode is None:
            return self.__processNeighborhoodSummary(year, boroughCode, neighCode, neighborhoodData, True)
        
        blockData: List[LotData] = neighborhoodData.get(blockCode)
        return self.__processBlockSumamry(year, boroughCode, blockCode, blockData, True)

# starting summary function
    def __processCitySummary(self, year, currentLevel = True):
        result = {}
        if len(self.__boroNeighSummary) > 0:
            yearNeighSummary = self.__boroNeighSummary.get(year)
            if yearNeighSummary is not None:
                return yearNeighSummary
        else:
            if currentLevel:
                result = []
            
            for _boroughCode in self.__cityInfo:
                boroughResult = self.__processBoroughSummary(year, _boroughCode, True)
                if currentLevel:
                    result += boroughResult
                else:
                    for attributeCode in boroughResult:
                        cityAttrSummary = result.get(attributeCode)
                        boroughAttrSummary = boroughResult.get(attributeCode)
                        if cityAttrSummary is None:
                            result[attributeCode] = boroughAttrSummary
                        else:
                            result[attributeCode] = self.mergeSummary(cityAttrSummary, boroughAttrSummary)

        return result

    def __processBoroughSummary(self, year, boroughCode=None, currentLevel = False):
        result = {}
        if currentLevel:
            result = []

        boroughData = self.__cityInfo.get(boroughCode)
        for neighborhoodCode in boroughData:
            neighborhoodData = boroughData.get(neighborhoodCode)
            neighborhoodResult = self.__processNeighborhoodSummary(year, boroughCode, neighborhoodCode, neighborhoodData)

            if currentLevel:
                anwser = {"name":neighborhoodCode,
                    "code": neighborhoodCode,
                    "summaries":neighborhoodResult
                }
                result.append(anwser)
            else:
                for attributeCode in neighborhoodResult:
                    boroughAttrSummary = result.get(attributeCode)
                    neighborhoodAttrSummary = neighborhoodResult.get(attributeCode)
                    if boroughAttrSummary is None:
                        result[attributeCode] = neighborhoodAttrSummary
                    else:
                        result[attributeCode] = self.mergeSummary(boroughAttrSummary, neighborhoodAttrSummary)

        return result

    def __processNeighborhoodSummary(self, year, boroughCode, neighborhoodCode, neighborhoodData, currentLevel = False):
        results = []

        processes = []
        for blockCode in neighborhoodData:
            blockData = neighborhoodData.get(blockCode)
            # p = Thread(target=self.blockProcessingCall, args=(results, year, boroughCode, blockCode, blockData))
            # processes.append(p)
            blockResult = self.__processBlockSumamry(year, boroughCode, blockCode, blockData)
            results.append((blockCode, blockResult))

        # for p in processes:
        #     p.start()
        #     p.join()

        result = {}

        if currentLevel:
            result = []
        
        for blockCode, blockResult in results:
            if currentLevel:
                anwser = {"name":blockCode,
                    "code": blockCode,
                    "summaries":blockResult
                }
                result.append(anwser)
            else:
                for attributeCode in blockResult:
                    neighborhoodAttrSummary = result.get(attributeCode)
                    blockAttrSummary = blockResult.get(attributeCode)
                    if neighborhoodAttrSummary is None:
                        result[attributeCode] = blockAttrSummary
                    else:
                        result[attributeCode] = self.mergeSummary(neighborhoodAttrSummary, blockAttrSummary)
        return result

    def blockProcessingCall(self, results, year, boroughCode, blockCode, lotsFromBlock: List[LotData]):
        blockResult = self.__processBlockSumamry(year, boroughCode, blockCode, lotsFromBlock)
        results[blockCode] = blockResult

    def __processBlockSumamry(self, year, boroughCode, blockCode, lotsFromBlock: List[LotData], currentLevel = False):
        result = {}
        if currentLevel:
            result = []
        for lotData in lotsFromBlock:
            lotResult = {}
            for attributeCode in uniqueFieldsSet:
                summaryAnswer = self.__createDefaultSummary(value=0, count=0)
                
                if attributeCode == "LOTSALIVE":
                    if lotData.wasAlive(year):
                        summaryAnswer = self.__createDefaultSummary(value=1, count=1)
                        summaryAnswer["attrFound"] = True
                else:
                    attributeDataId = lotData.getAttributeDataFromYear(year)
                    if attributeDataId is not None:
                        attributeData = self.__attributesDS.getAttribute(boroughCode, attributeDataId)
                        attributeValue = attributeData.get(attributeCode)
                        if attributeValue is not None:
                            if attributeValue != "unknown":
                                if type(attributeValue) is str:
                                    attributeValue = float(attributeValue)
                                if attributeValue > 0:
                                    summaryAnswer = self.__createDefaultSummary(attributeValue, count = 1)
                                else:
                                    summaryAnswer = self.__createDefaultSummary(attributeValue, count = 0)
                                summaryAnswer["attrFound"] = True
                            

                lotResult[attributeCode] = summaryAnswer
            
            if currentLevel:
                anwser = {"name":lotData.getBBL(),
                    "code": lotData.getBBL(),
                    "summaries":lotResult
                }
                result.append(anwser)
            else:
                for attributeCode in lotResult:
                    blockAttrSummary = result.get(attributeCode)
                    lotAttributeSummary = lotResult.get(attributeCode)
                    if blockAttrSummary is None:
                        result[attributeCode] = lotAttributeSummary
                    else:
                        result[attributeCode] = self.mergeSummary(blockAttrSummary, lotAttributeSummary)
        return result

    def mergeSummary(self, summaryA, summaryB):
        result = self.__createDefaultSummary()
        result["sum"] = summaryA["sum"] + summaryB["sum"]
        result["count"] = summaryA["count"] + summaryB["count"]
        result["min"] = summaryA["min"] if summaryA["min"] < summaryB["min"] else summaryB["min"]
        result["max"] = summaryA["max"] if summaryA["max"] > summaryB["max"] else summaryB["max"]
        result["mean"] = result["sum"]/result["count"] if result["count"] != 0 else 0
        result["attrFound"] = summaryA["attrFound"] or summaryB["attrFound"]
        return result
#end of summary function

# starting filtering function
    def doLayerFilter(self, year, attributeCode, min, max, boroughCode=None, neighborCode=None, blockCode=None):
        if neighborCode is None:
            # It has to handle neighborhood state, whole city every neighborhood
            return self.doNeighborhoodLayerFilter(year, attributeCode, min, max)
        
        boroughData = self.__cityInfo.get(boroughCode)
        if boroughData is None:
            raise Exception("Borough Data from {bcode} is not available!".format(bcode=boroughCode))
        
        neighborhoodData = boroughData.get(neighborCode)
        if neighborhoodData is None:
            raise Exception("Neighbrohood Data from {ncode} is not available!".format(ncode=neighborCode))

        if blockCode is None:
            # it has to handle block state
            return self.doBlockLayerFilter(year, attributeCode, min, max, boroughCode, neighborhoodData)
        
        blockData = neighborhoodData.get(blockCode)
        if blockData is None:
            raise Exception("Block data from block Code ({bcode}) is not available.".format(bcode=blockCode))
        # here I'll analyze a selected Block

        return self.doLotLayerFilter(year, attributeCode, min, max, boroughCode, blockData)

    def doNeighborhoodLayerFilter(self, year, attributeCode, min, max):
        result = {}
        cityData = self.__boroNeighSummary.get(year)
        if cityData is None:
            raise Exception("CityData is not available.")

        for neighborhoodData in cityData:
            neighborhoodCode = neighborhoodData.get("code")
            neighborhoodSummaries = neighborhoodData.get("summaries")
            neighborhoodAttrSummary = neighborhoodSummaries.get(attributeCode)

            if neighborhoodAttrSummary is not None:
                attrFound = neighborhoodAttrSummary.get("attrFound")
                if attrFound:
                    attrSum = neighborhoodAttrSummary.get("sum")

                    sumInRange = min <= attrSum and attrSum <= max

                    if sumInRange:
                        result[neighborhoodCode] = True
        return result

    def doBlockLayerFilter(self, year, attributeCode, min, max, boroughCode, neighborhoodData):
        result = {}
        for blockCode in neighborhoodData:
            blockData = neighborhoodData.get(blockCode)
            blockResult = self.doLotLayerFilter(year, attributeCode, min, max, boroughCode, blockData, returnFirst=True)
            if len(blockResult) > 0:
                result[blockCode] = True
        return result
    
    def doLotLayerFilter(self, year, attributeCode, min, max, boroughCode, blockData: List[LotData], returnFirst = False):
        result = {}
        for lotData in blockData:
            lotAttrID = lotData.getAttributeData(year)
            if lotAttrID is None:
                continue
            lotAttrData = self.__attributesDS.getAttribute(boroughCode, lotAttrID)
            if lotAttrData is None:
                raise Exception("LotAttrData is not available for do lot layer filtering.")
            lotValue = lotAttrData.get(attributeCode)            

            if lotValue is None or lotValue == "unknown":
                continue
            
            lotValue = float(lotValue)
            if min <= lotValue and lotValue <= max:
                result[lotData.getBBL()] = True
                if returnFirst:
                    return result
        return result

# end of filtering function

    def __staticSummary(self):
        # TODO: Need to include borough filter
        boroughInfo = self.__cityInfo.get(boroughCode)
        if boroughInfo is None:
            raise Exception("Borough Code is not available.")

        result = []
        
        # return neighborhood layer Info
        if neighCode is None:
            for neighborhoodCode in boroughInfo:
                neighborhoodSummary = self.__summaries.get(neighborhoodCode)
                
                if neighborhoodSummary is None:
                    print("{1} does not have summary calculated.".format(neighborhoodCode))
                    continue

                outputSummary = self.__generateOutputSummary(year, neighborhoodCode, neighborhoodCode, neighborhoodSummary)
                result += [outputSummary]
        
        # return block or lot Layer
        else:
            neighborhoodInfo = boroughInfo.get(neighCode)
            if neighborhoodInfo is None:
                raise Exception("Neighborhood is not available!")
            # return block Layer
            if blockCode is None:
                for nBlockCode in neighborhoodInfo:
                    blockSummary = self.__summaries.get(nBlockCode)

                    if blockSummary is None:
                        print("{1} does not have summary calculated.".format(nBlockCode))
                        continue

                    outputSummary = self.__generateOutputSummary(year, nBlockCode, nBlockCode, blockSummary)
                    result += [outputSummary]

            # return lot Layer
            else:
                blockInfo = neighborhoodInfo.get(blockCode)
                if blockInfo is None:
                    raise Exception("Block Info is not available!")
                # return lot layer from block
                if lotCode is None:
                    for lotInfo in blockInfo:
                        _plutoLotData: LotData = lotInfo
                        lotAttributeDataID = _plutoLotData.getAttributeDataFromYear(year)
                        if lotAttributeDataID is not None:
                            attributesValues = self.__attributesDS.getAttribute(lotAttributeDataID)
                            outputSummary = self.__generateLotOutputSummary(_plutoLotData.getBBL(), _plutoLotData.getBBL(), attributesValues)
                            result += [outputSummary]
                else:
                    for lotInfo in blockInfo:
                        _plutoLotData: LotData = lotInfo
                        if _plutoLotData.getBBL() == lotCode:
                            lotAttributeDataID = _plutoLotData.getAttributeDataFromYear(year)
                            if lotAttributeDataID is not None:
                                attributesValues = self.__attributesDS.getAttribute(int(_plutoLotData.getBBL()[0]), lotAttributeDataID)
                                outputSummary = self.__generateLotOutputSummary(_plutoLotData.getBBL(), _plutoLotData.getBBL(), attributesValues)
                                result += [outputSummary]

        # result = []
        # result = self.__cityInfo.getLayerInfo(year, neighCode, blockCode, lotCode)
        return result

    def getStringfy(self):
        return jsonpickle.encode(self.__cityInfo)

    def getNeighborhoodsShapes(self, boroughCode = None):
        # TODO: Pass boroughCode if it is necessary
        result = []
        if boroughCode is not None:
            neighborsData: List[NeighborhoodItem]  = self.__neighHandler.getNeighInfoData(boroughCode)
            for neighborData in neighborsData:
                result += [neighborData]
        else:
            boroughsAvailable = self.__neighHandler.getBoroughsAvailable()
            for boroughAvailableCode in boroughsAvailable:
                neighborsData = self.__neighHandler.getNeighInfoData(boroughAvailableCode)
                for neighborData in neighborsData:
                    result += [neighborData]
        # self.__neighHandler.getNeighInfoData()
        # result = self.__cityInfo.getNeighborhoodShapes()
        result = self.__createUrbaneNeighborLayer(result)
        return result

    def getNeighborhoodLotsLayer(self, boroughCode, neighborCode, year):
        result = [] #self.__cityInfo.getNeighborhoodLotsLayer(boroughCode, neighborCode)
        boroughInfo = self.__cityInfo.get(boroughCode)
        if boroughInfo is None:
            raise Exception("Borough is not available!")

        neighborInfo = boroughInfo.get(neighborCode)
        if neighborInfo is None:
            raise Exception("Neighborhood is not availble!")

        for blockCode in neighborInfo:
            blockInfo = neighborInfo.get(blockCode)
            for lotInfo in blockInfo:
                result.append(lotInfo)

        result = self.__createUrbaneLotsLayer(result, year)
        return result


if __name__ == '__main__':
    # years = ['2009', '2009.2', '2010', '2010.2', '2011', '2011.2', '2012', '2012.2', '2013',
    # '2013.2', '2014', '2014.2', '2015', '2016', '2016.2', '2017']
    boroughMap = {"MANHATTAN": "1", "BRONX":"2", "BROOKLYN": "3", "QUEENS":"4", "STATENISLAND":"5"}
    # _borough = "Manhattan"

    _boroughs = [ "Bronx", "Queens", "StatenIsland"]

    _delimiter = ";"
    # neighborhoodFileName = "./Data/nynta_19b/nynta"
    neighborhoodFileName = "./Data/neighs_fromboroughs_nycoords.out"
    boroughsAvailable = ["1", "2", "3", "4", "5"]
    # neighborhoodFileName = "/media/claudio/Data/Projects/UFF/LABNY/MapPlutoResources/nynta_19b/nynta"
    # neighborhoodFileName = "C:/Users/Public/Resources/MapPluto/Neighborhood/nynta_19a/nynta"

    for _borough in _boroughs:
        geometryDS = GeometryDS()
        attributesDS = AttributesDS()
        plutoStorage = PlutoDataStructure(years, neighborhoodFileName, boroughsAvailable, _delimiter, geometryDS, attributesDS)
        print("start of borough {0}".format(_borough))
        fileName = "./Data/{boro}/{boro}_fullFinalData_withNeighCode.out".format(boro=_borough)
        geometriesFileName = "./Data/{boro}/{boro}_fullFinalData_withNeighCode_geometries_nycoord.out".format(boro=_borough)
        attributesFileName = "./Data/{boro}/{boro}_fullFinalData_withNeighCode_attributes.out".format(boro=_borough)

        boroughCode = boroughMap.get(_borough.upper())
        print("Geoemtry Data Structure")
        geometryDS.load(boroughCode, geometriesFileName)

        print("Attributes Data Structure")
        attributesDS.load(boroughCode, attributesFileName)


        # result = plutoStorage.getNeighborhoodsShapes()
        # print(result)
        
        # loop that will read our final structured data and set pluto data structure
        with open(fileName, 'r') as fp:
            for ind, line in enumerate(fp):
                # Verifying header line
                if "BBL;NEIGH" in line:
                    continue
                # Split line by defined delimiter
                lineSplitter = line.split(_delimiter)
                # Parse Result to insert each line on data structure
                plutoLotData = LotData.parseLineSplitted(lineSplitter)

                # Insert interpreted lot on datastructure
                plutoStorage.insertPlutoLotData(plutoLotData)

                if ind % 1000 == 0 and ind != 0:
                    print("records read:\t{0}.".format(ind))

        print("Generating Summaries")
        for _year in years:
            print("Working on year: {0}".format(_year))
            yearLayerInfo = plutoStorage.getLayerInfo(_year)
            if len(yearLayerInfo) > 0:
                json.dump(yearLayerInfo, open("./Data/{boro}/neighborhoodSummary_{year}.cache".format(boro = _borough, year = _year ), "w"))
            print("year {0} dumped.".format(_year))
    print("End of loading process")

    print("Testing Section")

    """
    def getLayerInfo(self, year, boroughCode="1", neighCode=None, blockCode=None, lotCode=None):
    """

    # result = plutoStorage.getNeighborhoodLotsLayer("1", "MN20->2", "2002")
    # print(result)

    # result = plutoStorage.getLayerInfo("2002")
    # print(result)
    
    # result = plutoStorage.getLayerInfo("2003", "1", "MN20->2")
    # print(result)

    # result = plutoStorage.getLayerInfo("2009", "1", "MN17->0", "00995")
    # print(result)

    # result = plutoStorage.getLayerInfo("2017", "1", "MN11->0", "01848", "1018480055->0")
    # print(result)

    """
    end of first testing section
    """

    # result = geometryDS.getGeometry(0)
    # print(result)

    # result = geometryDS.getGeometry(1000)
    # print(result)

    # result = geometryDS.getGeometry(100000)
    # print(result)

    # result = attributesDS.getAttribute(0)
    # print(result)

    # result = attributesDS.getAttribute(1000)
    # print(result)

    # result = attributesDS.getAttribute(100000)
    # print(result)

    # result = plutoStorage.getLotInformation('2003', '1006250058->0', 'MN23->0')
    # print(result)

    # result = plutoStorage.getLotInformation('2003', '1004890003->0', 'MN24->0')
    # print(result)

    # result = plutoStorage.getLotInformation('2003', '1006150019->0', 'MN23->0')
    # print(result)

    # result = plutoStorage.getLotInformation('2003', '1015460035->0', 'MN32->1')
    # print(result)
    # 1004610004 NEIGHBOR MN22-> This tax lot has modifications at 2006. 2005 it was mixed type, 2006 becomes vacantland and 2007 it appears as commercial building

    # result = plutoStorage.getTranstypeLayer("2010", "1", None)
    # print("QUERY ALL DATA", len(result))

    # result = plutoStorage.getTlTypeCount("1", None)
    # print(result)

    # result = plutoStorage.getTransTypeCount("1", None)
    # print(result)

    # result = plutoStorage.getTranstypeLayer("2010", "1", "KEEP")
    # print("KEEP DATA", len(result))

    # result = plutoStorage.getTranstypeLayer("2010", "1", "MERGE")
    # print("MERGE DATA", len(result))

    # result = plutoStorage.getTranstypeLayer("2010", "1", "SPLIT")
    # print("SPLIT", len(result))

    # result = plutoStorage.getTranstypeLayer("2007", "1", None)
    # print("QUERY ALL DATA", len(result))

    # result = plutoStorage.getTLTypeLayer ("2010", "1", "MIXED")
    # print("MIXED", len(result))

    # result = plutoStorage.getTLTypeLayer ("2010", "1", "VACANTLAND")
    # print("VACANTLAND", len(result))

    # result = plutoStorage.getTLTypeLayer ("2010", "1", "RESIDENTIAL")
    # print("RESIDENTIAL", len(result))

    # result = plutoStorage.getTLTypeLayer ("2010", "1", "OTHERS")
    # print("OTHERS", len(result))

    # result = plutoStorage.getTLTypeLayer ("2010", "1", "COMMERCIAL")
    # ["UKNOWN", "COMMERCIAL", "OTHERS", "RESIDENTIAL", "VACANTLAND", "MIXED"]
    # print("COMMERCIAL", len(result))

    # result = plutoStorage.getTLTypeLayer ("2010", "1", None)
    # print("QUERY ALL DATA", len(result))

    # result = plutoStorage.getNeighborhoodsShapes()
    # print("NEIGH SHAPES", len(result))

    # result = plutoStorage.getNeighborhoodLotsLayer('MN06')
    # print("LOTS FROM NEIGHBORHOOD", len(result))

    # for item in result:
    #   for tlType in ["MIXED", "COMMERCIAL", "OTHERS", "RESIDENTIAL", "VACANTLAND"]:
    #     age = item.getTimeOfTLType("2017", tlType)
    #     if age > 0 and age < 15:
    #       print(age)

    # plutoStorage.getNeighborhoodsShapes()
    # with open("./Data/fullInfo.outdata", 'w') as fp:
    #   fp.write(plutoStorage.getStringfy())
