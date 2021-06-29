#pragma once

#include <QString>
#include <QDebug>
#include <QPair>
#include <QList>
#include <QJsonDocument>
#include <QJsonObject>
#include <QJsonArray>
#include <QJsonValue>
#include <QElapsedTimer>

#include <QThread>
#include <QThreadPool>

#include "PlutoBorough.h"
#include "PlutoNeigh.h"
#include "PlutoBlock.h"
#include "PlutoLot.h"

#include "AttributesDS.h"
#include "HistogramRequest.h"
#include "HistogramQueryHandlerWorker.h"


class HistogramQueryHandler
{

public:
	HistogramQueryHandler(PlutoBorough* pPlutoBorough, HistogramRequest* pHistogramRequest, AttributesDS* pAttributesDS, QList<PlutoLot*>* pBoroughLots);
	~HistogramQueryHandler();

	QString getNeighborhoodSummary();
	QString getBlockSummary();
	QString getLotsSummary();

private:
	int findHistogramClassIndex(const QVector<double>& limits, const double& value);
	QString categoricalHistogramHandler();
	QString numericalHistogramHandler();

private:
	PlutoBorough* m_pPlutoBorough;
	HistogramRequest* m_pHistogramRequest;
	AttributesDS* m_pAttributesDS;
	QList<PlutoLot*>* m_pBoroughLots;
};

