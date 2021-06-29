#pragma once

#include <QMap>
#include <QString>
#include <QStringList>
#include <QDebug>
#include <QFile>
#include <QTextStream>
#include <QList>

#include <QJsonDocument>
#include <QJsonObject>
#include <QJsonValue>
#include <QJsonArray>

#include "types.h"
#include "Utilities.h"
#include "PlutoBorough.h"
#include "PlutoNeigh.h"
#include "PlutoLot.h"
#include "AttributesDS.h"
#include "GeometriesDS.h"
#include "POPData.h"


class PlutoModel
{
public:
	PlutoModel();
	~PlutoModel();
	
    bool fetchYears(QString& jsonResponse);
    bool fetchAttributes(QString& jsonResponse);
	bool fetchNAttributes(QString& jsonResponse);
    bool fetchBoroughs(QString& jsonResponse);
    bool fetchMetrics(QString& jsonResponse);
	bool fetchLayer(const QString& requestData, const LayerType& layerType, QString& jsonResponse);
	bool fetchSummaries(const QString& requestData, const LayerType& layerType, QString& jsonResponse);
	bool fetchHistogram(const QString& requestData, const LayerType& layerType, QString& jsonResponse);
	bool filterDataSet(const QString&requestData, QString& jsonResponse);
	bool fetchPOPLayer(const QString& requestData, QString& jsonResponse);
	bool fetchBlockData(const QString& requestData, QString& jsonResponse);

	bool parseRequestData(const QString& requestJson, QMap<QString, QString>& requestParams);

	bool loadNeighborhoodsData(const QString& dataPath, QString& errorMessage);
	bool loadCDData(const QString& dataPath, QString& errorMessage);
	bool loadDataset(const QString& dataPath, QString& message);
	bool loadCachedSummaries(const QString& dataPath, QString& message);
	bool loadGeometries(const QString& dataPath, QString& message);
	bool loadAttributes(const QString& dataPath, QString& message);
	bool loadPOPData(const QString& dataPath, QString& errorMessage);
	bool loadCategoricalAttributesMeta(const QString& dataPath, QString& errorMessage);

	PlutoBorough* getPlutoBorough(const int& boroughCode);

private: /*Functions*/
	void initBoroughs();
	
	bool loadBoroughData(const QString& datasetFileName, const QString& boroughName, QString& errorMessage);
	bool loadCachedSummary(const QString& year, const QString& borough, const QString& cacheFileName, QString& errorMessage);

	bool extractPropertyValue(const QJsonValue& jsonObject, const QString& propertyName, QString& propertyValue);
    bool loadDataStructure(const QString& fileNameTemplate, AbstractDS& abstractDS, QString& errorMessage);
			
private: /*Members*/
	AttributesDS m_attributesHighDS;
	AttributesDS m_attributesLowDS;
	AttributesDS m_attributesCategDS;
	GeometriesDS m_geometriesDS;
	QList<PlutoNeigh*> m_lNeighs;
	QList< PlutoBorough* > m_lBoroughs;
	QList< QList<POPData*>* > m_lPOPData;
	QList< QList< PlutoLot* >* > m_lBoroughLot;
};
