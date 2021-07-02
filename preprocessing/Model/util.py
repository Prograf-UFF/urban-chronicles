from pyproj import CRS
# from pyproj import Proj
from pyproj.transformer import Transformer

years = ["2002", "2003"]
#years = ['2002','2003','2004','2005','2006','2007', '2009', '2009.2', '2010', '2010.2', '2011', '2011.2', '2012', '2012.2', '2013', '2013.2', '2014', '2014.2', '2015', '2016', '2016.2', '2017']
# years = ['2002','2003','2004','2005','2006','2007','2009', '2009.2', '2010', '2010.2', '2011', '2011.2', '2012',
# '2012.2', '2013', '2013.2', '2014', '2014.2', '2015', '2016', '2016.2', '2017']
# ['2012','2013','2014','2015'] #['2005','2006','2007']

# years = ['2015', '2016', '2016.2', '2017']
# years = ['2012','2013','2014','2015']
# "APPBBL", "APPDATE", 
# importantFields = ["BLDGAREA", "RESAREA", "COMAREA", "RETAILAREA", "GARAGEAREA", "FACTRYAREA",
#                     "OTHERAREA", "RESIDFAR", "COMMFAR", "FACILFAR", "ASSESSLAND", "ASSESSTOT", "UNITSRES",
#                     "UNITSTOTAL", "NUMBLDGS", "NUMFLOORS", "YEARBUILT", "YEARALTER1", "LANDUSE", "LOT", "LOTAREA",
#                     "BLDGCLASS", "BOROCODE", "BLOCK", "HISTDIST", "ZONEDIST1", "SPDIST1", "OVERLAY1", "LANDMARK",
#                     "BOROUGH"]

boroughs = ["Brooklyn", "Manhattan"]
# boroughs = ["Manhattan", "Bronx", "Brooklyn", "Queens", "StatenIsland"]
def getBoroughCode(borough):
    b = ["Manhattan", "Bronx", "Brooklyn", "Queens", "StatenIsland"]
    return b.index(borough) + 1
# boroughs = ["StatenIsland", "Bronx", "Queens"]
# boroughs = ["Queens" ]#, "Bronx", "Queens"]

BBLATTRIBUTES = ["BOROCODE", "BOROUGH", "BLOCK", "LOT"]

# importantFields = ["BLDGAREA", "RESAREA", "COMAREA", "RETAILAREA", "GARAGEAREA", "FACTRYAREA", "OTHERAREA", "RESIDFAR", "COMMFAR", "FACILFAR","NUMFLOORS", "ASSESSLAND", "ASSESSTOT", "LOTAREA", "LANDUSE", "BLDGCLASS", "BUILTFAR", "ZONEDIST1", "ZONEDIST2", "ZONEDIST3", "ZONEDIST4", "OVERLAY1", "OVERLAY2", "SPDIST1", "SPDIST2", "SPDIST3", "LTDHEIGHT", "SPLITZONE", "EXEMPTTOT", "POPCREATED"]
# extract_fields = ["BLDGAREA", "RESAREA", "COMAREA", "RETAILAREA", "GARAGEAREA", "FACTRYAREA", "OTHERAREA", "RESIDFAR", "COMMFAR", "FACILFAR","NUMFLOORS", "ASSESSLAND", "ASSESSTOT", "LOTAREA"]

numericalHigh = ["FACTRYAREA", "RETAILAREA", "GARAGEAREA", "ASSESSTOT", "BLDGAREA", "ASSESSLAND", "EXEMPTTOT"]
def getNumericalHigh():
    return numericalHigh

numericalLow = ["RESAREA", "OFFICEAREA", "COMAREA", "OTHERAREA", "RESIDFAR", "COMMFAR", "FACILFAR","NUMFLOORS", "NUMBLDGS", "LOTAREA", "BUILTFAR"]
def getNumericalLow():
    return numericalLow

