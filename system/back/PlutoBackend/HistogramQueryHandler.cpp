#include "HistogramQueryHandler.h"

HistogramQueryHandler::HistogramQueryHandler(PlutoBorough* pPlutoBorough, HistogramRequest* pHistogramRequest, AttributesDS* pAttributesDS, QList<PlutoLot*>* pBoroughLots)
{
	m_pPlutoBorough = pPlutoBorough;
	m_pHistogramRequest = pHistogramRequest;
	m_pAttributesDS = pAttributesDS;
	m_pBoroughLots = pBoroughLots;
}

HistogramQueryHandler::~HistogramQueryHandler()
{
}

QString HistogramQueryHandler::getNeighborhoodSummary()
{
	if (m_pHistogramRequest->getIsCategorical())
	{
		return categoricalHistogramHandler();
	}
	else
	{
		return numericalHistogramHandler();
	}
	
	return "Empty data";
}

QString HistogramQueryHandler::categoricalHistogramHandler()
{
	QList<QString>* categories = Utilities::getAttributeCategories(m_pHistogramRequest->getAttributeName());
	QString attrType = Utilities::getAttributeType(m_pHistogramRequest->getAttributeName());
	QVector<int> binsCount(categories->size());
		
	//QStringList years = Utilities::getYears();
	QStringList years = (m_pHistogramRequest->getYear().isEmpty()) ? Utilities::getYears() : QStringList() << m_pHistogramRequest->getYear();
	
	// fill up bins
	for (QString year : years)
	{
		for (PlutoLot* pPlutoLot : *m_pBoroughLots)
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
			
			int attributeIndex = categories->indexOf(attributeData);
			if (attributeIndex >= 0)
			{
				binsCount[attributeIndex] ++;
			}
			else
			{
				// qDebug() << attributeData;
			}
		}
	}

	//create response
	QJsonArray jsonClassObject;

	for (int i = 0; i < categories->size(); i++)
	{
		QString histogramClass = categories->at(i);

		QJsonObject metaData;
		metaData.insert("bin", QJsonValue(histogramClass));
		metaData.insert("count", QJsonValue(binsCount.at(i)));

		jsonClassObject.append(metaData);
	}

	// send object to frontend
	QJsonDocument jsonAnswer(jsonClassObject);
	return jsonAnswer.toJson(QJsonDocument::Compact);
}

QString HistogramQueryHandler::numericalHistogramHandler()
{
	QElapsedTimer elapsedTimer;
	elapsedTimer.start();

	QThreadPool* threadPool = QThreadPool::globalInstance();
	int threadsCount = threadPool->maxThreadCount();
	int numberOfLotsSelected = m_pBoroughLots->size();
	int elementsPartition = numberOfLotsSelected / threadsCount;
	QVector< QVector<double>* > threadsValues(threadsCount);

	for (int i = 0; i < threadsCount; i++)
	{
		threadsValues[i] = new QVector<double>();
	}

	for (int i = 0; i < threadsCount; i++)
	{
		int initialIndex = i * elementsPartition;
		int finalIndex = (i + 1) * elementsPartition;
		finalIndex = (finalIndex < numberOfLotsSelected) ? finalIndex : numberOfLotsSelected - 1;
		// Call Threads
		HistogramQueryHandlerWorker* histogramWorker = new HistogramQueryHandlerWorker(m_pAttributesDS, m_pBoroughLots, &threadsValues, i, initialIndex, finalIndex, m_pHistogramRequest);
		histogramWorker->setAutoDelete(true);
		//histogramWorker->run();
		threadPool->start(histogramWorker);
	}
	threadPool->waitForDone();

	qDebug() << "Getting Values takes" << elapsedTimer.elapsed();

	QList<double> results;

	elapsedTimer.start();

	int resultLength = 0;
	for (QVector<double>* threadValues : threadsValues)
	{
		resultLength += threadValues->size();
		results.append((*threadValues).toList());
		threadValues->clear();
		delete threadValues;
		threadValues = NULL;
	}

	qDebug() << "consolidate array takes" << elapsedTimer.elapsed();

	elapsedTimer.start();
	std::sort(results.begin(), results.end());
	qDebug() << "sort takes" << elapsedTimer.elapsed();

	qDebug() << "length" << resultLength;

	if (resultLength > 0)
	{
		int percentileOffset = (int)(resultLength / 10);
		int firstPercentileIndex = percentileOffset;
		int lastPercentileIndex = percentileOffset * 9;

		int firstPercentileValue = results[firstPercentileIndex];
		int lastPercentileValue = results[lastPercentileIndex];

		double globalMin = results[0];
		double globalMax = results[resultLength - 1];

		double min = 0;
		double max = 0;
		bool firstRound = true;

		bool localMinFound = false;
		bool localMaxFound = false;

		min = firstPercentileValue;
		max = lastPercentileValue;


		// create bins classes and them putting where it has to be;
		int bins = m_pHistogramRequest->getBins();
		QVector<double> limits(bins);

		int variableBins = bins - 2;

		double offset = (max - min) / bins;
		QStringList classes;
		for (int i = 0; i < bins; i++)
		{
			QString currentClass = QString("%1-%2");
			double currentValue;
			int nextIndex;
			double nextValue;
			if (i == 0)
			{
				currentValue = globalMin;
				nextValue = min;
			}
			else if (i == bins - 1)
			{
				currentValue = max;
				nextValue = globalMax;
			}
			else
			{
				currentValue = min + (i * offset);
				nextIndex = i + 1;
				nextValue = min + ((nextIndex)*offset);
			}
			currentClass = currentClass.arg(QString::number(currentValue, 'f', 2)).arg(QString::number(nextValue, 'f', 2));
			classes.push_back(currentClass);
			limits[i] = currentValue;
		}

		qDebug() << "End of contruibution";

		QVector<int> classHistogramCount(classes.size());
		for (int i = 0; i < classHistogramCount.size(); i++)
		{
			classHistogramCount[i] = 0;
		}

		// create answer object
		for (double value : results)
		{
			int index = findHistogramClassIndex(limits, value);

			int count = classHistogramCount[index];
			classHistogramCount[index] = count + 1;
		}

		QJsonArray jsonClassObject;

		for (int i = 0; i < classes.size(); i++)
		{
			QString histogramClass = classes.at(i);

			QJsonObject metaData;
			metaData.insert("bin", QJsonValue(histogramClass));
			metaData.insert("count", QJsonValue(classHistogramCount.at(i)));

			jsonClassObject.append(metaData);
		}

		// send object to frontend
		QJsonDocument jsonAnswer(jsonClassObject);
		return jsonAnswer.toJson(QJsonDocument::Compact);
	}
}

QString HistogramQueryHandler::getBlockSummary()
{
	return QString();
}

QString HistogramQueryHandler::getLotsSummary()
{
	return QString();
}

int HistogramQueryHandler::findHistogramClassIndex(const QVector<double>& limits, const double& value)
{
	for (int i = 1; i < limits.size(); i++)
	{
		double currentData = limits[i];
		if (value < currentData)
		{
			return i - 1;
		}
	}
	return limits.size() - 1;

}