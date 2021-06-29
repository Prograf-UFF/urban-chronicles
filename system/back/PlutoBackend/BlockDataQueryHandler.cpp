#include "BlockDataQueryHandler.h"

#include <QVector>

#include <QJsonDocument>
#include <QJsonArray>
#include <QJsonObject>
#include <QJsonValue>

#include "Utilities.h"

BlockDataQueryHandler::BlockDataQueryHandler(BlockDataRequest* pBlockRequest, QList<PlutoLot*>* pBoroughLots, AttributesDS* pAttributesHighDS, AttributesDS* pAttributesLowDS, AttributesDS* pAttributesCategDS)
{
	m_pBlockDataRequest = pBlockRequest;
	m_pBoroughLots = pBoroughLots;
	m_pAttributesHighDS = pAttributesHighDS;
	m_pAttributesLowDS = pAttributesLowDS;
	m_pAttributesCategDS = pAttributesCategDS;
}

BlockDataQueryHandler::~BlockDataQueryHandler()
{
}


AttributesDS* BlockDataQueryHandler::getAttributesDS(const QString& attrType)
{
	if (attrType.compare("high", Qt::CaseInsensitive) == 0)
	{
		return m_pAttributesHighDS;
	}
	else if (attrType.compare("low", Qt::CaseInsensitive) == 0)
	{
		return m_pAttributesLowDS;
	}
	return m_pAttributesCategDS;
}

QJsonObject BlockDataQueryHandler::processLot(PlutoLot* pPlotoLot, const QString& attrType, const QString& year)
{
	QStringList attributes = Utilities::getAttributes(attrType);
	int yearID = Utilities::getYearIndex(year);
	QVector<int>* plutoLotAttrIndex = pPlotoLot->getAttributes(attrType);
	int attrYearIndex = plutoLotAttrIndex->at(yearID);
	AttributesDS* pAttrDS = getAttributesDS(attrType);
	QJsonObject plutoLotAttrDataJson;
	for (QString attribute : attributes)
	{
		QString data;
		pAttrDS->getData(m_pBlockDataRequest->getBoroughCode(), attrYearIndex, attribute, data );
		plutoLotAttrDataJson.insert(attribute, data);
	}
	return plutoLotAttrDataJson;
}

QJsonObject BlockDataQueryHandler::processLot(PlutoLot* pPlutoLot)
{
	QJsonObject lotJson;
	lotJson.insert("name", QJsonValue(pPlutoLot->getBBLCode()));

	QStringList availableYears = Utilities::getYears();
	QStringList attrTypes = Utilities::getTypes();

	QJsonObject attrTypeDatajson;
	for (QString attrType : attrTypes)
	{	
		QJsonObject yearAttrDataJson;
		for (QString year : availableYears)
		{
			QJsonObject attrTypeYearDataJson;
			if (pPlutoLot->isLotAlive(year))
			{
				attrTypeYearDataJson = processLot(pPlutoLot, attrType, year);
			}
			yearAttrDataJson.insert(year, attrTypeYearDataJson);
		}
		attrTypeDatajson.insert(attrType, yearAttrDataJson);
	}
	lotJson.insert("data", attrTypeDatajson);
	/*QStringList attributes = Utilities::getAttributes(attrType);
	for (QString attribute : attributes)
	{

	}*/
	

	return lotJson;
}

QString BlockDataQueryHandler::getData()
{
	QJsonArray jsonArray;
	for (PlutoLot* pPlutoLot : *m_pBoroughLots)
	{
		if (pPlutoLot->getBlockCode() == m_pBlockDataRequest->getBlockCode())
		{
			QJsonObject lotJsonObject = processLot(pPlutoLot);
			jsonArray.push_back(lotJsonObject);
		}
	}
	QJsonDocument jsonDoc(jsonArray);
	return jsonDoc.toJson(QJsonDocument::Compact);
}