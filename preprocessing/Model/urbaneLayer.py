import mapbox_earcut as earcut
import numpy as np
import json

class UrbaneLayer():
    def __init__(self, shape, lotCode, color = None):
        self.shape = np.asarray(shape)
        self.properties = { "scalar" : color,
                            "name" : lotCode,
                            "depth" : 0.4 }
        self.__generate()

    def __generate(self):
        rings = np.array([len(self.shape)])
        result = earcut.triangulate_float32(self.shape, rings)    
        self.__shapeToOpenGLFormat()
        self.geometry = {"coordinates" : self.shape, "indices":result.tolist()}
    
    def __shapeToOpenGLFormat(self):
        shapeOpenGLFormatted = []
        for elem in self.shape.tolist():
            shapeOpenGLFormatted.append(elem[1])
            shapeOpenGLFormatted.append(elem[0])
        self.shape = shapeOpenGLFormatted

    def setColor(self, color):
        self.properties["scalar"] = color

    def getProperties(self):
        return self.properties
    
    def getGeometry(self):
        return self.geometry

    def getUrbaneLayerObject(self):
        finalObject = {
                "type" : "TriangleMesh",
                "geometry" : self.getGeometry(),
                "properties" : self.getProperties()
                }
                
        return finalObject 

if __name__ == "__main__":
    pass
    # fileNameIn = "./ShapeOutput/Manhattan_2002_lotTransaction.out"
    # fileNameOut = "./ShapeOutput/Manhattan_2002_UrbaneLayer.out"
    # delimiter = ";"
    # finalLayer = {"type":"FeatureCollection", "features":[]}
    # with open(fileNameIn, "r") as fp, open(fileNameOut, "w") as fp_out:
    #     for line in fp:
    #         lineBreaked = line.split(delimiter)
    #         lotInfo = PlutoLot.loadPlutoLot(lineBreaked)

    #         lotCode = lotInfo.getLotCode()
    #         lotShape = lotInfo.getLotShape()

    #         uData = UrbaneLayer(lotShape, lotCode, 0.8771)

    #         finalObject = {
    #             "type" : "TriangleMesh",
    #             "geometry" : uData.getGeometry(),
    #             "properties" : uData.getProperties()
    #         }
            
    #         finalLayer.get("features").append(finalObject)

    #     line = json.dumps(finalLayer)
            
    #     fp_out.write(line)
    #     fp_out.write("\n")
    
    # # A Nx2 array of vertices. Must be 2D.
    # verts = np.array([[0, 0], [1, 0], [1, 1]]).reshape(-1, 2)

    # # An array of end-indices for each ring.
    # # The first ring is the outer contour of the polygon.
    # # Subsequent ones are holes.
    # # This implies that the last index must always be equal to the size of verts!
    # rings = np.array([3])

    # result = earcut.triangulate_float32(verts, rings)

    # # Result is an np.ndarray with dtype np.uint32 and shape (3,)
    # # containing indices into the verts array.

    # print(result)
    # # [[1 0]
    # # [1 1]
    # # [0 0]]