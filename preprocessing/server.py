from flask import Flask, redirect, url_for, request, render_template
from flask_cors import CORS
import sys
import json
from Model.lotData import LotData
from plutoDataStructure import PlutoDataStructure
from Model.util import *
from Model.geometryds import GeometryDS
from Model.attributesds import AttributesDS
from typing import Optional
from threading import Thread

app = Flask(__name__, static_url_path='', static_folder='static', template_folder='static')
CORS(app)
engine: Optional[PlutoDataStructure] = None
boroughMap = {"MANHATTAN": "1", "BRONX":"2", "BROOKLYN": "3", "QUEENS":"4", "STATENISLAND":"5"}


def loadEngine(numberOfLotsToLoad=-1):
    # _boroughs = ["Manhattan"]
    # _boroughs = ["Manhattan", "Bronx", "Brooklyn", "Queens", "StatenIsland"]
    _boroughs = ["Manhattan", "Brooklyn"]
    _delimiter = ";"
    boroughsAvailable = ["1", "3"] #["1", "2", "3", "4", "5"]
    geometryDS = GeometryDS()
    attributesDS = AttributesDS()
    neighborhoodFileName = "./Data/neighs_fromboroughs_nycoords.out"
    
    plutoStorage = PlutoDataStructure(years, neighborhoodFileName, boroughsAvailable, _delimiter, geometryDS, attributesDS)

    threads = []
    for _borough in _boroughs:
        t = Thread(target=loadBorough, args=(_borough, numberOfLotsToLoad, plutoStorage, geometryDS, attributesDS, _delimiter))
        threads.append(t)
    
    for t in threads:
        t.start()
        t.join()

    # for t in threads:

    print("Creating Summaries")
    # plutoStorage.createSummaries()
    # plutoStorage.dump_to_json()

    return plutoStorage

def loadBorough(_borough, numberOfLotsToLoad, plutoStorage, geometryDS, attributesDS, _delimiter):
    print("Start {0}".format(_borough))
    fileName = "./Data/{boro}/{boro}_fullFinalData_withNeighCode.out".format(boro=_borough)
    geometriesFileName = "./Data/{boro}/{boro}_fullFinalData_withNeighCode_geometries_nycoord.out".format(boro=_borough)
    attributesFileName = "./Data/{boro}/{boro}_fullFinalData_withNeighCode_attributes.out".format(boro=_borough)

    print("Loading Summaries from {0}".format(_borough))
    for _year in years:
        print("Working on year: {0}".format(_year))
        boroughNeighSummary = json.load(open("./Data/{boro}/neighborhoodSummary_{year}.cache".format(boro = _borough, 
                                                                                                    year = _year ), 
                                            "r"))
        plutoStorage.insertBoroNeighSummary(_year, _borough, boroughNeighSummary)
        print("year {0} dumped.".format(_year))
    print("End of Loading Summaries from {0}".format(_borough))

    boroughCode = boroughMap.get(_borough.upper())
    boroughCode = int(boroughCode)

    # Load External structure
    print("starting to load geometries")
    geometryDS.load(boroughCode, geometriesFileName)
    print("end of loading geometries")
    print("starting to attributes")
    attributesDS.load(boroughCode, attributesFileName)
    print("end of loading attributes")

    # Select block that will be loaded

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
            if ind == numberOfLotsToLoad:
                break

#####################
###SERVER API########
#####################

@app.route('/')
def main_page():
    try:
        return "Without PAGE to load"
    except Exception as e:
        return str(e)


# finalLayer = {"type":"FeatureCollection", "features":[]}
# finalLayer.get("features").append(finalObject)

@app.route('/yearAvailable', methods=['GET'])
def yearsAvailable():
    result = {"message": "", "data": {}}
    try:
        result['message'] = "OK"
        result['data'] = years
        return json.dumps(result)
    except Exception as e:
        result["message"] = "SERVER ISSUE - {0}".format(str(e))
        return json.dumps(result)

@app.route('/attrAvailable', methods=['GET'])
def attrAvailable():
    result = {"message": "", "data": {}}
    try:
        result['message'] = "OK"
        result['data'] = [''] + uniqueFieldsSet
        return json.dumps(result)
    except Exception as e:
        result["message"] = "SERVER ISSUE - {0}".format(str(e))
        return json.dumps(result)

@app.route('/numericalAttributes', methods=['GET'])
def getNumericalAttributes():
    result = {"message": "", "data": {}}
    try:
        result['message'] = 'OK'
        result['data'] = numericsFields
        return json.dumps(result)
    except Exception as e:
        result['message'] = 'SERVER ISSUE - {0}'.format(str(e))
        return json.dumps(result)

