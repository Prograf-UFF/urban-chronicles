from Model.util import years
from Model.util import getNumericalHigh
from Model.util import getNumericalLow
from Model.util import getCategorical
from Model.util import getImportantFields
from Model.util import boroughs
from multiprocessing import Process
import json, os

class SplitAttributes():
    def __init__(self, _fileName, _delimeter):
        self.fileName = _fileName
        self.fileOutName = self.fileName.replace("_mod","_splitted")
        self.delimeter = _delimeter

    def run(self, borough):
        numericalHigh = getNumericalHigh()
        numericalLow = getNumericalLow()
        categorical = getCategorical()
        lineTemplate = "{0}{deli}{1}{deli}{2}{deli}{3}{deli}{4}\n"
        with open(self.fileName, 'r') as fp, open(self.fileOutName, 'w') as fpOut:
            for i,line in enumerate(fp):
                if "YEAR;BBL" in line:
                    continue
                lineSplitted = line.split(self.delimeter)
                year = lineSplitted[0]
                bbl = lineSplitted[1]
                attributes = lineSplitted[2:]
                attributes = [attrName.strip() for attrName in attributes]
                highs = {}
                lows = {}
                categ = {}
                index = 0
                for attrName in numericalHigh:
                    attrData = attributes[index]
                    highs[attrName] = attrData
                    index += 1
                for attrName in numericalLow:
                    attrData = attributes[index]
                    lows[attrName] = attrData
                    index += 1
                for attrName in categorical:
                    try:
                        attrData = attributes[index]
                        categ[attrName] = attrData
                        index += 1
                    except: 
                        print(borough, " Broken ", i)
                line = lineTemplate.format(year, bbl, json.dumps(highs), json.dumps(lows), json.dumps(categ), deli=self.delimeter)
                fpOut.write(line)

def processBorough(borough, delimeter):
    fileNameAttrTemplate = "./Data/{borough}/{year}/{borough}_{year}_rawattr_mod.out"

    for year in years:
        fileName = fileNameAttrTemplate.format(borough=borough, year=year)
        if not os.path.exists(fileName):
            continue
        print(borough, " Executing ", year)
        splitAttributes = SplitAttributes(fileName, delimeter)
        splitAttributes.run(borough)
        print(borough, " End of ", year)


def run_process():
    # boroughs = ["Manhattan", "Brooklyn"]
    delimiter = ';'
    ps = []
    for borough in boroughs:
        p = Process(target=processBorough, args=(borough, delimiter))
        ps.append(p)
        p.start()
        # processBorough(borough, delimeter)
    for p in ps:
        p.join()

if __name__ == '__main__':
    run_process()
