import mapbox_earcut as earcut
import numpy as np
import json
import os

from Model.util import *
globalProjection = get_projection()
deli = ";"

# boroughs = ["Manhattan", "Brooklyn"]
#["Queens", "StatenIsland", "Bronx"]

typeaggregations = ['neigh', 'cd']

landUSeMapper = { "01":"RES",
                    "02":"RES",
                    "03":"RES",
                    "04":"RES-COMM",
                    "05":"COMM-OFF",
                    "06":"IND-MAN",
                    "07":"TRANS-UTIL",
                    "08":"PUB-FACIL-INST",
                    "09":"OPN-SPC-OUT-REC",
                    "10":"PAR-FACIL",
                    "11":"VAC-LAND"}

mapper = { "LANDUSE": landUSeMapper }

def shapeToOpenGLFormat(shape):
        shapeOpenGLFormatted = []
        for elem in shape.tolist():
            shapeOpenGLFormatted.append(elem[0])
            shapeOpenGLFormatted.append(elem[1])
        shape = shapeOpenGLFormatted
        return shape

def generate(shape):
    rings = np.array([len(shape)])
    result = earcut.triangulate_float32(shape, rings)    
    shape = shapeToOpenGLFormat(shape)
    geometry = {"coordinates" : shape, "indices":result.tolist()}
    return geometry

def convertNYToGlobal(points):
        '''
        This function convert points coordinate from NY island to Global coordinate.
        '''
        new_points = []
        for point in points:
            temp_point = globalProjection.transform(point[0], point[1])
            new_points.append(temp_point)
        # for point in points :
        #     converted_point = []
            # point_in_meters = []
            # point_in_meters.append(point[0] * 0.3048)
            # point_in_meters.append(point[1] * 0.3048)
            # self.globalProjection.transform(point, converted_point)
            # new_points.append(converted_point)
        # new_points = [(self.globalProjection.transform(point[0]*0.3048, point[1]*0.3048)) for point in points]
        return new_points

def convertShapeCoordinates():
    file_path_template = "./Data/{boro}/neigh_{boro}_fullFinalData_withNeighCode_geometries.out"
    fileout_path_template = "./Data/{boro}/neigh_{boro}_fullFinalData_withNeighCode_geometries_nycoord.out"
    # boroughs = ["Manhattan", "Bronx", "Brooklyn", "Queens", "StatenIsland"]
    print("Change lot coordinates")
    for borough in boroughs:
        file_path = file_path_template.format(boro=borough)
        fileout_path = fileout_path_template.format(boro=borough)
        with open(file_path, "r") as fp, open(fileout_path, "w") as fpw:
            for line in fp:
                lineList = line.split(deli)
                boroughCode = lineList[0] 
                geoid = lineList[1]
                shapes = json.loads(lineList[2])
                shape = []
                for nShape in shapes:
                    # shape += nShape
                    convertedShape = convertNYToGlobal(nShape)
                    shape.append(convertedShape)
                shape = json.dumps(shape)
                linestr = "{0}{deli}{1}{deli}{2}\n".format(boroughCode, geoid, shape, deli=deli)
                fpw.write(linestr)

def processLotGeometries():
    file_path_template = "./Data/{boro}/neigh_{boro}_fullFinalData_withNeighCode_geometries_nycoord.out"
    fileout_path_template = "./Data/{boro}/neigh_{boro}_fullFinalData_withNeighCode_geometries_nycoord_urbane.out"
    print("Change lot urbane geometries")
    # boroughs = ["Manhattan", "Bronx", "Brooklyn", "Queens", "StatenIsland"]
    for borough in boroughs:
        file_path = file_path_template.format(boro=borough)
        fileout_path = fileout_path_template.format(boro=borough)
        with open(file_path, "r") as fp, open(fileout_path, "w") as fpw:
            for line in fp:
                lineList = line.split(deli)
                boroughCode = lineList[0] 
                geoid = lineList[1]
                shapes = json.loads(lineList[2])
                shape = []
                for nShape in shapes:
                    # shape += nShape
                    nShape = np.asarray(nShape)
                    shapeUrbaneLayer = generate(nShape)
                    shape.append(shapeUrbaneLayer)

                jsonshape = json.dumps(shape)
                
                linestr = "{0}{deli}{1}{deli}{2}\n".format(boroughCode, geoid, jsonshape, deli=deli)
                fpw.write(linestr)