@app.route('/blocksAvailable', methods=['GET'])
def blocksAvailable():
    result = {"message": "", "data": {}}
    try:
        neighCode = request.args.get('neighCode')
        if neighCode is None:
            raise Exception(
                'neighborhood code [neighCode] is mandatory.'
                'Check if you are sending this parameters.')
        if getRightBoroughCode(neighCode[0:2]) is None:
            raise Exception(
                'neighborhood code [neighCode] is wrong.'
                'Check if you are sending the right parameter.')
        data = [''] + engine.getBlocksAvailable(neighCode)
        result["message"] = "OK"
        result["data"] = data
        return json.dumps(result)
    except Exception as e:
        result["message"] = "SERVER ISSUE - {0}".format(str(e))
        return json.dumps(result)

@app.route('/neighLayer', methods=['GET'])
def neighborhoodLayer():
    result = {"message": "", "data": {}}
    try:
        data = engine.getNeighborhoodsShapes()
        result["message"] = "OK"
        result["data"] = data
        return json.dumps(result)
    except Exception as e:
        result["message"] = "SERVER ISSUE - {0}".format(str(e))
        return json.dumps(result)

@app.route('/lotLayer', methods=['GET'])
def lotLayer():
    result = {"message": "", "data": {}}
    try:
        year = request.args.get('year')
        boroughCode = request.args.get('borough')
        neighCode = request.args.get('neighborhood')
        print(neighCode)
        if year is None:
            raise Exception("Year is mandatory!")
        if boroughCode is not None:
            boroughCode = boroughCode.upper()
            if boroughCode in list(boroughMap.keys()):
                boroughCode = boroughMap.get(boroughCode)
        boroughCode = getRightBoroughCode(neighCode[0:2])
        print("Borough: {0}-Neighborhood: {1}".format(boroughCode, neighCode))
        data = engine.getNeighborhoodLotsLayer(boroughCode, neighCode, year)
        result['message'] = "OK"
        result['data'] = data
        print("Data Sent")
        return json.dumps(result)
    except Exception as e:
        result['message'] = "SERVER ISSUE - {0}".format(str(e))
        return json.dumps(result)

@app.route('/getLayerInfo', methods=['GET'])
def getLayerInfo():
    result = {"message": "", "data": {}}
    try:
        year = request.args.get('year')
        boroughCode = request.args.get('boroughCode')
        neighCode = request.args.get('neighCode')
        if neighCode is not None:
            boroughCode = getRightBoroughCode(neighCode[0:2])
        blockCode = request.args.get('blockCode')
        lotCode = request.args.get('lotCode')
        print("Quering data from layer loaded")
        if year is None:
            # raise Exception(
            #     'year are mandatory. '
            #     'Check if you are sending this parameter.')
            data = engine.getFullLayerInfo(boroughCode, neighCode, blockCode)
        else:
            data = engine.getLayerInfo(year, boroughCode, neighCode, blockCode, lotCode)
        result['data'] = data
        result['message'] = "OK"
        return json.dumps(result)
    except Exception as e:
        result['message'] = "SERVER ISSUE - {0}".format(str(e))
        return json.dumps(result)

@app.route('/doLayerFilter', methods=['GET'])
def doLayrFilter():
    result = {"message": "", "data": {}}
    try:
        year = request.args.get('year')
        attributeCode = request.args.get('attrCode')
        minValue = request.args.get('min')
        maxValue = request.args.get('max')
        boroughCode = request.args.get('boroughCode')
        neighCode = request.args.get('neighCode')
        if neighCode is not None:
            boroughCode = getRightBoroughCode(neighCode[0:2])
        blockCode = request.args.get('blockCode')
        print("Quering data from layer loaded")
        if year is None \
            or attributeCode is None \
            or minValue is None \
            or maxValue is None:
            raise Exception(
                'year are mandatory. '
                'Check if you are sending this parameter.')
        
        minValue = float(minValue)
        maxValue = float(maxValue)
        
        data = engine.doLayerFilter(year, attributeCode, minValue, maxValue, boroughCode, neighCode, blockCode)

        result['data'] = data
        result['message'] = "OK"
        return json.dumps(result)
    except Exception as e:
        result['message'] = "SERVER ISSUE - {0}".format(str(e))
        return json.dumps(result)

@app.route('/how_to_use')
def how_to_use():
    return "Explanation"

if __name__ == '__main__':
    args = sys.argv[1:]
    numberOfLotsToLoad = -1
    if len(args) > 0:
        numberOfLotsToLoad = int(args[0])
    engine = loadEngine(numberOfLotsToLoad)
    app.run(host="localhost", port=4201)