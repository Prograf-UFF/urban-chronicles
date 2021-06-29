#pragma once

#include <QString>
#include <QDebug>
#include <QJsonDocument>

#include <string>

#include "mongoose.h"

#include "PlutoController.h"
#include "PlutoModel.h"

#include "types.h"

static struct mg_serve_http_opts s_http_server_opts;

class PlutoServer
{
public :
	
	static PlutoServer* instance;
	static PlutoServer* getInstance();

	static void eventHandler(struct mg_connection* netCon, int ev, void* pointer);
	static RequestType getProperlyRequestType(QString& uri, QString& method);

public:
	PlutoServer();
	~PlutoServer();

	bool startServer(const int& port, const QString& visPath, const QString& dataPath);

	
};