def processNeighborhoodGeometries():
    # BOROUGH;CODE;NEIGHNAME;NEIGHBORS;SHAPE
    for typeaggregation in typeaggregations:
        file_path = "./Data/{type}_fromboroughs_nycoords.out".format(type=typeaggregation)
        fileout_path = "./Data/{type}_fromboroughs_nycoords_urbane.out".format(type=typeaggregation)
        print("Change Neighborhoods urbane Geometries")
        with open(file_path, "r") as fp, open(fileout_path, 'w') as fpw:
            item = 0
            for line in fp:
                if "BOROUGH;" in line:
                    continue
                lineList = line.split(deli)
                shapes = json.loads(lineList[3])
                shape = []
                for nShape in shapes:
                    # shape += nShape
                    nShape = np.asarray(nShape)
                    shapeUrbane = generate(nShape)
                    shape.append(shapeUrbane)
                linestr = "{0}{deli}{1}{deli}{2}{deli}{3}\n".format(lineList[0], lineList[1], lineList[2], json.dumps(shape), deli = deli)
                fpw.write(linestr)

def processNeighborhoodCoordinates():
    # BOROUGH;CODE;NEIGHNAME;NEIGHBORS;SHAPE
    for typeaggregation in typeaggregations: 
        file_path = "./Data/{type}_fromboroughs.out".format(type=typeaggregation)
        fileout_path = "./Data/{type}_fromboroughs_nycoords.out".format(type=typeaggregation)
        print("Change Neighborhoods coordinates")
        with open(file_path, "r") as fp, open(fileout_path, 'w') as fpw:
            item = 0
            for line in fp:
                if "BOROUGH;" in line:
                    continue
                lineList = line.split(deli)
                shapes = json.loads(lineList[3])
                shape = []
                for nShape in shapes:
                    # shape += nShape
                    # nShape = np.asarray(nShape)
                    convertedShape = convertNYToGlobal(nShape)
                    # shapeUrbane = generate(nShape)
                    shape.append(convertedShape)
                linestr = "{0}{deli}{1}{deli}{2}{deli}{3}\n".format(lineList[0], lineList[1], lineList[2], json.dumps(shape), deli = deli)
                fpw.write(linestr)

def attributesHandler(borough, file_path_template, _type):
    if _type == "high":
        return attributesHighHandler(borough, file_path_template, _type)
    elif _type == "low":
        return attributesLowHandler(borough, file_path_template, _type)
    elif _type == "categ":
        return attributesCategMapperHandler(borough, file_path_template, _type)

def attributesHighHandler(borough, file_path_template, _type):
    fileout_path_template = file_path_template.replace("_attributes", "_attributes_modifications")#"./Data/{boro}/neigh_{boro}_fullFinalData_withNeighCode_attributes_modifications.out"
    strOutTemplate = "{0}{_deli}{1}{_deli}{2}\n"
    print("Attributes Mapper Handler")
    file_path = file_path_template.format(boro=borough, type=_type)
    print(file_path)
    fileout_path = fileout_path_template.format(boro=borough, type=_type)
    print(fileout_path)
    with open(file_path, "r") as fp, open(fileout_path, "w") as fpw:
        for line in fp:
            if len(line.strip()) == 0:
                continue
            lineSplitted = line.strip().split(deli)
            if len(lineSplitted) == 1:
                print(line)
            boroughCode = lineSplitted[0]
            id = lineSplitted[1]
            attributes = json.loads(lineSplitted[2])
            outLine = strOutTemplate.format(boroughCode, id, json.dumps(attributes), _deli=deli)
            fpw.write(outLine)

