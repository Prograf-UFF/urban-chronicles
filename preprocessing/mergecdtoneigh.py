
from Model.util import *
deli = ";"
# boroughs = ["Manhattan", "Brooklyn"]
#["Queens", "StatenIsland", "Bronx"]

dataset = {}

class Element:
    def __init__(self, _bbl, _neighCode, _geometries, _attributesHigh, _attributesLow, _attributesCateg):
        self.bbl = _bbl
        self.neighCode = _neighCode
        self.geometries = _geometries
        self.attributesHigh = _attributesHigh
        self.attributesLow = _attributesLow
        self.attributesCateg = _attributesCateg

    def setCdCode(self, _cdCode):
        self.cdCode = _cdCode
    
    def write(self, fp):
        line = "{0}{_deli}{1}{_deli}{2}{_deli}{3}{_deli}{4}{_deli}{5}{_deli}{6}".format(self.bbl, self.neighCode, self.cdCode, self.geometries, self.attributesHigh, self.attributesLow, self.attributesCateg, _deli = deli)
        fp.write(line)

def handlerNeighData():
    file_path_template = "./Data/{boro}/neigh_{boro}_fullFinalData_withNeighCode.out"
    for borough in boroughs:
        file_path = file_path_template.format(boro=borough)
        boroughDataset = dataset.get(borough)
        if boroughDataset is None:
            boroughDataset = {}
            dataset[borough] = boroughDataset
        with open(file_path, 'r') as fp:
            for line in fp:
                if "BBL;NEIGHCODE" in line:
                    continue
                lineSplitted = line.split(deli)
                # BBL;NEIGHCODE;GEOMETRIES;ATTRIBUTES
                bbl = lineSplitted[0]
                neighCode = lineSplitted[1]
                geometries = lineSplitted[2]
                attributesHigh = lineSplitted[3]
                attributesLow = lineSplitted[4]
                attributesCateg = lineSplitted[5]
                data = Element(bbl, neighCode, geometries, attributesHigh, attributesLow, attributesCateg)
                boroughDataset[bbl] = data

def handlerCDData():
    file_path_template = "./Data/{boro}/cd_{boro}_fullFinalData_withNeighCode.out"
    for borough in boroughs:
        file_path = file_path_template.format(boro=borough)
        boroughDataset = dataset.get(borough)
        if boroughDataset is None:
            print("problem here {0}".format(borough))
            continue
        with open(file_path, 'r') as fp:
            for line in fp:
                if "BBL;NEIGHCODE" in line:
                    continue
                lineSplitted = line.split(deli)
                # BBL;NEIGHCODE;GEOMETRIES;ATTRIBUTES
                bbl = lineSplitted[0]
                cdCode = lineSplitted[1]
                data = boroughDataset.get(bbl)
                if data is None:
                    print("problem here {0}".format(bbl))
                data.setCdCode(cdCode)

def outDatasetFile():
    fileout_path_template = "./Data/{boro}/{boro}_fullFinalData_withNeighCode.out"
    for borough in dataset:
        boroughDataset = dataset.get(borough)
        fileout_path = fileout_path_template.format(boro=borough)
        with open(fileout_path, 'w') as fp:
            for bbl in boroughDataset:
                data = boroughDataset.get(bbl)
                data.write(fp)

handlerNeighData()
handlerCDData()
outDatasetFile()
