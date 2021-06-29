#include "POPData.h"

POPData::POPData(const QString& name, const int& boroughCode, const double& latitude, const double& longitude)
{
	m_name = name;
	m_boroughCode = boroughCode;
	m_latitude = latitude;
	m_longitude = longitude;
}

POPData::~POPData()
{
}
