#include "SummaryQueryHandlerNeighWorker.h"

SummaryQueryHandlerNeighWorker::SummaryQueryHandlerNeighWorker(const int& id, PlutoNeigh* pPlutoNeigh, AttributesDS* pAttributesDS, QVector< QVector<double>* >* pResults, QVector< QVector<bool>* >* pIsAliveResult, QVector< QVector<bool>* >* pIsActiveResult, QVector< QVector<bool>* >* pIsValidResult, SummaryRequest* pSummaryRequest)
{
	m_id				= id;
	m_pPlutoNeigh		= pPlutoNeigh;
	m_pAttributesDS		= pAttributesDS;
	m_pResults			= pResults;
	m_pIsAliveResult	= pIsAliveResult;
	m_pIsActiveResult	= pIsActiveResult;
	m_pIsValidResult	= pIsValidResult;
	m_pSummaryRequest	= pSummaryRequest;
}

SummaryQueryHandlerNeighWorker::~SummaryQueryHandlerNeighWorker()
{
}

void SummaryQueryHandlerNeighWorker::run()
{
	QStringList years = Utilities::getYears();

	QString metrics = m_pSummaryRequest->getMetrics();
	QString attributeName = m_pSummaryRequest->getAttributeName();
	QString attrType = Utilities::getAttributeType(attributeName);
	
	bool minSelected		= metrics.compare("min", Qt::CaseInsensitive) == 0;
	bool maxSelected		= metrics.compare("max", Qt::CaseInsensitive) == 0;
	bool countSelected		= metrics.compare("count", Qt::CaseInsensitive) == 0 || m_pSummaryRequest->isCategorical();
	bool lotsAliveSelected	= attributeName.compare("LOTSALIVE", Qt::CaseInsensitive) == 0;
	bool countHandler		= lotsAliveSelected || countSelected;

	QJsonObject neighSummary;
	QList<int> blocksCodes = m_pPlutoNeigh->getPlutoBlocksCodes();
	QVector<int> countYears( years.size() );

	for (int blockCode : blocksCodes)
	{
		PlutoBlock* pPlutoBlock = m_pPlutoNeigh->getPlutoBlock(blockCode);

		QList<PlutoLot*> lots = pPlutoBlock->getLots();

		for (PlutoLot* pPlutoLot : lots) {
			for (QString year : years)
			{
				int yearID = Utilities::getYearIndex(year);
				double neighValue = m_pResults->at(m_id)->at(yearID);

				QVector<int>* pAttributes = pPlutoLot->getAttributes(attrType);
				QVector<int>* pGeometries = pPlutoLot->getGeometries();

				int attributeID		= pAttributes->at(yearID);
				int geometryID		= pGeometries->at(yearID);

				if (attributeID == -1 && geometryID != -1)
					qDebug() << pPlutoLot->getBBLCode();

				bool lotIsAlive		= geometryID != -1 && attributeID != -1;
				bool lotIsActive	= pPlutoLot->isLotAlive(year);
				bool lotIsValid		= false;


				if (lotIsAlive && lotIsActive)
				{
					if (lotsAliveSelected)
					{
						countYears[yearID]++;
						lotIsValid = true;
					}
					else
					{
						QString attributeData;
						QString requestAttributeName = m_pSummaryRequest->getAttributeName().toUpper();
						m_pAttributesDS->getData(m_pSummaryRequest->getBoroughCode(), attributeID, requestAttributeName, attributeData);

						lotIsValid = attributeData.compare("unknown", Qt::CaseInsensitive) != 0;

						if (lotIsValid)
						{
							double value = 0;
							if (m_pSummaryRequest->isCategorical())
							{
								lotIsValid = m_pSummaryRequest->getCategory().compare(attributeData, Qt::CaseInsensitive) == 0 ;
							}
							else
							{
								value = attributeData.toDouble();
								if (attributeName.indexOf("FAR", Qt::CaseInsensitive) < 0)
								{
									if (attributeName.indexOf("AREA", Qt::CaseInsensitive) > 0)
									{
										lotIsValid = (value > 0);
									}
									else 
									{
										lotIsValid = (value >= 0);
									}
								}
								else
								{
									if (attributeName.indexOf("-", Qt::CaseInsensitive) < 0)
									{
										lotIsValid = (value >= 0);
									}
								}
							}
							
							if (lotIsValid)
							{
								countYears[yearID]++;

								if (minSelected)
								{
									if (value < neighValue)
									{
										neighValue = value;
									}
								}
								else if (maxSelected)
								{
									if (value > neighValue)
									{
										neighValue = value;
									}
								}
								else
								{
									neighValue += value;
								}
							}
						}
					}
				}
				(*(*m_pResults)[m_id])[yearID]			= neighValue;
				(*(*m_pIsAliveResult)[m_id])[yearID]	|= lotIsAlive;
				(*(*m_pIsActiveResult)[m_id])[yearID]	|= lotIsActive;
				(*(*m_pIsValidResult)[m_id])[yearID]	|= lotIsValid;
			}
		}
	}

	if (metrics.compare("average", Qt::CaseInsensitive) == 0 || countHandler)
	{
		for (QString year : years)
		{
			int yearID = Utilities::getYearIndex(year);
			if (metrics.compare("average", Qt::CaseInsensitive) == 0)
			{
				double neighValue = (*(*m_pResults)[m_id])[yearID];
				(*(*m_pResults)[m_id])[yearID] = neighValue / countYears[yearID];
			}
			else if (countHandler)
			{
				(*(*m_pResults)[m_id])[yearID] = countYears[yearID];
			}
		}
	}	
}
