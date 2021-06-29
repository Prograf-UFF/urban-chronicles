import shapefile as sf
from shapely.geometry import Polygon
from pyproj import Proj
import json

class NeighborhoodItem():
  def __init__(self, neighCode, neighName, neighShape):
    self.__code = neighCode
    self.__name = neighName
    self.__shape = neighShape
    self.__neighbors = []
  
  def setNeighbors(self, neighbors):
    self.__neighbors = neighbors
  
  def getNeighCode(self):
    return self.__code
  
  def getNeighName(self):
    return self.__name
  
  def getNeighShape(self):
    return self.__shape

  def getNeighbors(self):
    return self.__neighbors

  def __verifyGeometries(self, lotShapes, neighborhoodShapes):
    results = [self.__findSimilar(lotShape, neighborhoodShapes) for lotShape in lotShapes]
    
    accept = True
    trueCount = 0
    for result in results:
      if result:
        trueCount += 1
      accept = accept and result
    trueRate = (trueCount / len(results))
    accept = accept or trueRate >= 0.5
    return accept

  def __findSimilar(self, lotShape, neighborhoodShapes):
    lotPoly = Polygon(lotShape)
    for neighborhoodShape in neighborhoodShapes:
      neighPoly = Polygon(neighborhoodShape)

      intersectPoly = neighPoly.intersection(lotPoly)

      # prevPorcentage = intersectPoly.area / neighPoly.area
      lotPorcentage = intersectPoly.area / lotPoly.area

      if lotPorcentage > 0.80:
        return True
    return False

  def contains(self, lotShapes):
    '''
    Check if a shape is from its neighborhood, check if a given lot shape is inside any neighborhood shape
    '''
    for lotShape in lotShapes:
      lotPoly = Polygon(lotShape)
      for neighborhoodShape in self.__shape:
        neighPoly = Polygon(neighborhoodShape)
        intersectPoly = lotPoly.intersection(neighPoly)
        intersectionRate = intersectPoly.area / lotPoly.area
        if intersectionRate > 0.7:
          return True
    return False
    # findNeighborhood = self.__verifyGeometries(lotShape, self.__shape)
    # return findNeighborhood

    # neighborhoodPoly = Polygon(self.__shape)
    # # isInner = shapePoly.within(mPoly) and mPoly.contains(shapePoly)
    # intersectionPolygon = shapePoly.intersection(neighborhoodPoly)
    # isInner = (intersectionPolygon.area / shapePoly.area) > 0.5

    # # isInner = shapePoly.within(neighborhoodPoly) or neighborhoodPoly.contains(shapePoly)
    # if isInner:
    #   return True
    # return False      

class NeighborhoodHandler():
  def __init__(self, fileName, delimiter):
    self.__fileName = fileName
    self.__delimiter = delimiter
    self.__neighborhoodData = {}
    self.__loadNeighborhood()

  def getBoroughsAvailable(self):
    return list(self.__neighborhoodData.keys())

  def __loadNeighborhood(self):
    with open(self.__fileName, 'r') as _fp:
      for line in _fp:
        if "BOROUGH;CODE" in line:
          continue
        
        lineSplitted = line.split(self.__delimiter)

        boroughCode = lineSplitted[0]
        neighCode = lineSplitted[1]
        neighName = lineSplitted[2]
        # neighbors = json.loads(lineSplitted[3])
        shape = json.loads(lineSplitted[3])
        
        neighItem = NeighborhoodItem(neighCode, neighName, shape)
        # neighItem.setNeighbors(neighbors)
        boroughData = self.__neighborhoodData.get(boroughCode)

        if boroughData is None:
          boroughData = []
          self.__neighborhoodData[boroughCode] = boroughData
        
        boroughData.append(neighItem)
  
  def findNeighborhood(self, boroCode, lotShapes):
    boroData = self.__neighborhoodData.get(boroCode)
    for item in boroData:
      if item.contains(lotShapes):
        return item.getNeighCode()
    return "UNKNOWN"
  
  def findNeighborhoodSet(self, boroCode, lotShape):
    boroData = self.__neighborhoodData.get(boroCode)
    neighborhoodBelongs = []
    for item in boroData:
      if item.contains(lotShape):
        neighborhoodBelongs.append(item.getNeighCode())
    return neighborhoodBelongs

  def getNeighInfoData (self, boroCode):
    return self.__neighborhoodData.get(boroCode)
    
if __name__ == '__main__':
  # fileName = "./Data/nynta_19b/nynta"
  fileName = "./Data/neighs_fromboroughs.out"
  delimiter = ";"
  # fileName = "/media/claudio/Data/Projects/UFF/LABNY/MapPlutoResources/Neighborhood Tabulation Areas/NYCNeighborhoods"
  # fullFilePath = "/media/claudio/Data/Projects/UFF/LABNY/MapPlutoResources/{borough}/{fileYear}/{fileName}".format(borough=_borough, fileYear=_year, fileName=_fileName)
  nh = NeighborhoodHandler(fileName, delimiter)
  result = nh.getNeighInfoData("1")
  for neigh in result:
    shapes = neigh.getNeighShape()
    for shape in shapes:
      polA = Polygon(shape)