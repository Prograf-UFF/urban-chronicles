from Model.util import boroughs
from Model.util import getBoroughCode
from Model.attributesds import AttributesDS
import os 
import json

class CustomAttributeProcessingParameter():
    def __init__(self, _datasetFileName, _highDSFileName, _lowDSFileName, _delimiter):
        self.__datasetFileName = _datasetFileName
        self.__highDSFileName = _highDSFileName
        self.__lowDSFileName = _lowDSFileName
        self.__delimiter = _delimiter
    def getDatasetFilename(self):
        return self.__datasetFileName
    def getHighDSFileName(self):
        return self.__highDSFileName
    def getLowDSFileName(self):
        return self.__lowDSFileName
    def getDelimiter(self):
        return self.__delimiter

class CustomAttributeProcessing:
    def __init__(self, boroughCode, _parameter):
        self.__boroughCode = boroughCode
        self.__parameter: CustomAttributeProcessingParameter = _parameter
        self.__highDS: AttributesDS = AttributesDS(self.__parameter.getDelimiter())
        self.__lowDS: AttributesDS = AttributesDS(self.__parameter.getDelimiter())
        self.__loadAttributesStructures(self.__highDS, self.__parameter.getHighDSFileName())
        self.__loadAttributesStructures(self.__lowDS, self.__parameter.getLowDSFileName())

    def __loadAttributesStructures(self, attributesTypeDS: AttributesDS, attributesDSFileName ):
        attributesTypeDS.load(self.__boroughCode, attributesDSFileName)
    
    def run(self):
        with open(self.__parameter.getDatasetFilename(), 'r') as fp:
            for line in fp:
                lineSplitted = line.replace("\n", "").split(self.__parameter.getDelimiter())
                #bbl - 0, ntaCode - 1, cdCode - 2, geometries - 3, attrHigh - 4, attrLow - 5, attrCateg - 6
                attrHigh = json.loads(lineSplitted[4])
                attrLow = json.loads(lineSplitted[5])
                for year in attrHigh:
                    highID = attrHigh.get(year)
                    lowID = attrLow.get(year)
                    highData = self.__highDS.getAttribute(self.__boroughCode, highID)
                    lowData = self.__lowDS.getAttribute(self.__boroughCode, lowID)
                    assessTot = highData.get("ASSESSTOT")
                    lotArea = lowData.get("LOTAREA")
                    divResult = ""
                    if assessTot == "unknown" or str(assessTot).lower() == "empty":
                        divResult = assessTot
                    else:
                        assessTot = float(assessTot)
                        lotArea = float(lotArea)
                        divResult = assessTot/lotArea if lotArea > 0 else 0
                    key = "ASSESSTOT/LOTAREA"
                    highData[key] = str(divResult)
                    self.__highDS.replaceAttributes(self.__boroughCode, highID, highData)
    
    def dump(self, fileOutName):
        self.__highDS.dump(fileOutName)

if __name__ == '__main__':
    dataset_path_template = "./Data/{boro}/{boro}_fullFinalData_withNeighCode.out"
    file_path_template = "./Data/{boro}/neigh_{boro}_fullFinalData_withNeighCode_attributes_{type}.out"
    fileOutTemplate = "./Data/{boro}/neigh_{boro}_fullFinalData_withNeighCode_attributes_{type}_custom.out"
    delimiter = ";"
    for borough in boroughs:
        boroughCode = getBoroughCode(borough)
        datasetFileName = dataset_path_template.format(boro=borough)
        highDSFileName = file_path_template.format(boro=borough, type="high")
        lowDSFileName = file_path_template.format(boro=borough, type="low")
        param = CustomAttributeProcessingParameter(datasetFileName, highDSFileName, lowDSFileName, delimiter)
        customProcess = CustomAttributeProcessing(boroughCode, param)
        customProcess.run()
        fileOutName = fileOutTemplate.format(boro=borough, type="high")
        customProcess.dump(fileOutName)
        # os.remove(lowDSFileName)
        fileTemp = "./Data/{boro}/neigh_{boro}_fullFinalData_withNeighCode_attributes_{type}_bkp.out".format(boro=borough, type="high")
        if os.path.exists(fileTemp):
            os.remove(fileTemp)
        os.rename(highDSFileName, fileTemp)
        os.rename(fileOutName, highDSFileName)