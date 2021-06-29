#include "POPRequest.h"

POPRequest::POPRequest(const QString& param) : AbstractRequest()
{
	parseRequest(param);
}

POPRequest::~POPRequest()
{
}

bool POPRequest::parseRequest(const QString& param)
{
	QJsonDocument jsonDoc = QJsonDocument::fromJson(param.toUtf8());
	QJsonObject jsonObj = jsonDoc.object();

	QJsonValue val;

	// borough 
	if (jsonObj.contains("borough"))
	{
		val = jsonObj.value("borough");
		m_boroughCode = Utilities::getBoroughID(val.toString());
		layerType = LayerType::Neighborhood;
	}

	return true;
}
