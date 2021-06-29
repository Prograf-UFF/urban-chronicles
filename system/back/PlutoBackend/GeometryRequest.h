#pragma once
#include <QString>

#include "AbstractRequest.h"
#include "Utilities.h"
#include "types.h"

class GeometryRequest : public AbstractRequest
{
public:
	GeometryRequest(const QString& paramData);
	~GeometryRequest();

	inline QString getYear() { return m_year; };

	bool parseRequest(const QString& param);

private:
	QString m_year;
};

