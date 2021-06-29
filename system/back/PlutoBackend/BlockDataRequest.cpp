#include "BlockDataRequest.h"

BlockDataRequest::BlockDataRequest(const QString& paramData)
{
	layerType = LayerType::Unknown;
	parseRequest(paramData);
}

BlockDataRequest::~BlockDataRequest()
{
}

bool BlockDataRequest::parseRequest(const QString& param)
{
	QJsonDocument jsonDoc = QJsonDocument::fromJson(param.toUtf8());
	QJsonObject jsonObj = jsonDoc.object();

	QJsonValue val;

	// borough 
	if (jsonObj.contains("borough"))
	{
		val = jsonObj.value("borough");
		m_boroughCode = Utilities::getBoroughID(val.toString());
	}
	
	// block
	if (jsonObj.contains("block"))
	{
		val = jsonObj.value("block");
		m_blockCode = val.toString().toInt();
	}

	return true;
}