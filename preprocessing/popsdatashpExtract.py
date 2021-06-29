import shapefile as sf

class POPSDataItem():
    def __init__(self, boroCode, POPName, lat, long):
        self.__code = boroCode
        self.__name = POPName
        self.__shape = [long, lat]

    def getBoroughCode(self):
        return self.__code
    
    def getPOPsName(self):
        return self.__name
    
    def getPoint(self):
        return self.__shape

class POPDataShpExtract:
    def __init__(self, fileName, delimiter):
        self.__delimiter = ";"
        self.__fileName = fileName
        self.__delimiter = delimiter
        self.__neighborhoodData = {}
        self.__processPOPsData()
        self.__generateOutputFile()

    def __processPOPsData(self):
        popsReader = sf.Reader(self.__fileName)
        # [['POPS_Numbe', 'C', 254, 0], ['Borough_Na', 'C', 254, 0], ['Borough_Co', 'N', 10, 0], ['Community_', 'N', 10, 0], ['Address_Nu', 'N', 10, 0], ['Street_Nam', 'C', 254, 0], 
        # ['Zip_Code', 'N', 10, 0], ['Building_A', 'C', 254, 0], ['Tax_Block', 'N', 10, 0], ['Tax_Lot', 'N', 10, 0], ['Building_N', 'C', 254, 0], ['Building_L', 'C', 254, 0], 
        # #['Year_Compl', 'C', 254, 0], ['Building_C', 'C', 254, 0], ['Public_S_1', 'C', 254, 0], ['Developer', 'C', 254, 0], ['Building_1', 'C', 254, 0], 
        # ['Principal_', 'C', 254, 0], ['Size_Requi', 'C', 254, 0], ['Hour_Of_Ac', 'C', 254, 0], ['Amenities_', 'C', 254, 0], ['Other_Requ', 'C', 254, 0], ['Permitted_', 'C', 254, 
        # 0], ['Physically', 'C', 254, 0], ['Latitude', 'F', 19, 11], ['Longitude', 'F', 19, 11], ['XCoordinat', 'N', 10, 0], ['YCoordinat', 'N', 10, 0]]
        popsRecords = popsReader.shapeRecords()
        
        for item in popsRecords:
            boroughCode = item.record[2]
            buildingName = item.record[10]
            latitude = item.record[23]
            longitude = item.record[24]
            shape = item.shape.points
            print(boroughCode, buildingName)
            print(shape)
            print(latitude, longitude)

        return True

    def __generateOutputFile(self):
        return True

if __name__ == "__main__":
    fileName = "./Data/nycpops/nycpops"
    delimiter = ";"
    extractor = POPDataShpExtract(fileName, delimiter)