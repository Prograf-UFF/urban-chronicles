#include "AbstractRequest.h"

AbstractRequest::AbstractRequest()
{
	m_jumpLayer = false;
}

AbstractRequest::~AbstractRequest()
{
}

DatasetType AbstractRequest::parserDatasetType(const QString& polygon)
{
	if (polygon.contains("neighborhoods", Qt::CaseInsensitive))
	{
		return DatasetType::NTA;
	}

	if (polygon.contains("community", Qt::CaseInsensitive))
	{
		return DatasetType::CD;
	}

	return DatasetType::Unknown;
}