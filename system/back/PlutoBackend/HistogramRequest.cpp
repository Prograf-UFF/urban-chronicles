#include "HistogramRequest.h"
#include <QDebug>

HistogramRequest::HistogramRequest(const QString& paramData) : AbstractRequest()
{
	m_year = "";
	m_metrics = "COUNT";
	parseRequest(paramData);
}

HistogramRequest::~HistogramRequest()
{
}

bool HistogramRequest::parseRequest(const QString& param)
{
	QJsonDocument jsonDoc = QJsonDocument::fromJson(param.toUtf8());
	QJsonObject jsonObj = jsonDoc.object();

	layerType = LayerType::Unknown;

	QJsonValue val;

	// year
	if (jsonObj.contains("year"))
	{
		val = jsonObj.value("year");
		m_year = val.toString().replace(".1", "");
	}

	// attribute
	if (jsonObj.contains("attribute"))
	{
		val = jsonObj.value("attribute");
		m_attributeName = val.toString();
		m_isCategorical = Utilities::isCategorical(m_attributeName);
	}

	//category
	if (jsonObj.contains("category"))
	{
		val = jsonObj.value("category");
		m_category = val.toString();
		if (!m_isCategorical)
		{
			m_attributeName = Utilities::findAttributeName(m_attributeName, m_category);
		}
	}

	// metrics
	if (jsonObj.contains("metric"))
	{
		val = jsonObj.value("metric");
		m_metrics = (!val.isNull()) ? val.toString() : "COUNT";
	}

	// bins
	if (jsonObj.contains("bins"))
	{
		val = jsonObj.value("bins");
		m_bins = (!val.isNull()) ? val.toInt() : 10;
		qDebug() << m_bins;
	}

	// borough 
	if (jsonObj.contains("borough"))
	{
		val = jsonObj.value("borough");
		m_boroughCode = Utilities::getBoroughID(val.toString());
		layerType = LayerType::Neighborhood;
	}
	// neighborhood
	if (jsonObj.contains("neighborhood"))
	{
		val = jsonObj.value("neighborhood");
		m_neighborhoodCode = Utilities::getNeighborhoodCode(val.toString());
		layerType = LayerType::Block;
	}
	// block
	if (jsonObj.contains("block"))
	{
		val = jsonObj.value("block");
		m_blockCode = val.toString().toInt();
		layerType = LayerType::Lot;
	}


	return true;
}
