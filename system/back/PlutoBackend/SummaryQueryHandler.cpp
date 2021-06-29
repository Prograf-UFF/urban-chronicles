#include "SummaryQueryHandler.h"

SummaryQueryHandler::SummaryQueryHandler(PlutoBorough* pPLutoBorough, SummaryRequest* pSummaryRequest, AttributesDS* pAttributeDS)
{
	m_pPlutoBorough = pPLutoBorough;
	m_pSummaryRequest = pSummaryRequest;
	m_pAttributesDS = pAttributeDS;
}

SummaryQueryHandler::~SummaryQueryHandler()
{
}

QString SummaryQueryHandler::getBlockSummary()
{
	PlutoNeigh* pPlutoNeigh = NULL;

	switch (m_pSummaryRequest->getDatasetType())
	{
		case DatasetType::NTA:
			pPlutoNeigh = m_pPlutoBorough->getPlutoNeighborhood(m_pSummaryRequest->getNeighborhoodCode());
			break;
		case DatasetType::CD:
			pPlutoNeigh = m_pPlutoBorough->getPlutoCD(m_pSummaryRequest->getNeighborhoodCode());
			break;
	}
	
	if (pPlutoNeigh == NULL)
	{
		return QString("Problem trying to get Summary");
	}

	QList<int> blocksCode = pPlutoNeigh->getPlutoBlocksCodes();

	QStringList years = Utilities::getYears();
	QVector<QVector<QJsonObject>*> yearData(years.size());

	//initialize dataVector
	for (int i = 0; i < years.size() ; i++)
	{
		yearData[i] = new QVector<QJsonObject>(blocksCode.size());
	}

	QVector<QPair<double, double>> minMaxs(blocksCode.size());

	QThreadPool* threadPool = QThreadPool::globalInstance();
	for (int blockID = 0; blockID < blocksCode.size(); blockID++)
	{
		int blockCode = blocksCode.at(blockID);
		PlutoBlock* pPlutoBlock = pPlutoNeigh->getPlutoBlock(blockCode);
		SummaryQueryHandlerBlockWorker* blockWorker = new SummaryQueryHandlerBlockWorker(pPlutoBlock, &yearData, m_pSummaryRequest, m_pAttributesDS, &minMaxs, blockID);
		blockWorker->setAutoDelete(true);
		//blockWorker->run();
		threadPool->start(blockWorker);
	}

	threadPool->waitForDone();

	QJsonObject yearJsonObject;
	double min = 0;
	double max = 0;
	bool firstRound = true;
	bool findMinMax = true;
	for (int yearId = 0; yearId < yearData.size(); yearId++)
	{
	QString currentYear = years.at(yearId);
	QJsonArray jsonYearData;
	QVector<QJsonObject>* yearBlockData = yearData.at(yearId);
	for (int blockId = 0; blockId < yearBlockData->size(); blockId++)
	{
		QJsonObject jsonBlockObj = yearBlockData->at(blockId);
		jsonYearData.append(jsonBlockObj);
		if (findMinMax)
		{
			QPair<double, double> blockMinMax = minMaxs.at(blockId);
			double blockMin = blockMinMax.first;
			double blockMax = blockMinMax.second;
			if (firstRound)
			{
				min = blockMin;
				max = blockMax;
				firstRound = false;
			}
			else
			{
				if (blockMin < min)
				{
					min = blockMin;
				}
				if (blockMax > max)
				{
					max = blockMax;
				}
			}
		}
	}
	findMinMax = false;
	QString yearFrontFormat = currentYear;
	if (currentYear.indexOf(".2") < 0)
	{
		yearFrontFormat = QString("%1.1").arg(currentYear);
	}

	yearJsonObject.insert(yearFrontFormat, jsonYearData);
	}

	yearJsonObject.insert("min", QJsonValue(min));
	yearJsonObject.insert("max", QJsonValue(max));

	QJsonDocument jsonDoc(yearJsonObject);
	return jsonDoc.toJson(QJsonDocument::Compact);
}

