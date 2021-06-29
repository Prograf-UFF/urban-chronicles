#pragma once
#include <QString>
#include <QStringList>
#include <QMap>

#include "Utilities.h"
#include "PlutoBlock.h"

class PlutoNeigh
{
public:
	static PlutoNeigh* parseLotData(const QString& line);

public:
	PlutoNeigh();
	~PlutoNeigh();

	inline void setName(const QString& sName) { m_sName = sName; };
	inline QString getName() { return m_sName; };

	inline void setCode(const QString& sCode) { m_sCode = sCode; };
	inline QString getCode() { return m_sCode; };

	inline void setGeometry(const QString& sGeometry) { m_sGeometry = sGeometry; };
	inline QString getGeometry() { return m_sGeometry; };

	inline void setBoroughID(const int& iBoroughID) { m_iBoroughID = iBoroughID; };
	inline int getBoroughID() { return m_iBoroughID; };

	void insertBlock(PlutoBlock* pPlutoBlock);

	bool getBlocks(QStringList& blocks);

	inline QList<int> getPlutoBlocksCodes() { return m_mBlocks.keys(); };

	PlutoBlock* getPlutoBlock(const int& blockCOde);

private:
	QMap< int, PlutoBlock*> m_mBlocks;
	int m_iBoroughID;
	QString m_sName;
	QString m_sCode;
	QString m_sGeometry;
};

