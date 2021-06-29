#include "FilterRequest.h"
#include <QDebug>

FilterRequest::FilterRequest(const QString& paramData) : AbstractRequest()
{
	parseRequest(paramData);
}

FilterRequest::~FilterRequest()
{

}

bool FilterRequest::parseRequest(const QString& param)
{
	QJsonDocument jsonDoc = QJsonDocument::fromJson(param.toUtf8());
	QJsonObject jsonBoroughsData = jsonDoc.object();

	layerType = LayerType::Unknown;

	FilterRequestBoroughData boroughFilterData(jsonBoroughsData);
	m_filters.push_back(boroughFilterData);

	return true;
}