QString SummaryQueryHandler::getLotsSummary()
{
	PlutoNeigh* pPlutoNeigh = NULL;

	switch (m_pSummaryRequest->getDatasetType())
	{
		case DatasetType::NTA:
			pPlutoNeigh = m_pPlutoBorough->getPlutoNeighborhood(m_pSummaryRequest->getNeighborhoodCode());
			break;
		case DatasetType::CD:
			pPlutoNeigh = m_pPlutoBorough->getPlutoCD(m_pSummaryRequest->getNeighborhoodCode());
			break;
	}
	
	if (pPlutoNeigh == NULL)
	{
		return QString("Problem trying to get Summary");
	}

	QStringList years = Utilities::getYears();
	QJsonObject yearJsonObject;
	QString metrics = m_pSummaryRequest->getMetrics();
	QString attrType = Utilities::getAttributeType(m_pSummaryRequest->getAttributeName());

	bool lotsAliveSelected = m_pSummaryRequest->getAttributeName().compare("LOTSALIVE", Qt::CaseInsensitive) == 0;
	bool countSelected = metrics.compare("count", Qt::CaseInsensitive) == 0 || m_pSummaryRequest->isCategorical();

	bool countHandler = lotsAliveSelected || countSelected;


	bool firstRound = true;
	double min = 0;
	double max = 0;

	QList<int> blockList = (m_pSummaryRequest->getJumpLayer()) ? pPlutoNeigh->getPlutoBlocksCodes() : QList<int>() << m_pSummaryRequest->getBlockCode();
	
	for (QString year : years)
	{	
		QJsonArray yearSummaries;
		for (int blockCode : blockList)
		{
			PlutoBlock* pPlutoBlock = pPlutoNeigh->getPlutoBlock(blockCode);
			QList<PlutoLot*> lots = pPlutoBlock->getLots();

			for (PlutoLot* pPlutoLot : lots)
			{
				QJsonObject lotSummaries;
				
				QVector<int>* pAttributes = pPlutoLot->getAttributes(attrType);
				QVector<int>* pGeometries = pPlutoLot->getGeometries();

				int yearIndex = Utilities::getYears().indexOf(year);
				int attributeID = (*pAttributes)[yearIndex];
				int geometryID = (*pGeometries)[yearIndex];

				bool isAlive = geometryID != -1 && attributeID != -1;
				bool isActive = pPlutoLot->isLotAlive(year);
				bool isValid = false;

				double value = 0;

				//if (!showCount && foundValue)
				if (isAlive && isActive)
				{
					if (lotsAliveSelected)
					{
						value = 1;
						isValid = true;
					}
					else
					{
						QString attributeData;
						QString requestAttributeName = m_pSummaryRequest->getAttributeName().toUpper();
						m_pAttributesDS->getData(m_pSummaryRequest->getBoroughCode(), attributeID, requestAttributeName, attributeData);

						isValid = attributeData.compare("unknown", Qt::CaseInsensitive) != 0;

						if (isValid)
						{
							if (m_pSummaryRequest->isCategorical())
							{
								isValid = m_pSummaryRequest->getCategory().compare(attributeData, Qt::CaseInsensitive) == 0;
							}
							else
							{
								value = attributeData.toDouble();
								if (requestAttributeName.indexOf("FAR", Qt::CaseInsensitive) < 0)
								{
									if (requestAttributeName.indexOf("AREA", Qt::CaseInsensitive) > 0)
									{
										isValid = (value > 0);
									}
									else
									{
										isValid = (value >= 0);
									}
								}
								else
								{
									if (requestAttributeName.indexOf("-", Qt::CaseInsensitive) < 0)
									{
										isValid = (value >= 0);
									}
								}
							}
						}

						if (isValid)
						{
							if (countSelected)
							{
								value = 1;
							}
						}
					}
				}

				if (isValid)
				{
					if (firstRound)
					{
						min = value;
						max = value;
						firstRound = false;
					}
					else
					{
						if (value < min)
						{
							min = value;
						}
						if (value > max)
						{
							max = value;
						}
					}
				}

				lotSummaries.insert("name", QJsonValue(pPlutoLot->getBBLCode()));
				lotSummaries.insert("code", QJsonValue(pPlutoLot->getBBLCode()));
				//lotSummaries.insert("hasValue", QJsonValue(foundValue));
				lotSummaries.insert("isAlive", QJsonValue(isAlive));
				lotSummaries.insert("isActive", QJsonValue(isActive));
				lotSummaries.insert("isValid", QJsonValue(isValid));
				lotSummaries.insert("value", QJsonValue(value));

				yearSummaries.append(lotSummaries);
			}
		}
		QString yearKey = year;
		if (yearKey.indexOf(".") < 0)
		{
			yearKey = QString("%1.1").arg(yearKey);
		}
		yearJsonObject.insert(yearKey, yearSummaries);
	}

	yearJsonObject.insert("min", QJsonValue(min));
	yearJsonObject.insert("max", QJsonValue(max));

	QJsonDocument jsonDoc(yearJsonObject);
	return jsonDoc.toJson(QJsonDocument::Compact);
}

