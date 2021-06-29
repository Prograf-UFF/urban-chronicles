#pragma once
#include <QString>


class POPData
{
private:
	QString m_name;
	int m_boroughCode;
	double m_latitude;
	double m_longitude;

public:
	POPData(const QString& name, const int& boroughCode, const double& latitude, const double& longitude);
	~POPData();

	inline QString getName() { return m_name; };
	inline int getBoroughCode() { return m_boroughCode; };
	inline double getLatitude() { return m_latitude; };
	inline double getLongitude() { return m_longitude; };
};

