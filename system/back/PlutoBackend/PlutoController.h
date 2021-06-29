#pragma once
#include <QString>
#include <QStringList>
#include <QDebug>
#include <QJsonDocument>
#include <QJsonObject>
#include <QJsonValue>

#include <QFile>
#include <QMap>

#include "PlutoModel.h"

#include "types.h"

class PlutoController
{
private:
	static PlutoController* instance;
public:

	static PlutoController* getInstance();

	PlutoController(PlutoModel* pPlutoModel);
	~PlutoController();

	bool parseRequestData(const QJsonDocument& requestData, QMap<QString, QString>& requestParams);
	bool processRequest(const QString& uri, const QString& data, QString& jsonResponse);
	bool loadData(const QString& dataPath);

private:
	bool parseRequest(const QString& uri, HttpRouteName& routName, LayerType& requestType);
	bool parserResquestType(const QString& uri, LayerType& reqType);

private: 
	PlutoModel* m_pPlutoModel;
};

