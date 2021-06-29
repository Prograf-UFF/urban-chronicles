#pragma once
#include "AbstractRequest.h"

#include "Utilities.h"

class HistogramRequest : public AbstractRequest
{
public:
	HistogramRequest(const QString& paramData);
	~HistogramRequest();

	inline QString getAttributeName() { return m_attributeName; };
	inline QString getMetrics() { return m_metrics; };
	inline int getBins() { return m_bins; };
	inline QString getYear() { return m_year; };
	inline bool getIsCategorical() { return m_isCategorical; };

	bool parseRequest(const QString& param);
private:
	QString m_attributeName;
	QString m_metrics;
	int m_bins;
	QString m_year;
	bool m_isCategorical;
	QString m_category;
};

