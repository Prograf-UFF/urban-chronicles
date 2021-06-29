#include "PlutoController.h"
#include <QElapsedTimer>

PlutoController* PlutoController::instance = nullptr;

PlutoController* PlutoController::getInstance()
{
	if (instance == nullptr) {
		PlutoModel* plutoModel = new PlutoModel();
		instance = new PlutoController(plutoModel);
	}
	return instance;
}

PlutoController::PlutoController(PlutoModel* pPlutoModel)
{
	m_pPlutoModel = pPlutoModel;
}

PlutoController::~PlutoController()
{
}

bool PlutoController::parseRequest(const QString& uri, HttpRouteName& routeName, LayerType& layerType)
{
	routeName = HttpRouteName::Unknown;
	layerType = LayerType::Unknown;

	if (uri.startsWith("meta.years", Qt::CaseInsensitive))
	{
		routeName = HttpRouteName::Years;
		return true;
	}
	
	if (uri.startsWith("meta.nattributes", Qt::CaseInsensitive))
	{
		routeName = HttpRouteName::NAttributes;
		return true;
	}

	if (uri.startsWith("meta.attributes", Qt::CaseInsensitive))
	{
		routeName = HttpRouteName::Attributes;
		return true;
	}

	if (uri.startsWith("meta.metrics", Qt::CaseInsensitive) )
	{
		routeName = HttpRouteName::Metrics;
		return true;
	}

	if (uri.startsWith("meta.boroughs", Qt::CaseInsensitive))
	{
		routeName = HttpRouteName::Boroughs;
		return true;
	}
	
	if (uri.startsWith("geometries", Qt::CaseInsensitive))
	{
		routeName = HttpRouteName::Layer;
		parserResquestType(uri, layerType);
		return true;
	}

	if (uri.startsWith("summaries", Qt::CaseInsensitive))
	{
		routeName = HttpRouteName::Summaries;
		parserResquestType(uri, layerType);
		return true;
	}

	if (uri.startsWith("histogram", Qt::CaseInsensitive))
	{
		routeName = HttpRouteName::Histogram;
		layerType = LayerType::Neighborhood;
		return true;
	}

	if (uri.startsWith("filter", Qt::CaseInsensitive))
	{
		routeName = HttpRouteName::Filter;
		return true;
	}

	if (uri.startsWith("popslayer", Qt::CaseInsensitive))
	{
		routeName = HttpRouteName::POPLayer;
		return true;
	}

	if (uri.startsWith("blockdata", Qt::CaseInsensitive))
	{
		routeName = HttpRouteName::BlockData;
		return true;
	}
	
	return false;
}

bool PlutoController::parserResquestType(const QString& uri, LayerType& reqType)
{
	if (uri.indexOf(".neighborhoods") >= 0)
	{
		reqType = LayerType::Neighborhood;
		return true;
	}

	if (uri.indexOf(".blocks") >= 0)
	{
		reqType = LayerType::Block;
		return true;
	}

	if (uri.indexOf(".lots") >= 0)
	{
		reqType = LayerType::Lot;
		return true;
	}
	return false;
}

bool PlutoController::processRequest(const QString& uri, const QString& requestData, QString& jsonResponse)
{
	HttpRouteName routName;
	LayerType layerType;
	bool canParse = parseRequest(uri, routName, layerType);

	if (!canParse)
	{
		jsonResponse = "some problem occur trying to parse the data;\n";
		jsonResponse += QString("Could not find this route name: /%1").arg(uri);
		return canParse;
	}
	
    QElapsedTimer timer;
	bool success = false;
	switch (routName) {
		case HttpRouteName::Years:
			success = m_pPlutoModel->fetchYears(jsonResponse);
			return success;
		case HttpRouteName::Attributes:
			success = m_pPlutoModel->fetchAttributes(jsonResponse);
			return success;
		case HttpRouteName::NAttributes:
			success = m_pPlutoModel->fetchNAttributes(jsonResponse);
			return success;
		case HttpRouteName::Boroughs:
			success = m_pPlutoModel->fetchBoroughs(jsonResponse);
			return success;
		case HttpRouteName::Metrics:
			success = m_pPlutoModel->fetchMetrics(jsonResponse);
			return success;
		case HttpRouteName::Layer:
			success = m_pPlutoModel->fetchLayer(requestData, layerType, jsonResponse);
			return success;
		case HttpRouteName::Summaries:
            timer.start();
            success = m_pPlutoModel->fetchSummaries(requestData, layerType, jsonResponse);
            qDebug() << "Summary: " << timer.elapsed();
			return success;
		case HttpRouteName::Histogram:
            timer.start();
			success = m_pPlutoModel->fetchHistogram(requestData, layerType, jsonResponse);
            qDebug() << "Histogram: " << timer.elapsed();
			return success;
		case HttpRouteName::Filter:
			success = m_pPlutoModel->filterDataSet(requestData, jsonResponse);
			return success;
		case HttpRouteName::POPLayer:
			success = m_pPlutoModel->fetchPOPLayer(requestData, jsonResponse);
			return success;
		case HttpRouteName::BlockData:
			success = m_pPlutoModel->fetchBlockData(requestData, jsonResponse);
			return success;
		default:
			return success;
	}
}

bool PlutoController::loadData(const QString& dataPath)
{
	bool success = false;
	QString errorMessage;

    QElapsedTimer timer;
    timer.start();

	if (!Utilities::loadOnlyRaw())
	{
		qDebug() << "Loading Attributes Metadata";
		success = m_pPlutoModel->loadCategoricalAttributesMeta(dataPath, errorMessage);
		if (!success)
		{
			qDebug() << errorMessage;
			return false;
		}
		qDebug() << "Attributes Metadata loaded";

		qDebug() << "Loading POP Dataset";
		success = m_pPlutoModel->loadPOPData(dataPath, errorMessage);
		if (!success)
		{
			qDebug() << errorMessage;
			return false;
		}
		qDebug() << "POP Dataset loaded";

		// Load NeighborhoodInfo
		qDebug() << "Loading Neighborhood data";
		success = m_pPlutoModel->loadNeighborhoodsData(dataPath, errorMessage);
		if (!success)
		{
			qDebug() << errorMessage;
			return false;
		}
		qDebug() << "Neighborhood data files were loaded";

		// Load NeighborhoodInfo
		qDebug() << "Loading CD data";
		success = m_pPlutoModel->loadCDData(dataPath, errorMessage);
		if (!success)
		{
			qDebug() << errorMessage;
			return false;
		}
		qDebug() << "CD data files were loaded";
	}

	// Load Geometries
	qDebug() << "Loading Geometries";
	success = m_pPlutoModel->loadGeometries(dataPath, errorMessage);
	if (!success)
	{
		qDebug() << errorMessage;
		return false;
	}
	qDebug() << "Geometries Loaded";
	
	// Load Attributes
	qDebug() << "Loading Attributes";
	success = m_pPlutoModel->loadAttributes(dataPath, errorMessage);
	if (!success)
	{
		qDebug() << errorMessage;
		return false;
	}
	qDebug() << "Attributes Loaded";
	
	// Load DataSet
	qDebug() << "Loading Dataset";
	success = m_pPlutoModel->loadDataset(dataPath, errorMessage);
	if (!success)
	{
		qDebug() << errorMessage;
		return false;
	}
	qDebug() << "Dataset Loaded";
	
    qDebug() << "ElapsedTimer: " << timer.elapsed() / 1000;

	return true;
}
