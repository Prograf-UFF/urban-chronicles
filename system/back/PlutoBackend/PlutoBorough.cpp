#include "PlutoBorough.h"

PlutoBorough::PlutoBorough(const int& iCode, const QString& sName)
{
	m_iCode = iCode;
	m_sName = sName;
}

PlutoBorough::~PlutoBorough()
{
}

void PlutoBorough::insertPlutoNeighborhood(PlutoNeigh* pPlutoNeigh)
{
	m_mNeighborhoods.insert(pPlutoNeigh->getCode(), pPlutoNeigh);
}

void PlutoBorough::insertPlutoCD(PlutoNeigh* pPlutoNeigh)
{
	m_mCds.insert(pPlutoNeigh->getCode(), pPlutoNeigh);
}

PlutoNeigh* PlutoBorough::getPlutoNeighborhood(const QString& sNeighborhoodCode)
{
	QMap<QString, PlutoNeigh*>::iterator it = m_mNeighborhoods.find(sNeighborhoodCode);

	if (it != m_mNeighborhoods.end()) {
		return it.value();
	}

	return NULL;
}

PlutoNeigh* PlutoBorough::getPlutoCD(const QString& sCDCode)
{
	QMap<QString, PlutoNeigh*>::iterator it = m_mCds.find(sCDCode);

	if (it != m_mCds.end()) {
		return it.value();
	}

	return NULL;
}
