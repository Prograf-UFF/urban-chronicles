#pragma once
#include "AbstractRequest.h"
#include "Utilities.h"

class SummaryRequest : public AbstractRequest
{
public:
	SummaryRequest(const QString& paramData);
	~SummaryRequest();

	inline QString getAttributeName() { return m_attributeName; };
	inline QString getMetrics() { return m_metrics; };
	inline bool isCategorical() { return m_isCategorical; };
	inline QString getCategory() { return m_category; };

	bool parseRequest(const QString& param);


private:
	QString m_attributeName;
	QString m_metrics;
	bool m_isCategorical;
	QString m_category;
};

