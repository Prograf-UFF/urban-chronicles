#include "GeometryRequest.h"

GeometryRequest::GeometryRequest(const QString& paramData) : AbstractRequest()
{
	m_year = "";
	m_boroughCode = -1;
	m_neighborhoodCode = "";
	m_blockCode = -1;
	m_datasetType = DatasetType::Unknown;
	parseRequest(paramData);
}

GeometryRequest::~GeometryRequest()
{
}

bool GeometryRequest::parseRequest(const QString& param)
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
