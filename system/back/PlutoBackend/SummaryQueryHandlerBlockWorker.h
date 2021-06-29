#pragma once
#include <QRunnable>
#include <QVector>
#include <QPair>

#include <QJsonDocument>
#include <QJsonObject>
#include <QJsonArray>
#include <QJsonValue>

#include "PlutoBlock.h"
#include "PlutoLot.h"
#include "SummaryRequest.h"
#include "AttributesDS.h"
#include "Utilities.h"

class SummaryQueryHandlerBlockWorker : public QRunnable
{
public:
	SummaryQueryHandlerBlockWorker(PlutoBlock* pPlutoBlock, QVector<QVector<QJsonObject>*>* pData, SummaryRequest* pSummaryRequest, AttributesDS* pAttributesDS, QVector<QPair<double, double>>* pMinMaxs, const int& id);
	~SummaryQueryHandlerBlockWorker();

	void run();

private:
	QJsonObject processBlockFromYear(const QString& year);

private:
	PlutoBlock* m_pPlutoBlock;
	QVector<QVector<QJsonObject>*>* m_pData;
	QVector<QPair<double, double>>* m_pMinMaxs;
	SummaryRequest* m_pSummaryRequest;
	AttributesDS* m_pAttributesDS;
	int m_id;
	double m_dBlockMin;
	double m_dBlockMax;
	bool m_bFirstRound;
};

