#pragma once

#include <QList>
#include <QString>

#include "PlutoLot.h"

class PlutoBlock
{
public:
	PlutoBlock(const int& bCode);
	~PlutoBlock();
	
	inline void insertPlutoLot(PlutoLot* pPlutoLot) { m_lLots.push_back(pPlutoLot); };
	
	inline int getCode() { return m_iCode; };
	inline QString getStrCode() { return QString::number(m_iCode).rightJustified(5, '0'); };
	inline QList<PlutoLot*>& getLots() { return m_lLots; };

private:
	QList<PlutoLot*> m_lLots;
	int m_iCode;
};

