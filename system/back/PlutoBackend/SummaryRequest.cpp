#include "SummaryRequest.h"

SummaryRequest::SummaryRequest(const QString& paramData) : AbstractRequest()
{
	parseRequest(paramData);
}

SummaryRequest::~SummaryRequest()
{
}

bool SummaryRequest::parseRequest(const QString& param)
{
	QJsonDocument jsonDoc = QJsonDocument::fromJson(param.toUtf8());
	QJsonObject jsonObj = jsonDoc.object();

	layerType = LayerType::Unknown;

	QJsonValue val;

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
		m_metrics = val.toString();
	}

	// polygon
	if (jsonObj.contains("polygon"))
	{
		val = jsonObj.value("polygon");
		m_datasetType = parserDatasetType(val.toString());
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
		switch (m_datasetType)
		{
		case DatasetType::NTA:
			m_neighborhoodCode = Utilities::getNeighborhoodCode(val.toString());
			break;
		case DatasetType::CD:
			m_neighborhoodCode = Utilities::getCdCode(val.toString());
			break;
		}
		layerType = LayerType::Block;
	}
	// block
	if (jsonObj.contains("block"))
	{
		val = jsonObj.value("block");
		m_blockCode = val.toString().toInt();
		m_jumpLayer = val.toString().isEmpty();
		layerType = LayerType::Lot;
	}

	return true;
}

