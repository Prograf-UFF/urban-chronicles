#pragma once
#include <QString>
#include <QStringList>
#include <QJsonDocument>
#include <QJsonObject>
#include <QDebug>

#include "Utilities.h"

class PlutoLot
{
public:
	static PlutoLot* parseDatsetFileLine(const QString& datasetLine);

public :
	PlutoLot();
	~PlutoLot();

	inline QString getBBLCode() { return m_sBBLCode; }
	inline void setBBLCode(const QString& bblCode) { m_sBBLCode = bblCode; }

	inline QString getNeighCode() { return m_sNeighCode; }
	inline void setNeighCode(const QString& neighCode) { m_sNeighCode = neighCode; }

	inline QString getCDCode() { return m_sCDCode; };
	inline void setCDCode(const QString& sCDCode) { m_sCDCode = sCDCode;  };

	QVector<int>* getAttributes(const QString& attrType);
	void setAttributes(QJsonDocument jAttributes, const QString& attrType); 

	inline QVector<int>* getGeometries() { return m_pGeometries; }
	void setGeometries(QJsonDocument jGeoemetries); // { m_jGeometries = jGeoemetries; }

	int getBoroughCode();
	int getBlockCode();

	void setLotAlive(const QString& year, const bool& lotAlive);
	bool isLotAlive(const QString& year);

private:
	void processDataStructure(QVector<int>* pDataStructure, QJsonDocument jStructure);
	
private:
	QString m_sBBLCode;
	QString m_sCDCode;
	QString m_sNeighCode;
	QVector<int>* m_pAttributesHigh;
	QVector<int>* m_pAttributesLow;
	QVector<int>* m_pAttributesCateg;
	QVector<int>* m_pGeometries;
	QVector<bool>* m_pIsAlive;
};

