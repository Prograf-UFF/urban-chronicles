class NumericalSummaryItem:
    def __init__(self):
        self.__sum = 0
        self.__min = float("inf")
        self.__max = float("-inf")
        self.__count = 0
        self.__mean = None
        self.__bblList = None
        self.__attrFound = True

    def insertItem(self, _value, lotRef=None, _count=None):
        rejectableValue = _value is None or _value == "unknown"
        if rejectableValue and self.__count == 0:
            self.__attrFound = False
        
        value = 0
        if not(rejectableValue):
            value = float(_value)
            if value <= 0:
                return

            if value < self.__min:
                self.__min = value
            if value > self.__max:
                self.__max = value
            
            if _count is None:
                self.__count += 1
            else:
                self.__count += _count
            
            self.__sum += value

        if lotRef is not None:
            if self.__bblList is None:
                self.__bblList = []
            dataTuple = (value, lotRef)
            self.__bblList.append(dataTuple)

    def wasAttrFound(self):
        return self.__attrFound

    def setWasFound(self, wasFound):
        self.__attrFound = wasFound

    def getMin(self):
        return self.__min

    def getMax(self):
        return self.__max

    def getSum(self):
        return self.__sum

    def getCount(self):
        return self.__count

    def getMean(self):
        if self.__mean is None:
            if self.__bblList is not None:
                self.__sortBBLList()
            self.__mean = self.__sum / self.__count if self.__count > 0 else 0
        return self.__mean

    def getList(self):
        return self.__bblList

    def __sortBBLList(self):
        self.__bblList = sorted(self.__bblList, key=lambda data: data[0])


class NumericalSummary:
    def __init__(self):
        self.__numericalSummary = {}

    def insertItem(self, key, value, lotRef=None, count=None, wasFound=None):
        """
        @param code this is code identifier, if you are in a level, this will be the lower level code.
        :param key:
        :param value:
        :param lotRef:
        :param count:
        """
        numSummItem = self.__numericalSummary.get(key)
        if numSummItem is None:
            numSummItem = NumericalSummaryItem()
            self.__numericalSummary[key] = numSummItem
        numSummItem.insertItem(value, lotRef, count)
        if wasFound is not None:
            numSummItem.setWasFound(wasFound)

    def getSummaryFromKey(self, key):
        result = {}
        summaryItem = self.__numericalSummary.get(key)
        if summaryItem is not None:
            result["min"] = summaryItem.getMin() if summaryItem.getCount() > 0 else 0
            result["max"] = summaryItem.getMax() if summaryItem.getCount() > 0 else 0
            result["sum"] = summaryItem.getSum()
            result["count"] = summaryItem.getCount()
            result["mean"] = summaryItem.getMean()
            result["refs"] = summaryItem.getList()
            result["attrFound"] = summaryItem.wasAttrFound()
        return result

    def endOfCalculation(self):
        for key in self.__numericalSummary:
            item = self.__numericalSummary.get(key)
            item.averadeCalculation()
