#include "PlutoLot.h"

PlutoLot* PlutoLot::parseDatsetFileLine(const QString& datasetLine)
{
	PlutoLot* plData = new PlutoLot();
	QStringList lineSplitted = datasetLine.split( Utilities::getDelimiter() );

	if (lineSplitted.length() != 7)
	{
		return NULL;
	}
	QString bblCode = lineSplitted.at(0);
	plData->setBBLCode( bblCode );
	QString neighCode = lineSplitted.at(1);
	plData->setNeighCode( neighCode );
	QString CDCode = lineSplitted.at(2);
	plData->setCDCode(CDCode);
	QString geometriesData = lineSplitted.at(3);
	QJsonDocument geometries = QJsonDocument::fromJson(geometriesData.toUtf8());
	plData->setGeometries(geometries);
	QString attributesHighData = lineSplitted.at(4);
	QJsonDocument attributesHigh = QJsonDocument::fromJson(attributesHighData.toUtf8());
	plData->setAttributes(attributesHigh, "high");
	QString attributesLowData = lineSplitted.at(5);
	QJsonDocument attributesLow = QJsonDocument::fromJson(attributesLowData.toUtf8());
	plData->setAttributes(attributesLow, "low");
	QString attributesCategData = lineSplitted.at(6);
	QJsonDocument attributesCateg = QJsonDocument::fromJson(attributesCategData.toUtf8());
	plData->setAttributes(attributesCateg, "categ");
	return plData;
}

PlutoLot::PlutoLot()
{
	QStringList years = Utilities::getYears();
	m_pAttributesHigh = new QVector<int>(years.size());
	m_pAttributesLow = new QVector<int>(years.size());
	m_pAttributesCateg = new QVector<int>(years.size());
	m_pGeometries = new QVector<int>(years.size());
	m_pIsAlive	  = new QVector<bool>(years.size());

	for (int i = 0; i < years.size(); i++)
	{
		(*m_pAttributesHigh)[i] = -1;
		(*m_pAttributesLow)[i] = -1;
		(*m_pAttributesCateg)[i] = -1;
		(*m_pGeometries)[i] = -1;
		(*m_pIsAlive)[i] = false;
	}
}

PlutoLot::~PlutoLot()
{
}

QVector<int>* PlutoLot::getAttributes(const QString& attrType)
{
    return (attrType.compare("high", Qt::CaseInsensitive) == 0) ? m_pAttributesHigh : (attrType.compare("low", Qt::CaseInsensitive) == 0) ? m_pAttributesLow : m_pAttributesCateg;
}

void PlutoLot::setAttributes(QJsonDocument jAttributes, const QString& attrType)
{
	if (attrType.compare("high", Qt::CaseInsensitive) == 0) processDataStructure(m_pAttributesHigh, jAttributes);
	else if (attrType.compare("low", Qt::CaseInsensitive) == 0) processDataStructure(m_pAttributesLow, jAttributes);
	else processDataStructure(m_pAttributesCateg, jAttributes);
}

void PlutoLot::setGeometries(QJsonDocument jGeoemetries)
{
	processDataStructure(m_pGeometries, jGeoemetries);
}

void PlutoLot::processDataStructure(QVector<int>* pDataStructure, QJsonDocument jStructure)
{
	QStringList years = Utilities::getYears();
	QJsonObject jsonObj = jStructure.object();
	for (int i = 0; i < years.size(); i++)
	{

		QString year = years.at(i);
		QStringList keys = jsonObj.keys();
		if (keys.contains(year, Qt::CaseInsensitive))
		{
			QJsonValue jsonVal = jsonObj.value(year);
			(*pDataStructure)[i] = jsonVal.toInt();
			(*m_pIsAlive)[i] = true;
		}
	}
}

int PlutoLot::getBoroughCode()
{
	QString boroughCode = m_sBBLCode.at(0);

	return boroughCode.toInt();
}

int PlutoLot::getBlockCode()
{
	QString blockCode = m_sBBLCode.mid(1, 5);
	return blockCode.toInt();
}

void PlutoLot::setLotAlive(const QString& year, const bool& lotAlive)
{
	int yearId = Utilities::getYearIndex(year);
	(*m_pIsAlive)[yearId] = lotAlive;
}

bool PlutoLot::isLotAlive(const QString& year)
{
	int yearId = Utilities::getYearIndex(year);
	bool lotAlive = (*m_pIsAlive)[yearId];
	return lotAlive;
}
