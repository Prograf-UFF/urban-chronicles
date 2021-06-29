#pragma once
#include <QString>
#include <QStringList>
#include <QFile>
#include <QList>
#include <QDebug>

#include <QJsonDocument>
#include <QJsonObject>
#include <QJsonValue>

#include "Utilities.h"

class AbstractDS
{
public:
	AbstractDS();
	virtual ~AbstractDS();
	bool insertBoroughAttributeData(const int& boroughID, const QString& boroughAttributesFilePath, QString& errorMessage);
	virtual bool processDatasetItem(const int& boroughID, const int& id, const QString& jsonValue) = 0;
	virtual void initDataStructure(const int& boroughID, const int& length) = 0;

protected :
	int dataStructureID = 0;
	bool isAttribute;
};

