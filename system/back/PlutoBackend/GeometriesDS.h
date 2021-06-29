#pragma once
#include "AbstractDS.h"
#include "Utilities.h"

class GeometriesDS : public AbstractDS
{
public:
	GeometriesDS();
	~GeometriesDS();

	bool processDatasetItem(const int& boroughID, const int& id, const QString& jsonValue);
	bool getData(const int& boroughID, const int& id, QString& data);
	void initDataStructure(const int& boroughID, const int& length);

private :
	void init();
	QVector< QVector<QString>* > m_dataStructure;
};

