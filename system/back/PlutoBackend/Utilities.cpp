#include "Utilities.h" 

//"BOROCODE", "BOROUGH", "BLOCK", "LOT" were removed due the fact that they are not properly
QStringList Utilities::s_lMainCategories = { "AREA", "FAR", "FARXLOTAREA", "ASSESS", "LOTSALIVE", "NUMFLOORS", "NUMBLDGS", "LANDUSE", "LTDHEIGHT", "LANDUSE", "BLDGCLASS", "ZONEDIST1", "ZONEDIST2", "ZONEDIST3", "ZONEDIST4", "OVERLAY1", "OVERLAY2", "SPDIST1", "SPDIST2", "SPDIST3", "SPLITZONE", "EXEMPTTOT", "POPS", "ASSESSTOT/LOTAREA", "OFFICE_RES"};
QStringList Utilities::s_lSubCategories; // = { "(RESID-BUILT)FAR", "(COMM-BUILT)FAR", "(FACIL-BUILT)FAR", "RESIDFAR", "COMMFAR", "FACILFAR", "BUILTFAR", "BLDGAREA", "RESAREA", "COMAREA", "RETAILAREA", "GARAGEAREA", "FACTRYAREA", "OTHERAREA", "ASSESSLAND", "ASSESSTOT", "LOTAREA", "LOTSALIVE", "NUMFLOORS", "LTDHEIGHT", "LANDUSE", "BLDGCLASS", "ZONEDIST1", "ZONEDIST2", "ZONEDIST3", "ZONEDIST4", "OVERLAY1", "OVERLAY2", "SPDIST1", "SPDIST2", "SPDIST3", "SPLITZONE" };

QList< QList<QString>* > Utilities::s_lCategoricalSubCategories;

QStringList Utilities::s_lHistogramAllowed = { "AREA", "FAR", "ASSESS", "LANDUSE", "SPDIST1", "OFFICE_RES"};

QStringList Utilities::s_lAttributesHigh; 
QStringList Utilities::s_lAttributesLow;
QStringList Utilities::s_lAttributesCateg;

QStringList Utilities::s_lYears = { "2002","2003","2004","2005","2006","2007", "2009", "2009.2", "2010", "2010.2", "2011", "2011.2", "2012", "2012.2", "2013", "2013.2", "2014", "2014.2", "2015", "2016", "2016.2", "2017" };
// QStringList Utilities::s_lYears = { "2002","2003" };


QStringList Utilities::s_lBoroughsIndex = { "Manhattan", "Bronx", "Brooklyn", "Queens", "StatenIsland" };
QStringList Utilities::s_lBoroughNickName = { "MN", "BX", "BK", "QN", "SI" };
QStringList Utilities::s_lMetrics = {"Min", "Max", "Sum", "Count", "Average"};
QStringList Utilities::s_ltypes = { "high", "low", "categ" };

// QStringList Utilities::s_lBoroughs = { "Manhattan" };
QStringList Utilities::s_lBoroughs = { "Manhattan" , "Brooklyn"};

QString Utilities::s_sDatasetFileNameTemplate = "/Dataset/%1/%2_fullFinalData_withNeighCode.out";
QString Utilities::s_sAttributesFileNameTemplate = "/Attributes/%1/%2_fullFinalData_withNeighCode_attributes_{TYPE}.out";
QString Utilities::s_sGeometriesFileNameTemplate = "/Geometries/%1/%2_fullFinalData_withNeighCode_geometries.out";
QString Utilities::s_sCacheFileNameTemplate = "/Cache/%1/neighborhoodSummary_%2.cache";
QString Utilities::s_sNeighborhoodFileName = "/%1_fromboroughs.out";
QString Utilities::s_sAttributesMetaTemplate = "/Metas/%1.meta";
QString Utilities::s_sPOPDataFileName = "/nycpops/nycpops.csv";

QMap<QString, QString> Utilities::s_mNeighNameToNeighCode = QMap<QString, QString>();
QMap<QString, QString> Utilities::s_mCdNameToCdCode = QMap<QString, QString>();

QChar Utilities::s_cDelimiter = ';';

bool Utilities::s_bAllowNeighborhoodCache = false;
bool Utilities::s_bLoadRawData = false;

QString Utilities::getAttributeType(const QString& attributeName)
{
	QString attrType = "";
	if (s_lAttributesHigh.contains(attributeName, Qt::CaseInsensitive))
	{
		attrType = "high";
	}
	else if (s_lAttributesLow.contains(attributeName, Qt::CaseInsensitive))
	{
		attrType = "low";
	}
	else
	{
		attrType = "categ";
	}
	
	return attrType;
}

void Utilities::insertAttributes(const QList<QString>& attributes, const QString& attrsType)
{
	s_lSubCategories.append(attributes);
	if (attrsType.compare("high", Qt::CaseInsensitive) == 0)
		s_lAttributesHigh.append(attributes);
	else if (attrsType.compare("low", Qt::CaseInsensitive) == 0)
		s_lAttributesLow.append(attributes);
	else
		s_lAttributesCateg.append(attributes);
	
}

