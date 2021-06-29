#include "FilterQueryHandler.h"

FilterQueryHandler::FilterQueryHandler(QList< QList< PlutoLot* >* >* pBoroughsLots, FilterRequest* pFilterRequest, AttributesDS* pAttributesHighDS, AttributesDS* pAttributesLowDS, AttributesDS* pAttributesCategDS)
{
	m_pBoroughsLots = pBoroughsLots;
	m_pFilterRequest = pFilterRequest;
	m_pAttributesHighDS = pAttributesHighDS;
	m_pAttributesLowDS = pAttributesLowDS;
	m_pAttributesCategDS = pAttributesCategDS;
}

FilterQueryHandler::~FilterQueryHandler()
{

}

void FilterQueryHandler::getDataFiltered()
{
    const QList<FilterRequestBoroughData>& filterDatas = m_pFilterRequest->getFilters();
    for (FilterRequestBoroughData filterData : filterDatas)
	{
		int boroughId = Utilities::getBoroughID(filterData.getBoroughName());
        QList<PlutoLot*>* pBoroughLots = m_pBoroughsLots->at(boroughId - 1);
        if (pBoroughLots == NULL) continue;
        bool processDefault = filterData.processAsDefault();
        doBoroughFiltering(&filterData, pBoroughLots, processDefault);
    }
}

void FilterQueryHandler::doBoroughFiltering(FilterRequestBoroughData* pFilterData, QList<PlutoLot*>* pBoroughLots, const bool& processDefault)
{
    QThreadPool* threadPool = QThreadPool::globalInstance();
    int threadsCount = threadPool->maxThreadCount();
	
	int numberOfLotsSelected = pBoroughLots->size();

	int elementsPartition = numberOfLotsSelected / threadsCount;
	QElapsedTimer timer;
	timer.start();
    bool sequential = false;
	for (int i = 0; i < threadsCount; i++)
	{
		int initialIndex = i * elementsPartition;
		int finalIndex = (i + 1) * elementsPartition;
		finalIndex = (finalIndex < numberOfLotsSelected) ? finalIndex : numberOfLotsSelected - 1;

        FilterQueryHandlerNeighWorker* filterNeighborWorker = new FilterQueryHandlerNeighWorker(pFilterData, m_pAttributesHighDS, m_pAttributesLowDS, m_pAttributesCategDS, pBoroughLots, initialIndex, finalIndex, processDefault);
        if (sequential) {
            filterNeighborWorker->run();
        }
        else {
            filterNeighborWorker->setAutoDelete(true);
            threadPool->start(filterNeighborWorker);
        }
	}
    if (!sequential) {
        threadPool->waitForDone();
    }
	qDebug() << "End of data filtering " << timer.elapsed() << " lots: " << numberOfLotsSelected;
}
