#pragma once
#include <QRunnable>
#include <QElapsedTimer>
#include <QDebug>

#include "FilterRequestBoroughData.h"
#include "PlutoNeigh.h"
#include "AttributesDS.h"
#include "Utilities.h" 

class FilterQueryHandlerNeighWorker : public QRunnable
{
public :
    FilterQueryHandlerNeighWorker(FilterRequestBoroughData* filterData, AttributesDS* pAttributeHighDS, AttributesDS* pAttributeLowDS, AttributesDS* pAttributeCategDS, QList<PlutoLot*>* pBoroughLots, const int& startIndex, const int& finalIndex, const bool& processDefault);
	~FilterQueryHandlerNeighWorker();

	void run();

private:
	bool isInsideTheRange(PlutoLot* pPlutoLot, const QString& year);

    FilterRequestBoroughData* m_pFilterData;
	AttributesDS* m_pAttributesHighDS;
	AttributesDS* m_pAttributesLowDS;
	AttributesDS* m_pAttributesCategDS;
	QList<PlutoLot*>* m_pBoroughLots;
	int m_startIndex;
	int m_finalIndex;
	bool m_processDefault;
};

