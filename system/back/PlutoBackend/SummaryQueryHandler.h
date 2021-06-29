#pragma once

#include <QList>
#include <QVector>
#include <QPair>
#include <QMap>
#include <QString>
#include <QJsonDocument>
#include <QJsonArray>
#include <QJsonObject>
#include <QJsonValue>

#include <QElapsedTimer>
#include <QThread>
#include <QThreadPool>

#include "PlutoBorough.h"
#include "SummaryRequest.h"
#include "SummaryQueryHandlerBlockWorker.h"
#include "SummaryQueryHandlerNeighWorker.h"
#include "AttributesDS.h"

class SummaryQueryHandler
{
public:
	SummaryQueryHandler(PlutoBorough* pPLutoBorough, SummaryRequest* pSummaryRequest, AttributesDS* pAttributesDS);
	~SummaryQueryHandler();

	QString getNeighborhoodSummary();
	QString getBlockSummary();
	QString getLotsSummary();

private:
	PlutoBorough* m_pPlutoBorough;
	SummaryRequest* m_pSummaryRequest;
	AttributesDS* m_pAttributesDS;
};