def attributesLowHandler(borough, file_path_template, _type):
    fileout_path_template = file_path_template.replace("_attributes", "_attributes_modifications")#"./Data/{boro}/neigh_{boro}_fullFinalData_withNeighCode_attributes_modifications.out"
    strOutTemplate = "{0}{_deli}{1}{_deli}{2}\n"
    print("Attributes Mapper Handler")
    file_path = file_path_template.format(boro=borough, type=_type)
    print(file_path)
    fileout_path = fileout_path_template.format(boro=borough, type=_type)
    print(fileout_path)
    with open(file_path, "r") as fp, open(fileout_path, "w") as fpw:
        for line in fp:
            lineSplitted = line.split(deli)
            boroughCode = lineSplitted[0]
            id = lineSplitted[1]
            attributes = json.loads(lineSplitted[2])
            builtFAR = attributes.get("BUILTFAR")
            lotarea = attributes.get("LOTAREA")
            lotarea = float(lotarea)
            keysec = "BUILTFARXLOTAREA"
            builtFARValue = builtFAR
            if builtFAR != "unknown" and str(builtFAR).lower() != "empty":
                builtFAR = float(builtFAR)
                builtFARValue = builtFAR * lotarea
            attributes[keysec] = str(builtFARValue)
            for currFar in FARs:
                key = "({0}-BUILT)FAR".format(currFar.replace("FAR", ""))
                result = -1
                far = attributes.get(currFar)
                wrongBuiltFar = (builtFAR == "unknown" or str(builtFAR).lower() == "empty")
                wrongFar = (far == "unknown" or far == "Empty")
                if wrongBuiltFar or wrongFar:
                    result = str(builtFAR) if wrongBuiltFar else far
                    attributes[key] = result
                    keysec = "{0}XLOTAREA".format(currFar)
                    attributes[keysec] = result
                    keysec = "{0}XLOTAREA".format(key)
                    attributes[keysec] = result
                    continue
                far = float(far)
                builtFAR = float(builtFAR)                
                farxlotarea = far * lotarea
                keysec = "{0}XLOTAREA".format(currFar)
                attributes[keysec] = str(farxlotarea)
                fardiff = far - builtFAR
                attributes[key] = str(fardiff)
                fardiffxlotarea = fardiff * lotarea
                keysec = "{0}XLOTAREA".format(key)
                attributes[keysec] = str(fardiffxlotarea)
            outLine = strOutTemplate.format(boroughCode, id, json.dumps(attributes), _deli=deli)
            fpw.write(outLine)

def attributesCategMapperHandler(borough, file_path_template, _type):
    # file_path_template = "./Data/{boro}/neigh_{boro}_fullFinalData_withNeighCode_attributes.out"
    fileout_path_template = file_path_template.replace("_attributes", "_attributes_modifications")#"./Data/{boro}/neigh_{boro}_fullFinalData_withNeighCode_attributes_modifications.out"
    strOutTemplate = "{0}{_deli}{1}{_deli}{2}\n"
    print("Attributes Mapper Handler")
    dict_meta_data = {}

    #fill office_res metadata
    office_res_attr = "OFFICE_RES"
    acceptable_office_res = ['O1','O2','O3','O4','O5','O6','O7','O8','O9','RD']
    dict_meta_data[office_res_attr] = acceptable_office_res

    file_path = file_path_template.format(boro=borough, type=_type)
    print(file_path)
    fileout_path = fileout_path_template.format(boro=borough, type=_type)
    print(fileout_path)
    with open(file_path, "r") as fp, open(fileout_path, "w") as fpw:
        for line in fp:
            lineSplitted = line.split(deli)
            boroughCode = lineSplitted[0]
            id = lineSplitted[1]
            attributes = json.loads(lineSplitted[2])
            for attributeName in getCategorical():                    
                attrMetaData = dict_meta_data.get(attributeName)
                if attrMetaData is None:
                    attrMetaData = []
                    dict_meta_data[attributeName] = attrMetaData
                if attributeName in mapper:
                    attrMapper = mapper.get(attributeName)
                    attrOldValue = attributes.get(attributeName)
                    attrNewValue = attrOldValue
                    if attrOldValue in attrMapper:
                        attrNewValue = attrMapper.get(attrOldValue)
                    attributes[attributeName] = attrNewValue
                attrValue = attributes[attributeName]
                if len(attrValue) == 0:
                    attrValue = "empty"
                    attributes[attributeName] = attrValue
                if attrValue != "unknown":
                    attrMetaData.append(attrValue)
            #creating OFFICE_RES attribute
            bldgClassValue = attributes["BLDGCLASS"]
            office_res_attr_val = bldgClassValue
            if len(office_res_attr_val) == 0 or (office_res_attr_val != 'unknown' and (not office_res_attr_val in acceptable_office_res)):
                office_res_attr_val = "empty"
            attributes[office_res_attr] = office_res_attr_val
            #office_res added
            outLine = strOutTemplate.format(boroughCode, id, json.dumps(attributes), _deli=deli)
            fpw.write(outLine)
    write_categorical_meta(dict_meta_data)

