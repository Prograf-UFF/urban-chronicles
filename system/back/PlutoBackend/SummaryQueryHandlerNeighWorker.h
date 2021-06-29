#pragma once
#include <QVector>

#include <QJsonObject>
#include <QJsonArray>
#include <QJsonValue>
#include <QRunnable>

#include "PlutoNeigh.h"
#include "PlutoBlock.h"
#include "PlutoLot.h"

#include "AttributesDS.h"
#include "SummaryRequest.h"
#include "Utilities.h"

class SummaryQueryHandlerNeighWorker : public QRunnable
{
public:
	SummaryQueryHandlerNeighWorker(const int& id, PlutoNeigh* pPlutoNeigh , AttributesDS* pAttributesDS, QVector< QVector<double>* >* pResults, QVector< QVector<bool>* >* pIsAliveResult, QVector< QVector<bool>* >* pIsActiveResult, QVector< QVector<bool>* >* pIsValidResult, SummaryRequest* pSummaryRequest);
	~SummaryQueryHandlerNeighWorker();

	void run();

private:
	int m_id;
	PlutoNeigh* m_pPlutoNeigh;
	AttributesDS* m_pAttributesDS;
	SummaryRequest* m_pSummaryRequest;
	QVector< QVector<double>* >* m_pResults;
	QVector< QVector<bool>* >* m_pIsAliveResult;
	QVector< QVector<bool>* >* m_pIsActiveResult;
	QVector< QVector<bool>* >* m_pIsValidResult;
};

