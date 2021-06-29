#include "PlutoModel.h"
#include <QString>

#include "AbstractRequest.h"
#include "GeometryRequest.h"
#include "HistogramRequest.h"
#include "SummaryRequest.h"
#include "FilterRequest.h"
#include "POPRequest.h"
#include "BlockDataRequest.h"

#include "GeometryQueryHandler.h"
#include "SummaryQueryHandler.h"
#include "HistogramQueryHandler.h"
#include "FilterQueryHandler.h"
#include "BlockDataQueryHandler.h"

PlutoModel::PlutoModel()
{	
	initBoroughs();
}

PlutoModel::~PlutoModel()
{
}

void PlutoModel::initBoroughs()
{
	QStringList boroughs = Utilities::getBoroughs();

	int boroughIDMax = 0;
	for (int i = 0; i < boroughs.size(); i++)
	{
		QString boroughName = boroughs.at(i);
		int boroughID = Utilities::getBoroughID(boroughName);
		if (boroughID > boroughIDMax)
		{
			boroughIDMax = boroughID;
		}
	}

	for (int i = 0; i < boroughIDMax; i++)
	{
		m_lBoroughs.push_back(NULL);
		m_lBoroughLot.push_back(NULL);
		m_lPOPData.push_back(NULL);
	}

	for (int i = 0; i < boroughs.size(); i++)
	//for (QString borough : boroughs)
	{
		QString boroughName = boroughs.at(i);
		int boroughID = Utilities::getBoroughID(boroughName);
		PlutoBorough* pPlutoBorough = new PlutoBorough(boroughID, boroughName);
		m_lBoroughs[boroughID - 1] = pPlutoBorough;
		m_lBoroughLot[boroughID - 1] = new QList<PlutoLot*>();
		m_lPOPData[boroughID - 1] = new QList<POPData*>();
	}
}

bool PlutoModel::extractPropertyValue(const QJsonValue& jsonValue, const QString& propertyName, QString& propertyValue)
{
	if (jsonValue.isObject())
	{
		QJsonObject jsonObject = jsonValue.toObject();
		if (jsonObject.contains(propertyName)) {
			QJsonValue neighNameJsonVal = jsonObject[propertyName];
			propertyValue = neighNameJsonVal.toString();
			return true;
		}
	}

	return false;
}

PlutoBorough* PlutoModel::getPlutoBorough(const int& boroughCode)
{
	if (boroughCode > m_lBoroughs.size())
	{
		return NULL;
	} 
	return m_lBoroughs.at(boroughCode - 1);
}

bool PlutoModel::parseRequestData(const QString& requestJson, QMap<QString, QString>& requestParams)
{
	try
	{
		QJsonDocument requestData = QJsonDocument::fromJson(requestJson.toUtf8());
		QJsonObject jsonObject = requestData.object();
		QStringList jsonKeys = jsonObject.keys();
		foreach(QString key, jsonKeys)
		{
			QJsonValue jValue = jsonObject.value(key);
			QString value = jValue.toString();
			requestParams.insert(key, value);
		}
		return true;
	}
	catch (const std::exception & e) {
        qDebug() << e.what();
		return false;
	}
	return false;
}

/***
#### START OF API
***/

bool PlutoModel::fetchYears(QString& jsonResponse)
{
	QStringList years = Utilities::getYears();
    return Utilities::generateJsonArray(years, jsonResponse);
}

bool PlutoModel::fetchAttributes(QString& jsonResponse)
{
	QStringList attributes = Utilities::getAttributes("high");
	attributes.append(Utilities::getAttributes("low"));
	attributes.append(Utilities::getAttributes("categ"));
	return Utilities::generateJsonArray(attributes, jsonResponse);
}

bool PlutoModel::fetchNAttributes(QString& jsonResponse)
{
	return Utilities::getAttributesMetaData(jsonResponse);
}

bool PlutoModel::fetchBoroughs(QString& jsonResponse)
{
	QStringList boroughs = Utilities::getBoroughs();
	return Utilities::generateJsonArray(boroughs, jsonResponse);
}

