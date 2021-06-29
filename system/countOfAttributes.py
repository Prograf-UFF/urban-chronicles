
def main(attrFileName, filePath, attributName):
    attributes = {}
    i = 0
    with open(attrFileName, 'r') as fp:
        for line in fp:
            lineSplit = line.split(";")
            for elem in lineSplit:
                attributes[elem] = i
                i += 1
    index = attributes.get(attributeName)
    elemData = {}
    with open(filePath, 'r') as fp:
        for line in fp:
            if "LANDUSE;BLDGCLASS" in line:
                continue
            lineSplit = line.replace("\n","").split(";")
            lineSplit = lineSplit[2:]
            elem = lineSplit[index]
            aloha = elemData.get(elem)
            if  aloha == None:
                elemData[elem] = 1
            else :
                elemData[elem] += 1
    for elem in elemData:
        value = elemData.get(elem)
        print("{0} {1}".format(elem, value))

if __name__ == '__main__':
    strFileCateg = "./data/Attributes/Manhattan/Manhattan_fullFinalData_withNeighCode_attributes_categ.out"
    attrFileMeta = "./data/Metas/Attributes_categ.meta"
    attributeNames = ["ZONEDIST1","ZONEDIST2","ZONEDIST3", "ZONEDIST4"]
    for attributeName in attributeNames:
        print(attributeName)
        main(attrFileMeta, strFileCateg, attributeName)
        print()