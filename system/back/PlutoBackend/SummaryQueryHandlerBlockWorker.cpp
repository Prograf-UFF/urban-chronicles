#include "SummaryQueryHandlerBlockWorker.h"

SummaryQueryHandlerBlockWorker::SummaryQueryHandlerBlockWorker(PlutoBlock* pPlutoBlock, QVector<QVector<QJsonObject>*>* pData, SummaryRequest* pSummaryRequest, AttributesDS* pAttributesDS, QVector<QPair<double, double>>* pMinMaxs, const int& id)
{
	m_pPlutoBlock = pPlutoBlock;
	m_pData = pData;
	m_pMinMaxs = pMinMaxs;
	m_pSummaryRequest = pSummaryRequest;
	m_pAttributesDS = pAttributesDS;
	m_id = id;
	m_dBlockMin = LONG_MAX;
	m_dBlockMax = -LONG_MIN;
	m_bFirstRound = true;
}

SummaryQueryHandlerBlockWorker::~SummaryQueryHandlerBlockWorker()
{
}

void SummaryQueryHandlerBlockWorker::run()
{
	QStringList years = Utilities::getYears();
	for (int yearId = 0; yearId < years.size(); yearId++)
	{
		QString currentYear = years.at(yearId);
		
		QVector<QJsonObject>* jsonYearData = m_pData->at(yearId);
		
		QJsonObject jsonYearBlockAnswer = processBlockFromYear(currentYear);
		(*jsonYearData)[m_id] = jsonYearBlockAnswer;
	}
	(*m_pMinMaxs)[m_id] = QPair<double, double>(m_dBlockMin, m_dBlockMax);
}

QJsonObject SummaryQueryHandlerBlockWorker::processBlockFromYear(const QString& year)
{
	QString metrics = m_pSummaryRequest->getMetrics();
	QString attributeName = m_pSummaryRequest->getAttributeName().toUpper();;
	QString attrType = Utilities::getAttributeType(attributeName);

	QList<PlutoLot*> lots = m_pPlutoBlock->getLots();
	
	double blockValue = 0;

	bool minSelected		= metrics.compare("Min", Qt::CaseInsensitive) == 0;
	bool maxSelected		= metrics.compare("Max", Qt::CaseInsensitive) == 0;
	bool countSelected		= metrics.compare("count", Qt::CaseInsensitive) == 0 || m_pSummaryRequest->isCategorical();
	bool lotsAliveSelected	= attributeName.compare("LOTSALIVE", Qt::CaseInsensitive) == 0;

	if (minSelected)
	{
		blockValue = LONG_MAX;
	}
	else if (maxSelected)
	{
		blockValue = -LONG_MIN;
	}

	bool countHandler	= lotsAliveSelected || countSelected;
	int lotCount		= 0;
	bool isAlive		= false;
	bool isActive		= false;
	bool isValid		= false;
	
	for (PlutoLot* pPlutoLot : lots)
	{
		QVector<int>* pAttributes = pPlutoLot->getAttributes(attrType);
		QVector<int>* pGeoemtries = pPlutoLot->getGeometries();
		
		int yearIndex		= Utilities::getYears().indexOf(year);
		int attributeID		= (*pAttributes)[yearIndex];
		int geometryID		= (*pGeoemtries)[yearIndex];

		bool lotIsAlive		= geometryID != -1 && attributeID != -1;
		bool lotIsActive	= pPlutoLot->isLotAlive(year);
		bool lotIsValid		= false;
		
		if (lotIsAlive && lotIsActive)
		{
			if (lotsAliveSelected)
			{
				lotCount++;
				lotIsValid = true;
			}
			else
			{
				QString attributeData;
				m_pAttributesDS->getData(m_pSummaryRequest->getBoroughCode(), attributeID, attributeName, attributeData);
				
				lotIsValid = attributeData.compare("unknown", Qt::CaseInsensitive) != 0;

				if (lotIsValid)
				{
					double value = 0;
					if (m_pSummaryRequest->isCategorical())
					{
						lotIsValid = m_pSummaryRequest->getCategory().compare(attributeData, Qt::CaseInsensitive) == 0;
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
						lotCount++;
						
						if (minSelected)
						{
							if (value < blockValue)
							{
								blockValue = value;
							}
						}
						else if (maxSelected)
						{
							if (value > blockValue)
							{
								blockValue = value;
							}
						}
						else
						{
							blockValue += value;
						}
					}
				}
			}
		}

		isAlive		|= lotIsAlive;
		isActive	|= lotIsActive;
		isValid		|= lotIsValid;
	}

	if (countHandler)
	{
		blockValue = lotCount;
		isValid = (blockValue > 0);
	}

	if (metrics.compare("average", Qt::CaseInsensitive) == 0)
	{
		blockValue = (lotCount > 0) ? blockValue / lotCount : 0;
		isValid = (blockValue > 0);
	}	

	if (isValid)
	{
		// check block min and max
		if (m_bFirstRound)
		{
			m_dBlockMin = blockValue;
			m_dBlockMax = blockValue;
			m_bFirstRound = false;
		}
		else
		{
			if (blockValue < m_dBlockMin)
			{
				m_dBlockMin = blockValue;
			}
			if (blockValue > m_dBlockMax)
			{
				m_dBlockMax = blockValue;
			}
		}
	}

	QJsonObject jsonYearAnswer;
	jsonYearAnswer.insert("name", QJsonValue(m_pPlutoBlock->getStrCode()));
	jsonYearAnswer.insert("code", QJsonValue(m_pPlutoBlock->getStrCode()));
	jsonYearAnswer.insert("isAlive", QJsonValue(isAlive));
	jsonYearAnswer.insert("isActive", QJsonValue(isActive));
	jsonYearAnswer.insert("isValid", QJsonValue(isValid));
	jsonYearAnswer.insert("value", QJsonValue(blockValue));

	return jsonYearAnswer;
}
