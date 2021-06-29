#include "FilterRequestBoroughData.h"

FilterRequestBoroughData::FilterRequestBoroughData(const QJsonObject& boroughData)
{
	m_boroughData = boroughData;
	parseBoroughData();
}

FilterRequestBoroughData::~FilterRequestBoroughData()
{
}

void FilterRequestBoroughData::parseBoroughData()
{
	QJsonObject jsonObj = m_boroughData;
	QJsonValue jsonBoroughName = jsonObj.value("borough");
	m_boroughName = jsonBoroughName.toString();

    QJsonValue jsonFormula = jsonObj.value("filterExp");
    if (jsonFormula.isUndefined() || jsonFormula.isNull()) {
        m_formula = "0";
    }
    else {
        m_formula = jsonFormula.toString();
    }
	QJsonValue jsonValLimits = jsonObj.value("limits");
	QJsonArray jsonLimits = jsonValLimits.toArray();
	int countOfLimits = jsonLimits.size();
	m_attributes = QVector<QString>(countOfLimits);
	m_attributesIndex = QVector<int>(countOfLimits);
	m_mins = QVector<double>(countOfLimits);
	m_maxs = QVector<double>(countOfLimits);
		
	for (int i = 0; i < countOfLimits; i ++)
	{
		QJsonValue jsonAttributeVal = jsonLimits.at(i);
		QJsonObject jsonAttributeObj = jsonAttributeVal.toObject();
		QString attributeName = jsonAttributeObj.value("attribute").toString();
		QString categoryName = jsonAttributeObj.value("category").toString();
        QJsonValue jsonKey = jsonAttributeObj.value("key");
        QString strKey = jsonKey.toString();
        int key = strKey.toInt();
        m_filterIds.push_back(key);
		int attributeIndex = -1;
		double min = -1;
		double max = -1;
		if (!Utilities::isCategorical(attributeName))
		{
			attributeName = Utilities::findAttributeName(attributeName, categoryName);
			QString attrType = Utilities::getAttributeType(attributeName);
			QStringList attributesNames = Utilities::getAttributes(attrType);
			attributeIndex = attributesNames.indexOf(attributeName);
			min = jsonAttributeObj.value("min").toDouble();
			max = jsonAttributeObj.value("max").toDouble();
		}
		else
		{
			QString attrType = Utilities::getAttributeType(attributeName);
			attributeIndex = Utilities::getAttributes(attrType).indexOf(attributeName);
			QList<QString>* categories = Utilities::getAttributeCategories(attributeName);
			QString strMin = jsonAttributeObj.value("min").toString();
			min = categories->indexOf(strMin);
			if (min < 0) min = 0;
			QString strMax = jsonAttributeObj.value("max").toString();
			max = categories->indexOf(strMax);
		}
		m_attributes[i] = attributeName;
		m_attributesIndex[i] = attributeIndex;
		m_mins[i] = min;
		m_maxs[i] = max;
	}
}