bool Utilities::getAttributesMetaData(QString& json)
{
	/*{
		attribute: LANDUSE,
		isNumerical : false,
		categories : [RESID, RES - COMM, ...] ,
		tooltip : [Residential, Mixed Residential and commercial, commercial and office, ...]
		metrics : [COUNT]
	}*/

	QJsonArray jsonCategoricalMetrics;
	jsonCategoricalMetrics.push_back("COUNT");

	QJsonArray jsonNumericalMetrics;
	jsonNumericalMetrics.push_back("SUM");
	jsonNumericalMetrics.push_back("COUNT");
	jsonNumericalMetrics.push_back("AVERAGE");

	QJsonArray jsonAttributes;
	for (QString mainCategory : s_lMainCategories)
	{
		QJsonObject jsonAttributeCategory;

		jsonAttributeCategory.insert("attribute", QJsonValue(mainCategory));

		bool isCategorical = s_lAttributesCateg.contains(mainCategory);
		jsonAttributeCategory.insert("isCategorical", QJsonValue(isCategorical));

		bool histogramAllowed = s_lHistogramAllowed.indexOf(mainCategory) >= 0;
		jsonAttributeCategory.insert("histogramAlloed", QJsonValue(histogramAllowed));
		
		QJsonArray jsonAttributesNames;
		if (!isCategorical)
		{
			for (QString attribute : s_lSubCategories)
			{
				if (mainCategory.compare("FAR", Qt::CaseInsensitive) == 0 && attribute.indexOf("XLOTAREA", Qt::CaseInsensitive) >= 0) continue;
				if ((mainCategory.compare("AREA", Qt::CaseInsensitive) == 0 || mainCategory.compare("ASSESS", Qt::CaseInsensitive) == 0) && (attribute.indexOf("XLOTAREA", Qt::CaseInsensitive) >= 0 || attribute.indexOf("/LOTAREA", Qt::CaseInsensitive) >= 0)) continue;
				if (attribute.indexOf(mainCategory, Qt::CaseInsensitive) >= 0)
				{
					QString name = attribute.replace(mainCategory, "");
					jsonAttributesNames.push_back(QJsonValue(name));
				}
			}
		}
		else
		{
			int subCategoryIndex = s_lAttributesCateg.indexOf(mainCategory);
			if (subCategoryIndex >= 0)
			{
				QList<QString>* subCategories = s_lCategoricalSubCategories.at(subCategoryIndex);
				QJsonArray jsonArray;
				//for (QString name : subcategory)
				for (int i = 0; i < subCategories->size(); i++)
				{
					QString name = subCategories->at( i );

					jsonAttributesNames.push_back(QJsonValue(name));
				}
			}
		}
		
		jsonAttributeCategory.insert("tooltips", QJsonValue(""));

		jsonAttributeCategory.insert("categories", jsonAttributesNames);

		if (isCategorical)
		{
			jsonAttributeCategory.insert("metrics", jsonCategoricalMetrics);
		}
		else
		{
			jsonAttributeCategory.insert("metrics", jsonNumericalMetrics);
		}
		jsonAttributes.push_back(jsonAttributeCategory);
	}

	QJsonDocument jsonDoc(jsonAttributes);
	
	json = jsonDoc.toJson(QJsonDocument::Compact);

	return true;
}

bool Utilities::generateJsonArray(const QStringList& data, QString& json)
{
	QJsonArray jsonArray;
	for (QString item : data)
	{
		QJsonValue val(item);
		jsonArray.append(val);
	}
	QJsonDocument jsonDoc(jsonArray);
	json = jsonDoc.toJson(QJsonDocument::Compact);
	return true;
}

bool Utilities::generateJsonObjectIndexed(const QStringList& data, QString& json)
{
	QJsonObject jsonObject;
	for (QString item : data)
	{
		int i = getBoroughID(item);
		QJsonValue val(i);
		jsonObject.insert(item, val);
		i++;
	}
	QJsonDocument jsonDoc(jsonObject);
	json = jsonDoc.toJson(QJsonDocument::Compact);
	return true;
}

QStringList Utilities::fixLineSplitted(const QStringList& lineSplitted)
{
	QStringList lineSplittedFixed;
	QString currentElem = "";
	bool hasFoundElem = false;
	for (QString item : lineSplitted)
	{
		if (item.indexOf("\"") >= 0 && item.count("\"") % 2 != 0)
		{
			hasFoundElem = !hasFoundElem;
		}


		if (hasFoundElem)
		{
			currentElem += item;
			continue;
		}
		else
		{
			currentElem += item;
		}

		currentElem = currentElem.replace(",", " ");
		currentElem = currentElem.replace("\"", "");

		lineSplittedFixed.push_back(currentElem.trimmed());
		currentElem = "";
	}
	return lineSplittedFixed;
}

QList<QString>* Utilities::getAttributeCategories(const QString& attributeName)
{
	int attributeIndex = s_lAttributesCateg.indexOf(attributeName);
	QList<QString>* attributesCategories = s_lCategoricalSubCategories.at(attributeIndex);
	return attributesCategories;
}

void Utilities::insertAttributesCategories(QList<QString>* categories)
{
	s_lCategoricalSubCategories.push_back(categories);
}

QString Utilities::decodeAttributeCategory(const QString& attribute, const QString& category)
{
	QList<QString>* attributesCategories = Utilities::getAttributeCategories(attribute);
	int i = attributesCategories->indexOf(category);
	return QString::number(i + 1).rightJustified(2, '0');
}

QString Utilities::findAttributeName(const QString& attributeName, const QString& category)
{
	if (!category.isEmpty())
	{
		if (attributeName.compare("assess", Qt::CaseInsensitive) == 0)
		{
			return attributeName + category;
		}
		else
		{
			return category + attributeName;
		}
	}
	else
	{
		return attributeName;
	}
}