bool PlutoModel::fetchMetrics(QString& jsonResponse)
{
	QStringList metrics = Utilities::getMetrics();
	return Utilities::generateJsonArray(metrics, jsonResponse);
}

bool PlutoModel::fetchLayer(const QString& requestData, const LayerType& layerType, QString& jsonResponse)
{
	jsonResponse = "Layer";

	GeometryRequest geoRequest(requestData);
	
	PlutoBorough* pPlutoBorough = getPlutoBorough(geoRequest.getBoroughCode());
	if (pPlutoBorough == NULL)
	{
		jsonResponse = "Pluto borough not found";
		return false;
	}
	GeometryQueryHandler* geoQueryHandler = new GeometryQueryHandler(pPlutoBorough, &geoRequest, &m_geometriesDS);

	switch (layerType)
	{
		case LayerType::Neighborhood:
			qDebug() << "Neighborhood" << geoRequest.getBoroughCode();
			jsonResponse = geoQueryHandler->getNeighborhoodsLayer();
			break;
		case LayerType::Block:
			qDebug() << "Block" << geoRequest.getBoroughCode() << geoRequest.getNeighborhoodCode() << geoRequest.getYear();
			jsonResponse = geoQueryHandler->getBlocksLayer();
			break;
		case LayerType::Lot:
			qDebug() << "Lot" << geoRequest.getBoroughCode() << geoRequest.getNeighborhoodCode() << geoRequest.getBlockCode() << geoRequest.getYear();
			jsonResponse = geoQueryHandler->getLotsLayer();
			break;
		default:
			qDebug() << "Default";
	}

	delete geoQueryHandler;
	geoQueryHandler = NULL;

	return true;
}

bool PlutoModel::fetchSummaries(const QString& requestData, const LayerType& layerType, QString& jsonResponse)
{
	jsonResponse = "Layer Info";

	SummaryRequest summRequest(requestData);

	PlutoBorough* pPlutoBorough = getPlutoBorough(summRequest.getBoroughCode());
	if (pPlutoBorough == NULL)
	{
		jsonResponse = "Pluto borough not found";
		return false;
	}

	QList< PlutoLot* >* lots = m_lBoroughLot.at(summRequest.getBoroughCode() - 1);
	qDebug() << "Lots borough" << lots->length();

	AttributesDS* pAttributeDS;
	QString attrType = Utilities::getAttributeType(summRequest.getAttributeName());
	if (attrType.compare("high", Qt::CaseInsensitive) == 0) pAttributeDS = &m_attributesHighDS;
	else if (attrType.compare("low", Qt::CaseInsensitive) == 0) pAttributeDS = &m_attributesLowDS;
	else pAttributeDS = &m_attributesCategDS;

	SummaryQueryHandler* summQueryHandler = new SummaryQueryHandler(pPlutoBorough, &summRequest, pAttributeDS);

	switch (layerType)
	{
		case LayerType::Neighborhood:
			qDebug() << "Neighborhood";
			jsonResponse = summQueryHandler->getNeighborhoodSummary();
			break;
		case LayerType::Block:
			qDebug() << "Block";
			jsonResponse = summQueryHandler->getBlockSummary();
			break;
		case LayerType::Lot:
			qDebug() << "Lot";
			jsonResponse = summQueryHandler->getLotsSummary();
			break;
		default:
			qDebug() << "Default";
	}

	delete summQueryHandler;
	summQueryHandler = NULL;

	return true;
}

