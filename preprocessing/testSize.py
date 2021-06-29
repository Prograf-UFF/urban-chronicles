from Model.lotInfo import LotInfo
from Model.lotData import LotData
from Model.blockInfo import BlockInfo
from Model.neighInfo import NeighborhoodInfo
from Model.boroughInfo import BoroughInfo
from Model.cityInfo import CityInfo
from Model.numericalSummary import NumericalSummary
from Model.numericalSummary import NumericalSummaryItem
import sys


lotData = LotData()
print(sys.getsizeof(lotData) + lotData.getSize())

lotInfo = LotInfo(lotData, [])
print(sys.getsizeof(lotInfo) + lotInfo.getSize())

lotInfo = BlockInfo('', [])
print(sys.getsizeof(lotInfo))

lotInfo = NeighborhoodInfo('', '', [], [])
print(sys.getsizeof(lotInfo))

lotInfo = BoroughInfo('',[])
print(sys.getsizeof(lotInfo))

lotInfo = CityInfo('',[])
print(sys.getsizeof(lotInfo))

lotInfo = []
print(sys.getsizeof(lotInfo))

lotInfo = {}
print(sys.getsizeof(lotInfo))