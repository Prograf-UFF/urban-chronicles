class CategoricalSummary:
    SUM = 1
    APPEND = 2

    def __init__(self, initClass):
        '''
        this method initialize Categorical Summary object
        @param initClass initialization Class for "Folha"
        '''
        self.__initializationType = initClass if initClass != "int" else int
        self.__abstractSummary = {}

    def insertItem(self, key, subKey, value, insertType):
        # Getting key Data
        keyData = self.__abstractSummary.get(key)
        if keyData is None:
            keyData = {}
            self.__abstractSummary[key] = keyData

        # Getting subkey Data an then do some operations due to insertType
        subkeyData = keyData.get(subKey)
        if subkeyData is None:
            subkeyData = self.__initializationType()

        # Do some operation
        if insertType == CategoricalSummary.SUM:
            subkeyData += value
        elif insertType == CategoricalSummary.APPEND:
            subkeyData.append(value)

        # update Key Data with subkey Data
        keyData[subKey] = subkeyData

    def getSummaryFromKey(self, key):
        """
        Get summary from a given key, in this case year will be the key.
        """
        result_aux = self.__abstractSummary.get(key)
        subKeyFreq = 0
        subKeyName = ""
        for subKey in result_aux:
            val = result_aux.get(subKey)
            val_aux = 0
            if type(self.__initializationType) is list:
                val_aux = len(val)
            if val_aux > subKeyFreq:
                subKeyFreq = val_aux
                subKeyName = subKey
                
        result = {subKeyName: subKeyFreq}
        return result

    def getFullSummaryData(self):
        return self.__abstractSummary