categorical = ["LANDUSE", "BLDGCLASS", "ZONEDIST1", "ZONEDIST2", "ZONEDIST3", "ZONEDIST4", "OVERLAY1", "OVERLAY2", "SPDIST1", "SPDIST2", "SPDIST3", "LTDHEIGHT", "SPLITZONE"]
def getCategorical():
    return categorical + ["POPS"]

FARs = ["RESIDFAR", "COMMFAR", "FACILFAR"]

# print("Old Important Fields", len(importantFields))
# oldImpo = set(importantFields)
# print("Remaining", oldImpo - set(numericalHigh) - set(numericalLow) - set(categorical))
extractFields = numericalHigh + numericalLow + categorical
importantFields = extractFields 

def getExtractFields():
    return extractFields

def getImportantFields():
    print("def getImportantFields(): Called")
    return importantFields

# def getUniqueFields():
#     return uniqueFieldsSet


def cdNames():
    return '''
        1;1;Battery Park City
        1;2;Greenwich Village & Soho
        1;3;Chinatown & Lower East Side
        1;4;Chelsea, Clinton
        1;5;Midtown Business District
        1;6;Murray Hill, Gramercy & Stuyvesant Town
        1;7;Upper West Side & West Side
        1;8;Upper East Side
        1;9;Hamilton Hts, Manhattanville & West Harlem
        1;10;Central Harlem
        1;11;East Harlem
        1;12;Washington Heights, Inwood & Marble Hill
        2;1;Melrose
        2;2;Hunts Point, Longwood 
        2;3;East Tremont
        2;4;Concourse, Highbridge & Mount Eden
        2;5;Morris Heights, Fordham South & Mount Hope
        2;6;Belmont, Crotona Park East
        2;7;Bedford Park, Fordham North & Norwood
        2;8;Riverdale, Fieldston & Kingsbridge
        2;9;Castle Hill, Clason Point & Parkchester
        2;10;Co-op City, Pelham Bay & Schuylerville
        2;11;Pelham Parkway, Morris Park & Laconia
        2;12;Wakefield, Williamsbridge & Woodlawn
        3;1;Greenpoint & Williamsburg
        3;2;Brooklyn Heights & Fort Greene
        3;3;Bedford-Stuyvesant
        3;4;Bushwick
        3;5;East New York & Starrett City
        3;6;Park Slope, Carroll Gardens & Red Hook
        3;7;Sunset Park & Windsor Terrace
        3;8;Crown Heights North & Prospect Heights
        3;9;Crown Heights So., Prospect Lefferts & Wingate
        3;10;Bay Ridge & Dyker Heights
        3;11;Bensonhurst & Bath Beach
        3;12;Borough Park, Kensington & Ocean Parkway
        3;13;Brighton Beach & Coney Island
        3;14;Flatbush & Midwood
        3;15;Sheepshead Bay, Gerritsen Beach & Homecrest
        3;16;Brownsville & Ocean Hill
        3;17;East Flatbush, Farragut & Rugby
        3;18;Canarsie & Flatlands
        4;1;Astoria & Long Island City
        4;2;Sunnyside & Woodside
        4;3;Jackson Heights & North Corona
        4;4;Elmhurst & South Corona
        4;5;Ridgewood, Glendale & Middle Village
        4;6;Forest Hills & Rego Park
        4;7;Flushing, Murray Hill & Whitestone
        4;8;Briarwood, Fresh Meadows & Hillcrest
        4;9;Richmond Hill & Woodhaven
        4;10;Howard Beach & Ozone Park
        4;11;Bayside, Douglaston & Little Neck
        4;12;Jamaica, Hollis & St. Albans
        4;13;Queens Village, Cambria Heights & Rosedale
        4;14;Far Rockaway, Breezy Point & Broad Channel
        5;1;Port Richmond, Stapleton & Mariner's Harbor
        5;2;New Springville & South Beach
        5;3;Tottenville, Great Kills & Annadale
        '''

# categoricalFields = ["LANDUSE", "BLDGCLASS", "HISTDIST", "ZONEDIST1", "SPDIST1", "LANDMARK", "OVERLAY1"]

