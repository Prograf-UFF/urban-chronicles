from Model.attributesds import AttributesDS
from Model.util import uniqueFieldsSet
from Model.lotData import LotData
import datetime as dati
# ID -> attributeCode -> year -> summary
class SummaryBuilder(object):

    @staticmethod
    def createSummaries(summaryStructure, cityInfo, attributesDS: AttributesDS):
        totalOfBoroughs = len(cityInfo)
        processingIndex = 1
        print(dati.datetime.now())
        for boroughCode in cityInfo:
            boroughInfo = cityInfo.get(boroughCode)
            # Create Borough Summary
            print("Borough: {0}/{1}".format(processingIndex, totalOfBoroughs))
            SummaryBuilder.__createBoroughSummary(summaryStructure, boroughCode, boroughInfo, attributesDS)
            processingIndex += 1
        print(dati.datetime.now())

    @staticmethod
    def __createBoroughSummary(summaryStructure, boroughCode, boroughInfo, attributesDS: AttributesDS):
        totalOfNeighborhoods = len(boroughInfo)
        processingIndex = 1
        for neighborhoodCode in boroughInfo:
            neighborhoodInfo = boroughInfo.get(neighborhoodCode)
            # Create create neighborhood summary
            print("-Neighborhood: {0}/{1}".format(processingIndex, totalOfNeighborhoods))
            print(dati.datetime.now())
            SummaryBuilder.__createNeighborhoodSummary(summaryStructure, neighborhoodCode, neighborhoodInfo, attributesDS)
            SummaryBuilder.__proccessSummaryCreated(summaryStructure, boroughCode, neighborhoodCode)
            print(dati.datetime.now())
            processingIndex += 1

    @staticmethod
    def __createNeighborhoodSummary(summaryStructure, neighborhoodCode, neighborhoodInfo, attributesDS: AttributesDS):
        # totalOfBlocks = len(neighborhoodInfo)
        # processingIndex = 1
        for blockCode in neighborhoodInfo:
            blockInfo = neighborhoodInfo.get(blockCode)
            # Create blockInfo
            # print("--Block: {0}/{1}".format(processingIndex, totalOfBlocks))
            SummaryBuilder.__createBlockSumamry(summaryStructure, blockCode, blockInfo, attributesDS)
            SummaryBuilder.__proccessSummaryCreated(summaryStructure, neighborhoodCode, blockCode)
            # processingIndex += 1

    @staticmethod
    def __proccessSummaryCreated(summaryStructure, kingCode, slaveCode):
        slaveSummary = summaryStructure.get(slaveCode)
        if slaveSummary is None:
            raise Exception("Error ---> Slave Summary não existente")

        kingSummary = summaryStructure.get(kingCode)
        if kingSummary is None:
            kingSummary = {}
            summaryStructure[kingCode] = kingSummary

        for attributeCode in uniqueFieldsSet:
            slaveAttributeSummary = slaveSummary.get(attributeCode)
            if slaveAttributeSummary is None:
                raise Exception("Error ---> Slave attributeSummary não existente")
            
            kingAttributeSummary = kingSummary.get(attributeCode)
            if kingAttributeSummary is None:
                kingAttributeSummary = {}
                kingSummary[attributeCode] = kingAttributeSummary

            for year in slaveAttributeSummary:
                slaveAttributeYearSummary = slaveAttributeSummary.get(year)
                attributeValue = slaveAttributeYearSummary.get("sum")
            
                kingAttributeYearSymmary = kingAttributeSummary.get(year)
                if kingAttributeYearSymmary is None:
                    kingAttributeYearSymmary = SummaryBuilder.createNumericSummary()
                    kingAttributeSummary[year] = kingAttributeYearSymmary

                if attributeValue < kingAttributeYearSymmary["min"]:
                    kingAttributeYearSymmary["min"] = attributeValue
                if attributeValue > kingAttributeYearSymmary["max"]:
                    kingAttributeYearSymmary["max"] = attributeValue
                kingAttributeYearSymmary["sum"] += attributeValue
                kingAttributeYearSymmary["count"] += 1

                kingAttributeYearSymmary["bblList"].append([attributeValue, slaveCode])

    @staticmethod
    def __createBlockSumamry(summaryStructure, blockCode, blockInfo, attributesDS:AttributesDS):

        blockSummary = summaryStructure.get(blockCode)
        if blockSummary is None:
            blockSummary = {}
            summaryStructure[blockCode] = blockSummary
        
        # totalOfLots = len(blockInfo)
        # processingIndex = 1
        
            
        for lData in blockInfo:
            lotData: LotData = lData

            for attributeCode in uniqueFieldsSet:
                blockAttributeSummary = blockSummary.get(attributeCode)
                if blockAttributeSummary is None:
                    blockAttributeSummary = {}
                    blockSummary[attributeCode] = blockAttributeSummary
                SummaryBuilder.__processLotData(blockAttributeSummary, attributeCode, lotData, attributesDS)
            # print("---Lot: {0}/{1}".format(processingIndex, totalOfLots))
            # processingIndex += 1



    @staticmethod
    def __processLotData(blockAttributeSummary, attributeCode, lotData:LotData, attributesDS: AttributesDS):
        # print(lotData.getBBL())
        for year in lotData.yearsAlive():

            if attributeCode == "LOTSALIVE":
                lotAliveSummary = blockAttributeSummary.get(year)
                if lotAliveSummary is None:
                    lotAliveSummary = SummaryBuilder.createNumericSummary()
                    blockAttributeSummary[year] = lotAliveSummary
                lotAliveSummary["min"] = 1    
                lotAliveSummary["max"] = 1    
                lotAliveSummary["sum"] += 1
                lotAliveSummary["count"] += 1
            else:
                attributeID = lotData.getAttributeData(year)
                attributesData = attributesDS.getAttribute(int(lotData.getBBL()[0]),attributeID)
                attributeValue = attributesData.get(attributeCode)

                if attributeValue is not None \
                        and attributeValue != "unknown":
                    attributeValue = float(attributeValue)
                    
                    blockAttributeYearSummary = blockAttributeSummary.get(year)
                    
                    if blockAttributeYearSummary is None:
                        blockAttributeYearSummary = SummaryBuilder.createNumericSummary()
                        blockAttributeSummary[year] = blockAttributeYearSummary

                    if attributeValue < blockAttributeYearSummary["min"]:
                        blockAttributeYearSummary["min"] = attributeValue
                    if attributeValue > blockAttributeYearSummary["max"]:
                        blockAttributeYearSummary["max"] = attributeValue
                    blockAttributeYearSummary["sum"] += attributeValue
                    blockAttributeYearSummary["count"] += 1

                    blockAttributeYearSummary["bblList"].append([attributeValue, lotData.getBBL()])


    @staticmethod
    def createNumericSummary():
        numericSummary = {}
        numericSummary["sum"] = 0
        numericSummary["min"] = float("inf")
        numericSummary["max"] = float("-inf")
        numericSummary["count"] = 0
        numericSummary["mean"] = None
        numericSummary["bblList"] = []
        numericSummary["attrFound"] = True

        return numericSummary