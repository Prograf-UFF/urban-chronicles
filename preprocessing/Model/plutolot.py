import json

class PlutoLot():
    @staticmethod
    def loadPlutoLot(lotInformations):
        boroughBlock = lotInformations[0]
        lotCode = lotInformations[1]
        lotShape = json.loads(lotInformations[2])
        yearsAlive = json.loads(lotInformations[3])
        parent = json.loads(lotInformations[4])
        children = json.loads(lotInformations[5])
        action = json.loads(lotInformations[6])
        lotDetails = json.loads(lotInformations[7])

        plutoLot = PlutoLot(boroughBlock, lotCode, lotShape)

        for year in yearsAlive:
            plutoLot.insertYearAlive(year)

        for year in lotDetails:
            lotDetail = lotDetails.get(year)
            plutoLot.insertDetails(year, lotDetail)

        PlutoLot.__loadData(parent, plutoLot.insertParent)
        PlutoLot.__loadData(children, plutoLot.insertChildren)
        PlutoLot.__loadData(action, plutoLot.insertAction)

        return plutoLot

    @staticmethod
    def __loadData(_data, function):
        for parentKey in _data:
            parentLists = _data.get(parentKey)
            for pLotCode in parentLists:
                function(parentKey, pLotCode)

    def __init__(self, _bBlock, _lotCode, _shape):
        self.boroughBlock = _bBlock
        self.lotCode = _lotCode
        self.lotShape = _shape
        self.yearsAlive = []
        self.parent = {}
        self.children = {}
        self.action = {}
        lotCodeBroken = (self.lotCode.split("->"))
        self.realLotCode = lotCodeBroken[0]
        self.fakeCode = lotCodeBroken[1]
        self.debugData = None
        self.lotDetails = {}
    
    def setDebugData(self, _debugData):
        self.debugData = _debugData
    
    def getDebugData(self):
        return self.debugData

    def toString(self, delimiter):
        listAttributes = []
        listAttributes.append(self.boroughBlock)
        listAttributes.append(self.lotCode)
        listAttributes.append(json.dumps(self.lotShape))
        listAttributes.append(json.dumps(self.yearsAlive))
        listAttributes.append(json.dumps(self.parent))
        listAttributes.append(json.dumps(self.children))
        listAttributes.append(json.dumps(self.action))
        listAttributes.append(json.dumps(self.lotDetails))
        return delimiter.join(listAttributes) + "\n"

    def insertDetails(self, year, _details):
        for key in _details:
            _details[key] = str(_details.get(key)).replace(";"," ")
        self.lotDetails[year] = _details

    def getLotDetailsFromYear(self, year):
        return self.lotDetails.get(year)

    def insertParent(self, _key, _parentLotCode):
        self.__insertGenealogicalTree(self.parent, _key, _parentLotCode, True)
    
    def insertChildren(self, _key, _childreLotCode):
        self.__insertGenealogicalTree(self.children, _key, _childreLotCode, True)
    
    def insertAction(self, _key, _action):
        self.__insertGenealogicalTree(self.action, _key, _action, checkDuplicates=True)
    
    def removeAction(self, _key, _action):
        if len(self.action.get(_key)) > 1 and _action in self.action.get(_key):
            self.action.get(_key).remove(_action)

    def __insertGenealogicalTree(self, _dataDict, _key, _data, checkDuplicates = False ):
        parentsList = _dataDict.get(_key)
        if parentsList is None:
            parentsList = []
        if checkDuplicates:
            if not(_data in parentsList):
                parentsList.append(_data)
                _dataDict[_key] = parentsList
        else:
            parentsList.append(_data)
            _dataDict[_key] = parentsList
    
    def getLotDetails(self):
        return self.lotDetails

    def getBoroughBlock(self):
        return self.boroughBlock

    def getLotCode(self):
        return self.lotCode
    
    def getYearsAlive(self):
        return self.yearsAlive
    
    def getFakeCode(self):
        return (self.lotCode.split("->"))[1]

    def getRealLotCode(self):
        return (self.lotCode.split("->"))[0]

    def getLotShape(self):
        return self.lotShape
    
    def hasAction(self, _key):
        return self.action.get(_key) is not None 
    
    def getActionYears(self):
        '''
        Return only dictionary keys. in this case years
        '''
        return self.action.keys()
    
    def getParentYears(self):
        return self.parent.keys()
    
    def getChildrenYears(self):
        return self.children.keys()
    
    def getAction(self, key):
        return self.action.get(key)
    
    def getChildren(self, key):
        return self.children.get(key)
    
    def getParent(self, key):
        return self.parent.get(key)
    
    def insertYearAlive(self, _year):
        self.yearsAlive.append(_year)
        
    def merge(self, other):
        # Merge Years
        self.yearsAlive += other.getYearsAlive()
        # Merge Parents
        otherParentsKey = other.getParentYears()
        for key in otherParentsKey:
            parentLotsCode = other.getParent(key)
            for parLC in parentLotsCode:
                self.insertParent(key, parLC)
        # Merge children
        otherChildrenKey = other.getChildrenYears()
        for key in otherChildrenKey:
            childrenLotsCode = other.getChildren(key)
            for childLC in childrenLotsCode:
                self.insertChildren(key, childLC)
        # Merge Action
        otherActionKey = other.getActionYears()
        for key in otherActionKey:
            actionLotsCode = other.getAction(key)
            for action in actionLotsCode:
                self.insertAction(key, action)

        lotDetails = other.getLotDetails()
        for year in lotDetails:
            lotDetail = lotDetails.get(year)
            self.insertDetails(year, lotDetail)
        

    
                