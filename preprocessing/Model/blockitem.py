import json


class BlockItem:
    def __init__(self, _blockCode):
        self.__nodes = []
        self.__edges = []
        self.__blockCode = _blockCode
        self.__countOfNodes = 0

    @staticmethod
    def LoadBlockItem(data, delimiter):
        header = "BBLOCKCODE{deli}NODES".format(deli=delimiter)
        if header in data:
            return None

        lineSplitted = data.split(delimiter)

        if len(lineSplitted) != 3:
            return None

        item = BlockItem(lineSplitted[0])

        item.setNodes(json.loads(lineSplitted[1]))
        item.setEdges(json.loads(lineSplitted[2]))

        return item

    def getBlockCode(self):
        return self.__blockCode

    def getNodes(self):
        return self.__nodes

    def setNodes(self, _nodes):
        self.__nodes = _nodes

    def getEdges(self):
        return self.__edges

    def setEdges(self, _edges):
        self.__edges = _edges

    def insertNode(self, nodeItem):
        self.__countOfNodes += 1
        objData = {"id": self.__countOfNodes, "label": nodeItem}
        self.__nodes.append(objData)

    def insertEdge(self, itemFrom, itemTo):
        idFrom = self.__getItemIndex(itemFrom)
        idTo = self.__getItemIndex(itemTo)
        objData = {"from": idFrom, "to": idTo}
        self.__edges.append(objData)

    def __getItemIndex(self, itemLabel):
        for item in self.__nodes:
            if item['label'] == itemLabel:
                return item['id']
        return -1

    def writeHeader(self, _fp, delimiter):
        _fp.write("BBLOCKCODE")
        _fp.write(delimiter)
        _fp.write("NODES")
        _fp.write(delimiter)
        _fp.write("EDGES")
        _fp.write('\n')

    def write(self, _fp, delimiter):
        _fp.write( self.__blockCode )
        _fp.write(delimiter)
        _fp.write(json.dumps(self.__nodes))
        _fp.write(delimiter)
        _fp.write(json.dumps(self.__edges))
        _fp.write('\n')
