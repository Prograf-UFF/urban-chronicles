from matplotlib import pyplot as plt
import geopandas as gpd
from shapely.geometry import Polygon

poly1 = gpd.GeoSeries(Polygon([(0,0), (2,0), (2,2), (0,2)]))
poly2 = gpd.GeoSeries(Polygon([(3,3), (5,3), (5,0), (3,0)]))

poly3 = gpd.GeoSeries(Polygon([(1,1), (3,1), (3,3), (1,3)]))
poly4 = gpd.GeoSeries(Polygon([(3,3), (5,3), (5,5), (3,5)]))

points = [(0,0), (2,0), (2,2), (0,2), (3,3), (5,3), (5,0), (3,0)]
points = [(1,1), (3,1), (3,3), (1,3)] + [(3,3), (5,3), (5,5), (3,5)]

import sys
from descartes import PolygonPatch
import alphashape

# fig, ax = plt.subplots()
# ax.scatter(*zip(*points))
# plt.show()

alpha_shape = alphashape.alphashape(points)
fig, ax = plt.subplots()
ax.scatter(*zip(*points))
ax.add_patch(PolygonPatch(alpha_shape, alpha=0.2))
plt.show()

# ch = polyaux.convex_hull
polydsad = gpd.GeoSeries(Polygon(alpha_shape))
polydsad.plot(color = 'lightgreen')
plt.show()

# print(polyaux.is_valid)
# if not(polyaux.is_valid):
#     # print(polyaux.buffer(0))
#     # print(Polygon(polyaux.buffer(0)))
#     # polydsad = gpd.GeoSeries(Polygon(polyaux.buffer(0)))
#     # polydsad.plot(color = 'lightgreen')
#     # plt.show()

#     ch = Polygon(list(polyaux.exterior.coords))
#     # ch = ch.convex_hull
#     polydsad = gpd.GeoSeries(ch)
#     polydsad.plot(color = 'lightgreen')
    # plt.show()

# df1 = gpd.GeoDataFrame({'geometry': polys1, 'df1':[1,2]})
# df2 = gpd.GeoDataFrame({'geometry': polys2, 'df2':[1,2]})

# res_union = gpd.overlay(df1, df2, how='union')
# res_union.plot()

from shapely.ops import cascaded_union, unary_union
polygons = [poly1[0], poly2[0], poly3[0], poly4[0]]
# # boundary = cascaded_union(polygons)
# # print(boundary)

poly1.plot(color = 'blue')
plt.show()

poly2.plot(color = 'yellow')
plt.show()

poly3.plot(color = 'green')
plt.show()

poly4.plot(color = 'orange')
plt.show()


# from shapely.geometry.polygon import orient

# orient(poly1[0], -1)

# union_1_2 = gpd.GeoSeries( cascaded_union( [orient(poly1[0], -1), orient(poly2[0], 1)] ).convex_hull )
# union_1_2.plot(color="brown")
# plt.show()

boundary = gpd.GeoSeries( cascaded_union(polygons) )
boundary.plot(color = 'red')
plt.show()