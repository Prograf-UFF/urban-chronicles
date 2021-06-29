#include "AttributesDS.h"

AttributesDS::AttributesDS() : AbstractDS()
{
	init();
	isAttribute = true;
}

AttributesDS::~AttributesDS()
{
}

void AttributesDS::init()
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

void AttributesDS::initDataStructure(const int& boroughID, const int& length) 
{
	m_dataStructure[boroughID - 1] = new QVector< QVector<QString> >(length);	
}

bool AttributesDS::getData(const int& boroughID, const int& id, const QString& attributeName, QString& data)
{
	QVector< QVector<QString> >* boroughDS = m_dataStructure[boroughID - 1];
    QVector<QString> attributes = (*boroughDS)[id];
	QString attrType = Utilities::getAttributeType(attributeName);
	QStringList attrList = Utilities::getAttributes(attrType);
	int index = attrList.indexOf(attributeName);
	if (index >= 0)
	{
		data = attributes[index].replace("\n","").replace("\s","").trimmed();
		return true;
	}
	return false;
}

bool AttributesDS::getData(const int& boroughID, const int& id, const int& attributeIndex, QString& data)
{
	QVector< QVector<QString> >* boroughDS = m_dataStructure[boroughID - 1];

	QVector<QString> attributes = (*boroughDS)[id];

	data = attributes[attributeIndex];

	return true;
}

bool AttributesDS::processDatasetItem(const int& boroughID, const int& id, const QString& json)
{
	QStringList attributesTypes = Utilities::getAttributes("low");
	QVector<QString> data = json.split(Utilities::getDelimiter()).toVector();
	QVector< QVector<QString> >* boroughDS = m_dataStructure[boroughID - 1];
    (*boroughDS)[id] = data;
	return true;
}


