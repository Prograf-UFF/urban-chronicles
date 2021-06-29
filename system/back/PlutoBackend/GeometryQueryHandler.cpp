#include "GeometryQueryHandler.h"

GeometryQueryHandler::GeometryQueryHandler(PlutoBorough* pPlutoBorough, GeometryRequest* geoRequest, GeometriesDS* pGeometryDS)
{
	m_pPlutoBorough = pPlutoBorough;
	m_pGeometryRequest = geoRequest;
	m_pGeometryDS = pGeometryDS;
}

GeometryQueryHandler::~GeometryQueryHandler()
{
}

QString GeometryQueryHandler::getNeighborhoodsLayer()
{
	switch (m_pGeometryRequest->getDatasetType())
	{
		case DatasetType::NTA:
			return getNTALayer();
		case DatasetType::CD:
			return getCDLayer();
	}
	
}

QString GeometryQueryHandler::getBlocksLayer()
{
	PlutoNeigh* pPlutoNeigh = NULL;

	switch (m_pGeometryRequest->getDatasetType())
	{
		case DatasetType::NTA:
			pPlutoNeigh = m_pPlutoBorough->getPlutoNeighborhood(m_pGeometryRequest->getNeighborhoodCode());
			break;
		case DatasetType::CD:
			pPlutoNeigh = m_pPlutoBorough->getPlutoCD(m_pGeometryRequest->getNeighborhoodCode());
			break;
	}	
	
	if (pPlutoNeigh == NULL)
	{
		return QString();
	}

	QList<int> blocksCodes = pPlutoNeigh->getPlutoBlocksCodes();

	QJsonArray jsonArray;
	for (int blockCode : blocksCodes)
	{
		PlutoBlock* pPlutoBlock = pPlutoNeigh->getPlutoBlock(blockCode);
		processBlock(pPlutoBlock, jsonArray, pPlutoBlock->getStrCode());
	}

	QJsonObject jsonUrbaneObj;
	jsonUrbaneObj.insert("type", QJsonValue("FeatureCollection"));
	jsonUrbaneObj.insert("features", jsonArray);

	QJsonDocument jsonDoc(jsonUrbaneObj);

	return jsonDoc.toJson(QJsonDocument::Compact);
}

QString GeometryQueryHandler::getLotsLayer()
{
	PlutoNeigh* pPlutoNeigh = NULL;

	switch (m_pGeometryRequest->getDatasetType())
	{
	case DatasetType::NTA:
		pPlutoNeigh = m_pPlutoBorough->getPlutoNeighborhood(m_pGeometryRequest->getNeighborhoodCode());
		break;
	case DatasetType::CD:
		pPlutoNeigh = m_pPlutoBorough->getPlutoCD(m_pGeometryRequest->getNeighborhoodCode());
		break;
	}
	

	if (pPlutoNeigh == NULL)
	{
		return QString();
	}

	QList<int> blockList = (m_pGeometryRequest->getJumpLayer()) ? pPlutoNeigh->getPlutoBlocksCodes() : QList<int>() << m_pGeometryRequest->getBlockCode();

	QJsonArray jsonArray;

	for (int blocCode : blockList)
	{
		PlutoBlock* pPlutoBlock = pPlutoNeigh->getPlutoBlock(blocCode);

		if (pPlutoBlock == NULL)
		{
			return QString();
		}
		
		QList<PlutoLot*> lots = pPlutoBlock->getLots();

		for (PlutoLot* pPlutoLot : lots)
		{
			QVector<int>* pLotGeometries = pPlutoLot->getGeometries();

			int yearIndex = Utilities::getYears().indexOf(m_pGeometryRequest->getYear());

			bool isAlive = (*pLotGeometries)[yearIndex] != -1;// pPlutoLot->isLotAlive(m_pGeometryRequest->getYear());

			if (!isAlive)
			{
				continue;
			}

			int geoId = (*pLotGeometries)[yearIndex];

			QString shape;
			m_pGeometryDS->getData(m_pGeometryRequest->getBoroughCode(), geoId, shape);

			QJsonDocument jsonShape = QJsonDocument::fromJson(shape.toUtf8());
			QJsonArray jsonNeighGeoemtries;
			jsonNeighGeoemtries = jsonShape.array();

			QJsonArray jsonBlockGeometries;
			for (QJsonValue jsonGeometryPart : jsonNeighGeoemtries)
			{
				jsonBlockGeometries.append(jsonGeometryPart);
			}

			QJsonObject jsonNeighProperties;
			jsonNeighProperties.insert("scalar", QJsonValue::Null);
			jsonNeighProperties.insert("name", QJsonValue(pPlutoLot->getBBLCode()));
			jsonNeighProperties.insert("depth", QJsonValue(0.4));
			QJsonObject jsonNeighObject;
			jsonNeighObject.insert("type", QJsonValue("TriangleMesh"));
			jsonNeighObject.insert("geometry", jsonBlockGeometries);
			jsonNeighObject.insert("properties", jsonNeighProperties);
			jsonArray.append(jsonNeighObject);
		}
	}	

	QJsonObject jsonUrbaneObj;
	jsonUrbaneObj.insert("type", QJsonValue("FeatureCollection"));
	jsonUrbaneObj.insert("features", jsonArray);

	QJsonDocument jsonDoc(jsonUrbaneObj);

	return jsonDoc.toJson(QJsonDocument::Compact);
}