bool PlutoModel::fetchHistogram(const QString& requestData, const LayerType& layerType, QString& jsonResponse)
{
	jsonResponse = "Layer Filtering";

	HistogramRequest histRequest(requestData);

	
	QList<PlutoLot*>* pBoroughLots = m_lBoroughLot.at(histRequest.getBoroughCode() - 1);
	
	PlutoBorough* pPlutoBorough = getPlutoBorough(histRequest.getBoroughCode());
	if (pPlutoBorough == NULL)
	{
		jsonResponse = "Pluto borough not found";
		return false;
	}

	AttributesDS* pAttributeDS;
	QString attrType = Utilities::getAttributeType(histRequest.getAttributeName());
	if (attrType.compare("high", Qt::CaseInsensitive) == 0) pAttributeDS = &m_attributesHighDS;
	else if (attrType.compare("low", Qt::CaseInsensitive) == 0) pAttributeDS = &m_attributesLowDS;
	else pAttributeDS = &m_attributesCategDS;

	HistogramQueryHandler* histogramQueryHandler = new HistogramQueryHandler(pPlutoBorough, &histRequest, pAttributeDS, pBoroughLots);

	switch (layerType)
	{
	case LayerType::Neighborhood:
		qDebug() << "Neighborhood";
		jsonResponse = histogramQueryHandler->getNeighborhoodSummary();
		break;
	case LayerType::Block:
		qDebug() << "Block";
		jsonResponse = histogramQueryHandler->getBlockSummary();
		break;
	case LayerType::Lot:
		qDebug() << "Lot";
		jsonResponse = histogramQueryHandler->getLotsSummary();
		break;
	default:
		qDebug() << "Default";
	}

	return true;
}

bool PlutoModel::filterDataSet(const QString& requestData, QString& jsonResponse)
{
	jsonResponse = "";

	FilterRequest filterRequest(requestData);

	FilterQueryHandler* filterRequestHandler = new FilterQueryHandler(&m_lBoroughLot, &filterRequest, &m_attributesHighDS, &m_attributesLowDS, &m_attributesCategDS);

	filterRequestHandler->getDataFiltered();

	return true;
}

bool PlutoModel::fetchPOPLayer(const QString& requestData, QString& jsonResponse)
{
	POPRequest request(requestData);

	QList< POPData* >* boroughData = m_lPOPData.at(request.getBoroughCode() - 1);

	if (boroughData == NULL)
		return false;

	QJsonObject jsonObject;
	jsonObject.insert("type", QJsonValue("FeatureCollection"));

	QJsonArray jsonFeatures;
	for (POPData* popData : *boroughData)
	{
		QJsonObject feature;
		feature.insert("type", QJsonValue("Feature"));

		QJsonObject jsonGeometry;
		jsonGeometry.insert("type", QJsonValue("Point"));

		QJsonArray jsonCoordinates;
		jsonCoordinates.push_back(popData->getLongitude());
		jsonCoordinates.push_back(popData->getLatitude());

		jsonGeometry.insert("coordinates", jsonCoordinates);

		feature.insert("geometry", jsonGeometry);

		QJsonObject jsonProperties;
		jsonProperties.insert("name", QJsonValue(popData->getName()));

		feature.insert("properties", jsonProperties);

		jsonFeatures.push_back(feature);
	}

	jsonObject.insert("features", jsonFeatures);

	QJsonDocument jsonDoc(jsonObject);
	jsonResponse = jsonDoc.toJson(QJsonDocument::Compact);
	return true;
}

bool PlutoModel::fetchBlockData(const QString& requestData, QString& jsonResponse) 
{
	BlockDataRequest blockDataRequest(requestData);

	QList<PlutoLot*>* boroughLots = m_lBoroughLot.at(blockDataRequest.getBoroughCode() - 1);

	BlockDataQueryHandler* blockDataQueryHandler = new BlockDataQueryHandler(&blockDataRequest, boroughLots, &m_attributesHighDS, &m_attributesLowDS, &m_attributesCategDS);

	jsonResponse = blockDataQueryHandler->getData();

	delete blockDataQueryHandler;
	blockDataQueryHandler = NULL;
	return true;
}

/***
#### END OF API
***/

