#pragma once
#include <QVector>
#include <QString>

#include <QJsonDocument>
#include <QJsonObject>
#include <QJsonArray>
#include <QJsonValue>

#include "Utilities.h"

class FilterRequestBoroughData
{
public:
	FilterRequestBoroughData(const QJsonObject& boroughData);
	~FilterRequestBoroughData();

	void parseBoroughData();

	inline QString& getBoroughName() { return m_boroughName; };

	inline QVector<QString>* getAttributes() { return &m_attributes; };
	inline QVector<int>* getAttributesIndexes() { return &m_attributesIndex; };
    inline QVector<int>* getFiltersKeys() { return &m_filterIds; };
	inline QVector<double>* getMins() { return &m_mins; };
	inline QVector<double>* getMaxs() { return &m_maxs; };

    inline QString getFormula() { return m_formula; };

	inline bool processAsDefault() { return m_attributes.size() == 0; };

private:
    QString m_formula;
	QJsonObject m_boroughData;
	QString m_boroughName;
	QVector<QString> m_attributes;
	QVector<int> m_attributesIndex;
    QVector<int> m_filterIds;
	QVector<double> m_mins;
	QVector<double> m_maxs;
};

