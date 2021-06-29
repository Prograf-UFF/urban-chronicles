#pragma once
#include <QDebug>

#include "AbstractDS.h"
#include "types.h"

class AttributesDS : public AbstractDS
{
public:
	AttributesDS();
	~AttributesDS();

	bool processDatasetItem(const int& boroughID, const int& id, const QString& json);
	bool getData(const int& boroughID, const int& id, const QString& attributeName, QString& data);
	bool getData(const int& boroughID, const int& id, const int& attributeIndex, QString& data);
	void initDataStructure(const int& boroughID, const int& length);

private:
	void init();
	QVector< QVector< QVector<QString> >* > m_dataStructure;
};