bool PlutoModel::loadCDData(const QString& dataPath, QString& errorMessage)
{
	QString filePathTemplate = Utilities::getAttributesMetaFilePath(dataPath);

	QString CDFilePath = filePathTemplate.arg("cdNames");
	QFile CDFileReader(CDFilePath);
	bool readable = CDFileReader.exists() && CDFileReader.open(QFile::ReadOnly | QFile::Text);

	QVector<QList<QString>> cdNames(5);
	if (readable)
	{
		while (!CDFileReader.atEnd())
		{
			QString line = CDFileReader.readLine().replace("\t", "").trimmed();
			if (line.length() == 0) continue;
			QStringList lineSplitted = line.split(Utilities::getDelimiter());
			int boroughCode = lineSplitted.at(0).toInt();
			// int cdCode = lineSplitted.at(1).toInt();
			QString cdName = lineSplitted.at(2);
			(cdNames[boroughCode - 1]).push_back(cdName);
		}
	}

	QString filePath = Utilities::getCDFilePath(dataPath);
	QFile fileReader(filePath);
	readable = fileReader.exists() && fileReader.open(QFile::ReadOnly | QFile::Text);

	if (readable)
	{
		while (!fileReader.atEnd())
		{
			QString line = fileReader.readLine();
			if (line.indexOf("BOROUGH;CODE") >= 0) continue;
			PlutoNeigh* pPlutoNeigh = PlutoNeigh::parseLotData(line);

			QList<QString>& names = cdNames[pPlutoNeigh->getBoroughID() - 1];

			if (names.size() > 0)
			{
				int cdCode = pPlutoNeigh->getCode().toInt();
				int cdIndex = (cdCode - 1);
				QString name;
				if (cdIndex < names.size())
				{
					name = names.at(cdIndex).trimmed().replace("\n","");
				}
				else
				{
					name = "Park and Airport";
				}
				
				pPlutoNeigh->setName(name);
			}
		
			// need to create a map that will convert neighborhood name to code 
			Utilities::insertCdInfo(pPlutoNeigh->getName(), pPlutoNeigh->getCode());
			int boroughID = pPlutoNeigh->getBoroughID();
			PlutoBorough* pPlutoBorough = getPlutoBorough(boroughID);
			if (pPlutoBorough != NULL)
			{
				pPlutoBorough->insertPlutoCD(pPlutoNeigh);
			}
		}
	}
	else
	{
		errorMessage = "Data not found!";
	}
	

	return true;
}

bool PlutoModel::loadNeighborhoodsData(const QString& dataPath, QString& errorMessage)
{
	QString filePath = Utilities::getNeighborhoodFilePath(dataPath);
	QFile fileReader(filePath);
	bool readable = fileReader.exists() && fileReader.open(QFile::ReadOnly | QFile::Text);

	if (readable)
	{
		while (!fileReader.atEnd())
		{
			QString line = fileReader.readLine();
			if (line.indexOf("BOROUGH;CODE") >= 0) continue;
			PlutoNeigh* pPlutoNeigh = PlutoNeigh::parseLotData(line);


			// need to create a map that will convert neighborhood name to code 
			Utilities::insertNeighborhoodInfo(pPlutoNeigh->getName(), pPlutoNeigh->getCode());
			int boroughID = pPlutoNeigh->getBoroughID();
			PlutoBorough* pPlutoBorough = getPlutoBorough(boroughID);
			if (pPlutoBorough != NULL)
			{
				pPlutoBorough->insertPlutoNeighborhood(pPlutoNeigh);
			}
		}
	}
	else
	{
		errorMessage = "Data not found!";
	}
	return true;
}

bool PlutoModel::loadDataset(const QString& dataPath, QString& message)
{
	QStringList boroughs = Utilities::getBoroughs();
	foreach(QString borough, boroughs)
	{
		QString datasetFileName = Utilities::getDatasetFileNameTemplate(dataPath).arg(borough).arg(borough);
		QString errorMessage;
		bool success = loadBoroughData(datasetFileName, borough, errorMessage);

        if (!success) {
            message = errorMessage;
			return success;
		}

	}
	return true;
}

bool PlutoModel::loadGeometries(const QString& dataPath, QString& message)
{
	QString filePathTemplate = Utilities::getGeometriesFileNameTemplate(dataPath);
    return loadDataStructure(filePathTemplate, m_geometriesDS, message);
}

