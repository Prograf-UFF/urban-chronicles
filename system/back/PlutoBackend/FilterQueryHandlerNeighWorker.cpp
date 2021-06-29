#include "FilterQueryHandlerNeighWorker.h"

#include "SentenceParser.h"
#include "RegularSentenceWorker.h"

FilterQueryHandlerNeighWorker::FilterQueryHandlerNeighWorker(FilterRequestBoroughData* pFilterData, AttributesDS* pAttributeHighDS, AttributesDS* pAttributeLowDS, AttributesDS* pAttributeCategDS, QList<PlutoLot*>* pBoroughLots, const int& startIndex, const int& finalIndex, const bool& processDefault)
{
    m_pFilterData = pFilterData;
	m_pAttributesHighDS = pAttributeHighDS;
	m_pAttributesLowDS = pAttributeLowDS;
	m_pAttributesCategDS = pAttributeCategDS;
	m_pBoroughLots = pBoroughLots;
	m_processDefault = processDefault;
	m_startIndex = startIndex;
	m_finalIndex = finalIndex;
}

FilterQueryHandlerNeighWorker::~FilterQueryHandlerNeighWorker()
{
}

void FilterQueryHandlerNeighWorker::run()
{
	QStringList years = Utilities::getYears();
	for (int i = m_startIndex; i < m_finalIndex; i++)
	{
        PlutoLot* pPlutoLot = m_pBoroughLots->at(i);
		QVector<int>* pGeometriesDS = pPlutoLot->getGeometries();
		for (QString year : years)
		{
			int yearIndex = Utilities::getYearIndex(year);
			bool isActive = false;
            isActive = pGeometriesDS->at(yearIndex) != -1;
			if (!m_processDefault)
			{		
				isActive = isInsideTheRange(pPlutoLot, year);
			}
			pPlutoLot->setLotAlive(year, isActive);
		}
    }
}

bool FilterQueryHandlerNeighWorker::isInsideTheRange(PlutoLot* pPlutoLot, const QString& year) {
	// TODO: Improve this function
	//return isAlive;
	int yearID = Utilities::getYearIndex(year);
	int geometryID = (*pPlutoLot->getGeometries())[yearID];
    if (geometryID == -1) {
		return false;
	}
    
    QVector<QString>* pAttributes = m_pFilterData->getAttributes();
    QVector<double>* pMins = m_pFilterData->getMins();
    QVector<double>* pMaxs = m_pFilterData->getMaxs();
    QVector<int>* filtersKeys = m_pFilterData->getFiltersKeys();
    QMap<int, bool> filterResults;
    for (int i = 0; i < pAttributes->size(); i++) {
        bool isActive = true;
        QString attributeName = pAttributes->at(i);
        QString attrType = Utilities::getAttributeType(attributeName);
        QVector<int>* attributesYearIndex = pPlutoLot->getAttributes(attrType);
        int attributeID = attributesYearIndex->at(yearID);
        // int attributeIndex = pAttributesIndexes->at(i);
        int filterKey = filtersKeys->at(i);
        double min = pMins->at(i);
        double max = pMaxs->at(i);
        QString data;
        if (attrType.compare("high", Qt::CaseInsensitive) == 0) {
            m_pAttributesHighDS->getData(pPlutoLot->getBoroughCode(), attributeID, attributeName, data);
        }
        else if (attrType.compare("low", Qt::CaseInsensitive) == 0) {
            m_pAttributesLowDS->getData(pPlutoLot->getBoroughCode(), attributeID, attributeName, data);
        }
        else {
            m_pAttributesCategDS->getData(pPlutoLot->getBoroughCode(), attributeID, attributeName, data);
        }
        if (data.compare("unknown", Qt::CaseInsensitive) == 0) {
            isActive = false;
        }
        if (isActive) {
            if (Utilities::isCategorical(attributeName)) {
                QList<QString>* categories = Utilities::getAttributeCategories(attributeName);
                double dataIndex = categories->indexOf(data);
                if (dataIndex < min || dataIndex > max) {
                    isActive = false;
                }
            }
            else {
                double attributeData = data.toDouble();
                if (attributeData < min || attributeData > max) {
                    isActive = false;
                }
            }
        }
        filterResults[filterKey] = isActive;
    }
    QString args = m_pFilterData->getFormula();
	args = args.replace("and", "*", Qt::CaseInsensitive);
	args = args.replace("or", "+", Qt::CaseInsensitive);
    args = args.replace(" ", "", Qt::CaseInsensitive);

    for (int filterKey : filterResults.keys()) {
        bool res = filterResults.value(filterKey);
        args.replace(QString::number(filterKey), res ? QString::number(1) : QString::number(0));
	}
	ISentenceWorker* sentenceWorker = new RegularSentenceWorker();
    SentenceParser sentence(sentenceWorker);
    bool sentenceResult = sentence.evaluate(args); 
	return sentenceResult;
}
