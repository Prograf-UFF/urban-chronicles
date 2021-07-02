import json, os
from Model.util import years, boroughs

# boroughs = ["Manhattan", "Brooklyn"]
boroughMap = { "Manhattan" : "1", "Brooklyn" : "3" }
deli = ';'
popsFileName = './Data/pops_fromboroughs.out' 
# BOROUGH;POPSCode;BUILDNAME;BBL;YEAR_BUILT;SHAPE
# BBL(3);YEAR_BUILT(4)

def readPOPData(fileName):
    data = {}
    fixed = 0
    skip = 0
    with open(fileName, 'r') as fp:
        for line in fp:
            if "BOROUGH;POPS" in line:
                continue
            lineSplitted = line.split(deli)
            bbl = lineSplitted[3]
            yearBuilt = lineSplitted[4]
            yearData = data.get(bbl)
            if yearData is not None:
                print("Handle POP Duplicated", bbl, yearBuilt, yearData, yearBuilt > yearData)
                if yearBuilt < yearData:
                    yearBuilt = yearData
            if yearBuilt < years[0]:
                fixed += 1
                yearBuilt = years[0]
            if yearBuilt > years[-1]:
                skip += 1
                print(years[-1], "less than", yearBuilt)
                continue
            data[bbl] = yearBuilt
    print("POP YearCreated Fixed", fixed)
    print("POP YearCreated Skipped", skip)
    return data

class POPSHandler():
    def __init__(self, fileTemplate):
        self.datasetFileTemplate = fileTemplate

    # BBL;NEIGHCODE;GEOMETRIES;ATTRIBUTES
    def fillPOPsAttribute(self, datasetFileTemplate, popData):
        fileOutputTemplate = self.datasetFileTemplate.replace("rawattr", "rawattr_mod")
        index = 0
        length = len(boroughs) * len(years)
        for borough in boroughs:
            for year in years:
                fileName = self.datasetFileTemplate.format(_borough=borough, fileYear=year)
                if not os.path.exists(fileName):
                    continue
                fileOutName = fileOutputTemplate.format(_borough=borough, fileYear=year)
                with open(fileName, 'r') as fp, open(fileOutName, 'w') as fpOut:
                    for line in fp:
                        lineSplitted = line.split(deli)
                        lineSplitted = [attrName.strip() for attrName in lineSplitted]
                        nLine = ""
                        if "YEAR;BBL;" in line:
                            lineSplitted.append("POPS")
                        else:
                            bbl = lineSplitted[1]
                            popCreatedYear = popData.get(bbl)
                            popCreated = "N"
                            if popCreatedYear is not None:
                                if year >= popCreatedYear:
                                    popCreated = "Y"
                            lineSplitted.append(popCreated)
                        nLine = deli.join(lineSplitted)
                        fpOut.write("{0}\n".format(nLine))
                index += 1
                print("{0}/{1}".format(index, length))

def run_process():
    popData = readPOPData(popsFileName)
    datasetFileTemplate = './Data/{_borough}/{fileYear}/{_borough}_{fileYear}_rawattr.out'
    popsHandler = POPSHandler(datasetFileTemplate)
    popsHandler.fillPOPsAttribute(datasetFileTemplate, popData)

if __name__ == '__main__':
    run_process()
    