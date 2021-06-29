#include "GeometriesDS.h"

GeometriesDS::GeometriesDS() : AbstractDS()
{
	init();
	isAttribute = false;
}

GeometriesDS::~GeometriesDS()
{
}

void GeometriesDS::init()
{
	QStringList boroughs = Utilities::getBoroughs();
	int maxBoroughID = 0;
	for (QString borough : boroughs)
	{
		int boroughID = Utilities::getBoroughID(borough);
		if (boroughID > maxBoroughID) maxBoroughID = boroughID;
	}
	for (int i = 0; i < maxBoroughID; i++)
	{
		m_dataStructure.push_back(NULL);
	}
}

void GeometriesDS::initDataStructure(const int& boroughID, const int& length)
{
	m_dataStructure[boroughID - 1] = new QVector< QString >(length);
}

bool GeometriesDS::processDatasetItem(const int& boroughID, const int& id, const QString& jsonValue)
{
	QVector<QString>* boroughData = m_dataStructure[boroughID - 1];
	(*boroughData)[id] = jsonValue;
	return false;
}

bool GeometriesDS::getData(const int& boroughID, const int& id, QString& data)
{
	QVector<QString>* boroughData = m_dataStructure[boroughID - 1];
	data = (*boroughData)[id];
	return true;
}