def write_categorical_meta(dict_meta_data):
    fileout_path_attribute_template = "./Data/Metas/{attr}.meta"
    for attributeName in dict_meta_data:
        attrFilePath = fileout_path_attribute_template.format(attr=attributeName)
        categories = []
        if os.path.exists(attrFilePath):
            with open(attrFilePath, 'r') as fpout:
                line = fpout.readline()
                categories = line.split(deli)
        with open(attrFilePath, 'w') as fpout:
            categoriesTemp = dict_meta_data.get(attributeName)
            if len(categories) == 0:
                categories = categoriesTemp
            else:
                categories += categoriesTemp
            categories = list(set(categories))
            categories = sorted(categories)
            data = deli.join(categories)
            elemLine = "{0}".format(data)
            fpout.write(elemLine)

def exportAttributesAsList(borough, file_path_template, _type):
    # file_path_template = "./Data/{boro}/neigh_{boro}_fullFinalData_withNeighCode_attributes_modifications_{type}.out"
    fileout_path_template = "./Data/{boro}/neigh_{boro}_fullFinalData_withNeighCode_attributes_{type}_list.out"
    strOutTemplate = "{0}{_deli}{1}{_deli}{2}"
    lineTemplate = "{0}\n"
    print("converting attributes as list")
    file_header = True
    file_path = file_path_template.format(boro=borough, type=_type)
    fileout_path = fileout_path_template.format(boro=borough, type=_type)
    with open(file_path, "r") as fp, open(fileout_path, "w") as fpw:
        headers = []
        for line in fp:
            if len(line) == 1:
                continue
            lineSplitted = line.split(deli)
            boroughCode = lineSplitted[0]
            id = lineSplitted[1]
            attributes = json.loads(lineSplitted[2])
            if file_header:
                headers = [attrName for attrName in attributes]
                line_str = lineTemplate.format( deli.join( headers ) )
                # fpw.write(line)
                
                fileout_path_attribute = "{meta}/Attributes_{type}.meta".format(type=_type, meta=metaFolder)
                with open(fileout_path_attribute, 'w') as fpout:
                    fpout.write(line_str)
                fpw.write(line_str)
                file_header = False
            sd = [attributes.get(attrName) for attrName in headers]
            # sd = list(attributes.values())
            values = ""
            try:
                values = deli.join(sd)
            except:
                print(attributes)
                exit()
            line_str = lineTemplate.format(strOutTemplate.format(boroughCode, id, values, _deli=deli))
            fpw.write(line_str)

def exportCommunityDistrictMeta():
    communityDistrictMeta = cdNames()
    communityDistrictMeta = communityDistrictMeta.replace("\t", "").replace(r"\s", "")
    with open('./Data/Metas/cdNames.meta','w') as fp:
        fp.write(communityDistrictMeta)

if __name__ == '__main__':
    metaFolder = "./Data/Metas"
    if not os.path.exists(metaFolder):
        os.makedirs(metaFolder)
    types = ['high','low','categ']
    file_path_template = "./Data/{boro}/neigh_{boro}_fullFinalData_withNeighCode_attributes_{type}.out"
    file_path_template_mod = "./Data/{boro}/neigh_{boro}_fullFinalData_withNeighCode_attributes_modifications_{type}.out"
    for borough in boroughs:
        for _type in types:    
            attributesHandler(borough, file_path_template, _type)
            exportAttributesAsList(borough, file_path_template_mod, _type)
    
    exportCommunityDistrictMeta()    
    convertShapeCoordinates()
    processLotGeometries()
    processNeighborhoodCoordinates()
    processNeighborhoodGeometries()