bool PlutoModel::loadAttributes(const QString& dataPath, QString& message)
{
	QString filePathTemplate = Utilities::getAttributesFileNameTemplate(dataPath);
	QString fileTempl = filePathTemplate.replace("{TYPE}", "high");
    bool success = loadDataStructure(fileTempl, m_attributesHighDS, message);
	fileTempl = filePathTemplate.replace("high", "low");
	success = loadDataStructure(fileTempl, m_attributesLowDS, message);
	fileTempl = filePathTemplate.replace("low", "categ");
	success = loadDataStructure(fileTempl, m_attributesCategDS, message);
	return success;
}

bool PlutoModel::loadBoroughData(const QString& datasetFileName, const QString& boroughName, QString& errorMessage)
{
	QFile datasetFile(datasetFileName);

	if (!datasetFile.exists())
	{
		errorMessage = "Database File does not exist.";
		return false;
	}

	if (!datasetFile.open(QFile::ReadOnly | QFile::Text))
	{
		errorMessage = "Cannot open dataset file.";
		return false;
	}

	int missingNeighborhoods = 0;
	QString missing;
	while (!datasetFile.atEnd())
	{
		QString line = datasetFile.readLine();
		// jump file header
		if (line.startsWith("BBL;NEIGHCODE")) continue;

		PlutoLot* pPlutoLot = PlutoLot::parseDatsetFileLine(line);
		if (pPlutoLot == NULL)
		{
			errorMessage += "Cannot parse Lot.";
			return false;
		}
		
		int boroughCode = pPlutoLot->getBoroughCode();
		QString neighCode = pPlutoLot->getNeighCode();
		QString cdCode = pPlutoLot->getCDCode();
		int blockCode = pPlutoLot->getBlockCode();

		if (!Utilities::loadOnlyRaw())
		{
			PlutoBorough* pPlutoBorough = getPlutoBorough(boroughCode);
			PlutoNeigh* pPlutoNeigh = pPlutoBorough->getPlutoNeighborhood(neighCode);

			PlutoNeigh* pPlutoCD = pPlutoBorough->getPlutoCD(cdCode);
		
			PlutoBlock* pPlutoBlock = NULL;// = pPlutoNeigh->getPlutoBlock(blockCode);
			if (pPlutoNeigh != NULL)
			{
				if (pPlutoNeigh->getPlutoBlock(blockCode) == NULL)
				{
					pPlutoBlock = new PlutoBlock(blockCode);
					pPlutoNeigh->insertBlock(pPlutoBlock);
				}
				else
				{
					pPlutoBlock = pPlutoNeigh->getPlutoBlock(blockCode);
				}
			}
		
			if (pPlutoCD != NULL)
			{
				if (pPlutoCD->getPlutoBlock(blockCode) == NULL)
				{
					if (pPlutoBlock == NULL)
					{
						pPlutoBlock = new PlutoBlock(blockCode);
					}
					pPlutoCD->insertBlock(pPlutoBlock);
				}
				else
				{
					pPlutoCD->getPlutoBlock(blockCode);
				}
			}
		
			if (pPlutoBlock == NULL)
			{
				missing += QString("%1 -- %2.\n").arg(neighCode).arg(pPlutoLot->getBBLCode());
				missing += QString("%1 -- %2.\n").arg(cdCode).arg(pPlutoLot->getBBLCode());
				missingNeighborhoods++;
				continue;
			}

			pPlutoBlock->insertPlutoLot(pPlutoLot);

		}
		m_lBoroughLot.at(boroughCode - 1)->push_back(pPlutoLot);
		
	}
	qDebug() << QString("Missing %1 from %2").arg(missingNeighborhoods).arg(boroughName);
	//qDebug() << missing;
	return true;
}

bool PlutoModel::loadDataStructure(const QString& templatePath, AbstractDS& abstractDS, QString& errorMessage)
{
	QStringList boroughs = Utilities::getBoroughs();
    for (QString borough: boroughs)
	{
		QString attributesPath = templatePath.arg(borough).arg(borough);
		int boroughID = Utilities::getBoroughID(borough);
		bool success = abstractDS.insertBoroughAttributeData(boroughID, attributesPath, errorMessage);
		if (!success)
		{
			return success;
		}
	}
	return true;
}