# numericsFields = ["YEARALTER1", "BLDGAREA", "RESAREA", "COMAREA", "RETAILAREA", "GARAGEAREA", "FACTRYAREA", "OTHERAREA",
#                     "RESIDFAR", "COMMFAR", "FACILFAR", "ASSESSLAND", "ASSESSTOT", "LOTAREA", "YEARBUILT", "UNITSRES",
#                     "UNITSTOTAL", "NUMBLDGS", "NUMFLOORS"]

numericsFields = ["BLDGAREA", "RESAREA", "COMAREA", "RETAILAREA", "GARAGEAREA", "FACTRYAREA",
                    "OTHERAREA", "RESIDFAR", "COMMFAR", "FACILFAR","NUMFLOORS", "ASSESSLAND", "ASSESSTOT",
                    "LOTAREA", "LOTSALIVE"]

categoricalFields = ["LANDUSE", "BLDGCLASS", "ZONEDIST1", "ZONEDIST2", "ZONEDIST3", "ZONEDIST4", "OVERLAY1", "OVERLAY2",
                    "SPDIST1", "SPDIST2", "SPDIST3", "SPLITZONE", "LTDHEIGHT", "POPCREATED"]


# cSet = set(categoricalFields)
# nSet = set(numericsFields)
# iSet = set(importantFields) - {"BOROUGH", "BLOCK", "LOT", "BOROCODE"}
# uniqueFieldsSet = sorted(iSet)



def insertAttribute(newAttr, uniqueFieldsSet):
    uniqueFieldsSet.append(newAttr)
    return sorted(list(set(uniqueFieldsSet)))


def isNumericAttribute(attr):
    return attr in numericsFields


def applyOperatorFilter(lotAttrData, op, value):
    result = None
    if op == "EQ":
        result = lotAttrData == value
    elif op == "NEQ":
        result = lotAttrData != value
    elif isNumericAttribute(lotAttrData):
        value = float(value)
        if op == "LT":
            result = lotAttrData < value
        elif op == "LTE":
            result = lotAttrData <= value
        elif op == "GT":
            result = lotAttrData > value
        elif op == "GTE":
            result = lotAttrData >= value
    return result


def getPreviousYear(year, years):
    yearIndex = years.index(year)
    if yearIndex - 1 < 0:
        return None
    return years[yearIndex - 1]


def getNextYear(year, years):
    yearIndex = years.index(year)
    if yearIndex + 1 >= len(years):
        return None
    return years[yearIndex + 1]

def get_borough_index(_borough):
    _boroughs = ["Manhattan", "Bronx", "Brooklyn", "Queens", "StatenIsland"]
    if _borough in _boroughs:
        return _boroughs.index(_borough)
    return -1


def getRightBoroughCode(boroughCode):
    switchLike = {
        "MN": "1",
        "BX": "2",
        "BK": "3",
        "QN": "4",
        "SI": "5"
    }
    result = ""
    result = switchLike.get(boroughCode)
    return result

def get_projection():
    NAD83 = CRS.from_epsg(2263)
    WGS84 = CRS.from_epsg(4326)
    globalProjection = Transformer.from_crs(NAD83, WGS84)
    return globalProjection
    # return Proj(init="esri:102718")

def formatBBL(boroughBlockCode, _lotCode):
    boroughCode = boroughBlockCode.split('-')[0]
    boroughCode = getRightBoroughCode(boroughCode)
    # Getting blockCode and normalize it
    blockCode = boroughBlockCode.split('-')[1]
    blockCode = blockCode.zfill(5)
    # Getting fake lot and change lot code
    lotCode = _lotCode.split('->')[0]
    lotCode = lotCode.zfill(4)
    fakeCode = _lotCode.split('->')[1]
    # create bbl with right format
    bbl = "{0}{1}{2}->{3}".format(boroughCode, blockCode, lotCode, fakeCode)
    return bbl


if __name__ == '__main__':
    cSet = set(categoricalFields)
    nSet = set(numericsFields)
    iSet = set(importantFields) - {"BOROUGH", "BLOCK", "LOT", "BOROCODE"}
    print((iSet - nSet) == cSet)
    print(cdNames())
