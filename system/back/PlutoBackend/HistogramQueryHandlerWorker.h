#pragma once

#include <QString>
#include <QList>
#include <QVector>
#include <QRunnable>

#include <QJsonDocument>
#include <QJsonObject>
#include <QJsonArray>
#include <QJsonValue>

#include "AttributesDS.h"
#include "PlutoLot.h"
#include "HistogramRequest.h"

class HistogramQueryHandlerWorker : public QRunnable
{
public :
	HistogramQueryHandlerWorker(AttributesDS* pAttributes, QList<PlutoLot*>* pLots, QVector< QVector<double>* >* pValues, const int& id, const int& initialIndex, const int& finalIndex, HistogramRequest* pHistogramRequest);
	~HistogramQueryHandlerWorker();

	void run();

private:
	AttributesDS* m_pAttributesDS;
	QList<PlutoLot*>* m_pLots;
	QVector< QVector<double>* >* m_pValues;
	int m_id;
	int m_initialIndex;
	int m_finalIndex;
	HistogramRequest* m_pHistogramRequest;
};