bool PlutoModel::loadPOPData(const QString& dataPath, QString& errorMessage)
{
	QString filePath = Utilities::getPOPDataFilePath(dataPath);
	QFile fileReader(filePath);

    qDebug() << dataPath << filePath;

	if (!fileReader.exists())
	{
		errorMessage = "Cannot find POP Data File";
		return false;
	}

	if (!fileReader.open(QFile::ReadOnly | QFile::Text))
	{
		errorMessage = "Cannot Open POP Data File";
		return false;
	}

	QStringList headerMapper;
	bool readHeader = true;

	while (!fileReader.atEnd())
	{
		QString line = fileReader.readLine();
        QStringList lineSplitted = line.split(",");
		if (readHeader)
		{
			for (int i = 0; i < lineSplitted.size(); i++)
			{
				headerMapper.push_back(lineSplitted.at(i).toUpper());
			}
			readHeader = false;
		}
		else
		{
			QStringList lineFixed = Utilities::fixLineSplitted(lineSplitted);
			
			QString searchKey = "Borough_Code";
			int index = headerMapper.indexOf(searchKey.toUpper());
			int boroughCode = lineFixed.at(index).toInt();
			
			if (boroughCode >= m_lPOPData.size())
			{
				continue;
			}
			QList<POPData*>* boroughPOPData = m_lPOPData.at(boroughCode - 1);

			if (boroughPOPData == NULL)
			{
				continue;
			}

			searchKey = "Building_Name";
			index = headerMapper.indexOf(searchKey.toUpper());
			QString name = lineFixed.at(index);

			searchKey = "Latitude";
			index = headerMapper.indexOf(searchKey.toUpper());
			double longitude = lineFixed.at(index).toDouble();

			searchKey = "Longitude";
			index = headerMapper.indexOf(searchKey.toUpper());
			double latitude = lineFixed.at(index).toDouble();

			POPData* popData = new POPData(name, boroughCode, latitude, longitude);
			boroughPOPData->push_back(popData);
		}
	}

	errorMessage = "";
	return true;
}

bool PlutoModel::loadCategoricalAttributesMeta(const QString& dataPath, QString& errorMessage)
{
	QString filePathTemplate = Utilities::getAttributesMetaFilePath(dataPath);

	QStringList types = { "high", "low", "categ" };
	for (QString type : types)
	{
		QString fileName = QString("Attributes_%1").arg(type);
		QString attributeFilePath = filePathTemplate.arg(fileName);
		QFile attributeFileReader(attributeFilePath);
		if (!attributeFileReader.exists()) errorMessage = QString("Cannot find Attribute Meta Data File");
		if (!attributeFileReader.open(QFile::ReadOnly | QFile::Text)) errorMessage = QString("Cannot Open Attribute Meta Data File");

		QString dataAttributes = attributeFileReader.readAll();
		QStringList dataSplitted = dataAttributes.replace("\n", "").split(Utilities::getDelimiter());
		Utilities::insertAttributes(dataSplitted, type);
	}
	

	// Attributes
    QStringList categoricalAtributes = Utilities::getAttributes("categ");

	for (QString categoricalAttribute : categoricalAtributes)
	{
		QString filePath = filePathTemplate.arg(categoricalAttribute);
		QFile fileReader(filePath);
		
		if (!fileReader.exists())
		{
			errorMessage = QString("Cannot find Attribute %1 Data File").arg(categoricalAttribute);
			continue;
		}

		if (!fileReader.open(QFile::ReadOnly | QFile::Text))
		{
			errorMessage = QString("Cannot Open Attribute %1 Data File").arg(categoricalAttribute);
			continue;
		}

		QString data = fileReader.readAll();
		QStringList dataSplitted = data.split(Utilities::getDelimiter());
		QList<QString>* dataList = new QList<QString>(dataSplitted);
		Utilities::insertAttributesCategories(dataList);
	}
	return true;
}
