#pragma once

#include <QString>
#include <QJsonDocument>
#include <QJsonObject>
#include <QJsonArray>
#include <QJsonValue>

#include "GeometryRequest.h"
#include "GeometriesDS.h"
#include "PlutoBorough.h"
#include "PlutoBlock.h"
#include "PlutoLot.h"
#include "Utilities.h"

class GeometryQueryHandler
{
public:
	GeometryQueryHandler(PlutoBorough* plutoModel, GeometryRequest* geoRequest, GeometriesDS* pGeometryDS );
	~GeometryQueryHandler();

	QString getNeighborhoodsLayer();
	QString getBlocksLayer();
	QString getLotsLayer();


private:
	bool processBlock(PlutoBlock* pPlutoBlock, QJsonArray& jsonArray, const QString& blockCode);
	QJsonObject getUrbaneJsonObject(const QString& code, const QString& shape);
	QString getNTALayer();
	QString getCDLayer();

private :
	PlutoBorough* m_pPlutoBorough;
	GeometryRequest* m_pGeometryRequest;
	GeometriesDS* m_pGeometryDS;
};

