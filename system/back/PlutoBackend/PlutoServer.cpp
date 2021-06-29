#include "PlutoServer.h"

PlutoServer::PlutoServer()
{
}

PlutoServer::~PlutoServer()
{
}

RequestType PlutoServer::getProperlyRequestType(QString& uri, QString& method)
{
	QString apiName = "plutovis/";
	RequestType reqType = RequestType::Unknown;

	if (uri.startsWith(apiName)) {
		reqType = RequestType::APIRequest;
		uri = uri.replace(apiName, "");
	}
	else {
		if (uri.isEmpty() || uri.indexOf(".html") >= 0) {
			reqType = RequestType::PageRequest;
		}
		else if (uri.indexOf(".") > 0) {
			reqType = RequestType::ResourceRequest;
		}
	}

	return reqType;
}

bool PlutoServer::startServer(const int& port,const  QString& visPath, const QString& dataPath)
{
	PlutoController* pController = PlutoController::getInstance();
	bool success = pController->loadData(dataPath);
	if (!success)
	{
		return success;
	}
	// mongoose event manager
	struct mg_mgr mgr;
	// mongoose connection
	struct mg_connection* netCon;

	std::string portToChar = std::to_string(port);
	static char const* sPort = portToChar.c_str();

	mg_mgr_init(&mgr, NULL);

	qDebug() << "Starting web server on port " << sPort;

	netCon = mg_bind(&mgr, sPort, eventHandler);

	if (netCon == NULL)
	{
		qDebug() << "Failed to create listener";
		return false;
	}

	mg_set_protocol_http_websocket(netCon);

	std::string vp = visPath.toStdString();
	s_http_server_opts.document_root = vp.c_str();
	s_http_server_opts.enable_directory_listing = "yes";

	for (;;)
	{
		mg_mgr_poll(&mgr, 1000);
	}

	mg_mgr_free(&mgr);
	return false;
}

void PlutoServer::eventHandler(struct mg_connection* netCon, int ev, void* pointer)
{
	if (ev == MG_EV_HTTP_REQUEST)
	{

		struct http_message* hm = (struct http_message*) pointer;
		QString uri = QString::fromStdString(std::string(hm->uri.p + 1, hm->uri.len)).trimmed();
		QString method = QString::fromStdString(std::string(hm->method.p, hm->method.len));
		QString data = QString::fromStdString(std::string(hm->body.p, hm->body.len));
		

		RequestType reqType = getProperlyRequestType(uri, method);

		if (reqType == RequestType::APIRequest)
		{
			QString json;

			PlutoController* pPlutoController = PlutoController::getInstance();
			bool success = pPlutoController->processRequest(uri, data, json);
            if (!success)
            {
                qDebug() << "Request Cannot be processed.";
            }
			mg_send_head(netCon, 200, json.length(), "Content-Type: text/plain");
			mg_printf(netCon, "%.*s", json.length(), json.toStdString().c_str());
		}
		else if (reqType == RequestType::ResourceRequest || reqType == RequestType::PageRequest)
		{
			mg_serve_http(netCon, hm, s_http_server_opts);
		}
		else {
			QString json = "Something went wrong.";
			mg_send_head(netCon, 505, json.length(), "Content-Type: text/plain");
			mg_printf(netCon, "%.*s", json.length(), json.toStdString().c_str());
		}
	}
}