bool GeometryQueryHandler::processBlock(PlutoBlock* pPlutoBlock, QJsonArray& jsonArray, const QString& blockCode)
{
	QList<PlutoLot*> lots = pPlutoBlock->getLots();
	
	QJsonObject jsonNeighObject;

	QJsonObject jsonNeighProperties;
	jsonNeighProperties.insert("scalar", QJsonValue::Null);
	jsonNeighProperties.insert("name", QJsonValue(blockCode));
	jsonNeighProperties.insert("depth", QJsonValue(0.4));

	QJsonArray jsonBlockGeometries;
	QString lineTemplate = QString("%1\n");
	bool isAlive = false;
	for (PlutoLot* pPlutoLot : lots)
	{
		QVector<int>* pLotGeometries = pPlutoLot->getGeometries();

		int yearIndex = Utilities::getYears().indexOf(m_pGeometryRequest->getYear());

		bool lotIsAlive = (*pLotGeometries)[yearIndex] != -1;//bool isAlive = pPlutoLot->isLotAlive(m_pGeometryRequest->getYear());

		isAlive |= lotIsAlive;

		if ( !lotIsAlive )
		{
			continue;
		}

		int geoId = (*pLotGeometries)[yearIndex];
		QString shape;
		m_pGeometryDS->getData(m_pGeometryRequest->getBoroughCode(), geoId, shape);
		
		//QString code = (blockCode.isEmpty()) ? pPlutoLot->getBBLCode() : blockCode ;
		//QJsonObject jsonObj = getUrbaneJsonObject(code, shape);
		
		QJsonDocument jsonShape = QJsonDocument::fromJson(shape.toUtf8());
		QJsonArray jsonNeighGeoemtries;
		jsonNeighGeoemtries = jsonShape.array();

		for (QJsonValue jsonGeometryPart : jsonNeighGeoemtries)
		{
			jsonBlockGeometries.append(jsonGeometryPart);
		}

	}
	
	if (isAlive)
	{
		jsonNeighObject.insert("type", QJsonValue("TriangleMesh"));
		jsonNeighObject.insert("geometry", jsonBlockGeometries);
		jsonNeighObject.insert("properties", jsonNeighProperties);
	
		jsonArray.append(jsonNeighObject);
	}

	return true;
}

QJsonObject GeometryQueryHandler::getUrbaneJsonObject(const QString& code, const QString& shape)
{
	QJsonObject jsonNeighObject;

	QJsonObject jsonNeighProperties;
	jsonNeighProperties.insert("scalar", QJsonValue::Null);
	jsonNeighProperties.insert("name", QJsonValue( code ) );
	jsonNeighProperties.insert("depth", QJsonValue(0.4));

	QString shapeStr = shape;
	QJsonDocument jsonShape = QJsonDocument::fromJson(shapeStr.toUtf8());
	QJsonArray jsonNeighGeoemtries;
	jsonNeighGeoemtries = jsonShape.array();

	jsonNeighObject.insert("type", QJsonValue("TriangleMesh"));
	jsonNeighObject.insert("geometry", jsonNeighGeoemtries);
	jsonNeighObject.insert("properties", jsonNeighProperties);

	return jsonNeighObject;
}

QString GeometryQueryHandler::getNTALayer()
{
	QList<QString> neighborhoodsCodes = m_pPlutoBorough->getPlutoNeighborhoodsCodes();

	QJsonArray jsonArray;
	for (QString neighborhoodCode : neighborhoodsCodes)
	{
		PlutoNeigh* pPlutoNeighborhood = m_pPlutoBorough->getPlutoNeighborhood(neighborhoodCode);
		QJsonObject jsonNeighObject = getUrbaneJsonObject(pPlutoNeighborhood->getName(), pPlutoNeighborhood->getGeometry());
		jsonArray.append(jsonNeighObject);
	}

	QJsonObject jsonUrbaneObj;
	jsonUrbaneObj.insert("type", QJsonValue("FeatureCollection"));
	jsonUrbaneObj.insert("features", jsonArray);

	QJsonDocument jsonDoc(jsonUrbaneObj);

	return jsonDoc.toJson(QJsonDocument::Compact);
}

QString GeometryQueryHandler::getCDLayer()
{
	QList<QString> cdCodes = m_pPlutoBorough->getPlutoCDsCodes();

	QJsonArray jsonArray;
	for (QString cdCode : cdCodes)
	{
		PlutoNeigh* pPlutoCD = m_pPlutoBorough->getPlutoCD(cdCode);
		QJsonObject jsonNeighObject = getUrbaneJsonObject(pPlutoCD->getName(), pPlutoCD->getGeometry());
		jsonArray.append(jsonNeighObject);
	}

	QJsonObject jsonUrbaneObj;
	jsonUrbaneObj.insert("type", QJsonValue("FeatureCollection"));
	jsonUrbaneObj.insert("features", jsonArray);

	QJsonDocument jsonDoc(jsonUrbaneObj);

	return jsonDoc.toJson(QJsonDocument::Compact);
	return QString();
}
