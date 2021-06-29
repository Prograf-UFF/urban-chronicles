#pragma once
#include <QMap>
#include <QString>

#include "PlutoNeigh.h"

class PlutoBorough
{
public:
	PlutoBorough(const int& iCode, const QString& sName);
	~PlutoBorough();

	void insertPlutoNeighborhood(PlutoNeigh* pPlutoNeigh);

	void insertPlutoCD(PlutoNeigh* pPlutoNeigh);

	PlutoNeigh* getPlutoNeighborhood(const QString& sNeighborhoodCode);
	PlutoNeigh* getPlutoCD(const QString& sCDCode);

	inline QList<QString> getPlutoCDsCodes() { return m_mCds.keys(); };
	inline QList<QString> getPlutoNeighborhoodsCodes() { return m_mNeighborhoods.keys(); };
	inline QString& getBoroughName() { return m_sName; };
	inline int& getBoroughCode() { return m_iCode; };
	
private:
	QMap<QString, PlutoNeigh*> m_mNeighborhoods;
	QMap<QString, PlutoNeigh*> m_mCds;
	int m_iCode;
	QString m_sName;
};

