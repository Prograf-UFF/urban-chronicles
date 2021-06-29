#pragma once
#include <QJsonDocument>
#include <QJsonArray>
#include <QJsonObject>
#include <QJsonValue>

#include "types.h"

class AbstractRequest
{
public :
	AbstractRequest();
	virtual ~AbstractRequest();

	inline int getBoroughCode() { return m_boroughCode; };
	inline int getBlockCode() { return m_blockCode; };
	inline QString getNeighborhoodCode() { return m_neighborhoodCode; };
	inline LayerType getLayerType() { return layerType; };
	inline DatasetType getDatasetType() { return m_datasetType; };
	inline bool getJumpLayer() { return m_jumpLayer; };
	
	virtual bool parseRequest(const QString& param) = 0;

	DatasetType parserDatasetType(const QString& polygon);

protected:
	bool m_jumpLayer;
	LayerType layerType;
	int m_boroughCode;
	QString m_neighborhoodCode;
	int m_blockCode;
	DatasetType m_datasetType;
};

