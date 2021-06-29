#include "HistogramQueryHandlerWorker.h"

HistogramQueryHandlerWorker::HistogramQueryHandlerWorker(AttributesDS* pAttributes, QList<PlutoLot*>* pLots, QVector< QVector<double>* >* pValues, const int& id, const int& initialIndex, const int& finalIndex, HistogramRequest* pHistogramRequest)
{
	m_pAttributesDS = pAttributes;
	m_pLots = pLots;
	m_pValues = pValues;
	m_id = id;
	m_initialIndex = initialIndex;
	m_finalIndex = finalIndex;
	m_pHistogramRequest = pHistogramRequest;
}

HistogramQueryHandlerWorker::~HistogramQueryHandlerWorker()
{
}

void HistogramQueryHandlerWorker::run()
{
	QString attrType = Utilities::getAttributeType(m_pHistogramRequest->getAttributeName());
	//for (PlutoLot* pPlutoLot : *m_pBoroughLots)
	for (int i = m_initialIndex; i < m_finalIndex; i++)
	{
		PlutoLot* pPlutoLot = m_pLots->at(i);
		QStringList years = (m_pHistogramRequest->getYear().isEmpty()) ? Utilities::getYears() : QStringList() << m_pHistogramRequest->getYear();
		for (QString year : years)
		{
			QVector<int>* pLotAttributes = pPlutoLot->getAttributes(attrType);
			
			int yearIndex = Utilities::getYears().indexOf(year);
			bool isLotAlive = pPlutoLot->isLotAlive(year);
			if ( !isLotAlive ) // (*pLotAttributes)[yearIndex] == -1)
			{
				continue;
			}

			int attributeID = (*pLotAttributes)[yearIndex];
			QString attributeData;
			QString requestAttributeName = m_pHistogramRequest->getAttributeName().toUpper();
			m_pAttributesDS->getData(m_pHistogramRequest->getBoroughCode(), attributeID, requestAttributeName, attributeData);

			if (attributeData.compare("unknown", Qt::CaseInsensitive) == 0)
			{
				continue;
			}

			double value = attributeData.toDouble();

			m_pValues->at(m_id)->push_back(value);
		}
	}
}
