#pragma once
#include <QList>

#include "AbstractRequest.h"
#include "FilterRequestBoroughData.h"
#include "Utilities.h"

class FilterRequest : public AbstractRequest
{
public:
	FilterRequest(const QString& paramData);
	~FilterRequest();

	bool parseRequest(const QString& param);

	inline QList<FilterRequestBoroughData>& getFilters() { return m_filters; };

private:
	QList<FilterRequestBoroughData> m_filters;
};