QString SummaryQueryHandler::getNeighborhoodSummary()
{
	QList<QString> neighCodes;

	switch (m_pSummaryRequest->getDatasetType())
	{
		case DatasetType::NTA:
			neighCodes = m_pPlutoBorough->getPlutoNeighborhoodsCodes();
			break;
		case DatasetType::CD:
			neighCodes = m_pPlutoBorough->getPlutoCDsCodes();
			break;
	}
	
	QStringList years = Utilities::getYears();
		
	// for each neighborhood, has an array with years size, in our case we have 22 years
	QVector< QVector<double>* > neighResult(neighCodes.size());
	QVector< QVector<bool>* > neighIsAliveResult(neighCodes.size());
	QVector< QVector<bool>* > neighIsActiveResult(neighCodes.size());
	QVector< QVector<bool>* > neighIsValidResult(neighCodes.size());

	for (int i = 0; i < neighCodes.size(); i++)
	{
		neighResult[i]			= new QVector<double>(years.size());
		neighIsAliveResult[i]	= new QVector<bool>(years.size());
		neighIsActiveResult[i]	= new QVector<bool>(years.size());
		neighIsValidResult[i]	= new QVector<bool>(years.size());

		for (int j = 0; j < years.size(); j++)
		{
			(*neighResult[i])[j]			= 0;
			(*neighIsAliveResult[i])[j]		= false;
			(*neighIsActiveResult[i])[j]	= false;
			(*neighIsValidResult[i])[j]		= false;
		}
	}

	QElapsedTimer timer;
	timer.start();

	QThreadPool* threadPool = QThreadPool::globalInstance();
	for (int i = 0; i < neighCodes.size(); i++)//QString neighCode : neighCodes)
	{
		QString neighCode = neighCodes.at(i);
		PlutoNeigh* pPlutoNeigh = NULL;
		switch (m_pSummaryRequest->getDatasetType())
		{
			case DatasetType::NTA:
				pPlutoNeigh = m_pPlutoBorough->getPlutoNeighborhood(neighCode);
				break;
			case DatasetType::CD:
				pPlutoNeigh = m_pPlutoBorough->getPlutoCD(neighCode);
				break;
		}
		if (pPlutoNeigh == NULL)
		{
			qDebug() << QString("QString SummaryQueryHandler::getNeighborhoodSummaryWithoutCache() - %1").arg(neighCode);
			continue;
		}
		SummaryQueryHandlerNeighWorker* pSummaryNeighWorker = new SummaryQueryHandlerNeighWorker(i, pPlutoNeigh, m_pAttributesDS, &neighResult, &neighIsAliveResult, &neighIsActiveResult, &neighIsValidResult, m_pSummaryRequest);
		pSummaryNeighWorker->setAutoDelete(true);
		//pSummaryNeighWorker->run();
		threadPool->start(pSummaryNeighWorker);
	}

	threadPool->waitForDone();

	double min;
	double max;
	bool firstRound = true;

	QJsonObject yearJsonObject;
	for (int j = 0; j < years.size(); j++)
	{
		QString year = years.at(j);
		QJsonArray yearSummaries;
		for (int i = 0; i < neighCodes.size(); i++)
		{
			QJsonObject neighSummary;
			QString neighCode = neighCodes.at(i);

			PlutoNeigh* pPlutoNeigh = NULL;
			switch (m_pSummaryRequest->getDatasetType())
			{
			case DatasetType::NTA:
				pPlutoNeigh = m_pPlutoBorough->getPlutoNeighborhood(neighCode);
				break;
			case DatasetType::CD:
				pPlutoNeigh = m_pPlutoBorough->getPlutoCD(neighCode);
				break;
			}
			if (pPlutoNeigh == NULL)
			{
				qDebug() << QString("QString SummaryQueryHandler::getNeighborhoodSummary() - %1").arg(neighCode);
				continue;
			}

			double value	= (*neighResult[i])[j];
			bool isAlive	= (*neighIsAliveResult[i])[j];
			bool isActive	= (*neighIsActiveResult[i])[j];
			bool isValid	= (*neighIsValidResult[i])[j];

			neighSummary.insert("name", QJsonValue(pPlutoNeigh->getName()));
			neighSummary.insert("code", QJsonValue(pPlutoNeigh->getCode()));
			neighSummary.insert("isAlive", QJsonValue(isAlive));
			neighSummary.insert("isActive", QJsonValue(isActive));
			neighSummary.insert("isValid", QJsonValue(isValid));
			neighSummary.insert("value", QJsonValue(value));

			if (isValid)
			{
				if (firstRound)
				{
					min = value;
					max = value;
					firstRound = false;
				}
				else
				{
					if (value < min)
					{
						min = value;
					}
					if (value > max)
					{
						max = value;
					}
				}
			}
			yearSummaries.append(neighSummary);
		}
		QString yearAdapter = year;
		if (year.indexOf(".2") < 0)
		{
			yearAdapter = QString("%1.1").arg(year);
		}
		yearJsonObject.insert(yearAdapter, yearSummaries);
	}

	yearJsonObject.insert("min", QJsonValue(min));
	yearJsonObject.insert("max", QJsonValue(max));

	qDebug() << "End of data Summary " << timer.elapsed();

	QJsonDocument jsonDoc(yearJsonObject);
	return jsonDoc.toJson(QJsonDocument::Compact);

}

