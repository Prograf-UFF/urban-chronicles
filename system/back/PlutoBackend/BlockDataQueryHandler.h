#pragma once

#include <QList>

#include "BlockDataRequest.h"
#include "PlutoLot.h"
#include "AttributesDS.h"

class BlockDataQueryHandler
{

private:
	BlockDataRequest* m_pBlockDataRequest;
	QList<PlutoLot*>* m_pBoroughLots;
	AttributesDS* m_pAttributesHighDS;
	AttributesDS* m_pAttributesLowDS;
	AttributesDS* m_pAttributesCategDS;

private:
	QJsonObject processLot(PlutoLot* pPlutoLot);
	QJsonObject processLot(PlutoLot* pPlotoLot, const QString& attrType, const QString& year);
	AttributesDS* getAttributesDS(const QString& attrType);

public:
	BlockDataQueryHandler(BlockDataRequest* pBlockRequest, QList<PlutoLot*>* pBoroughLots, AttributesDS* pAttributesHighDS, AttributesDS* pAttributesLowDS, AttributesDS* pAttributesCategDS);
	~BlockDataQueryHandler();

	QString getData();

};

