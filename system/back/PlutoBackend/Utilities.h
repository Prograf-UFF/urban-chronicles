#pragma once

#include <QMap>
#include <QString>
#include <QStringList>

#include <QJsonDocument>
#include <QJsonArray>
#include <QJsonObject>
#include <QJsonValue>

class Utilities
{
private:
	static QString s_sDatasetFileNameTemplate;
	static QString s_sAttributesFileNameTemplate;
	static QString s_sGeometriesFileNameTemplate;
	static QString s_sCacheFileNameTemplate;
	static QString s_sNeighborhoodFileName;
	static QString s_sPOPDataFileName;
	static QString s_sAttributesMetaTemplate;

	static QChar s_cDelimiter;
	
	static QStringList s_lMainCategories;
	static QStringList s_lSubCategories;

	static QList< QList<QString>* > s_lCategoricalSubCategories;

	static QStringList s_lHistogramAllowed;

	static QStringList s_lYears;
	static QStringList s_lAttributesHigh;
	static QStringList s_lAttributesLow;
	static QStringList s_lAttributesCateg;
	static QStringList s_lMetrics;
	static QStringList s_ltypes;
	static QStringList s_lBoroughs;
	static QStringList s_lBoroughsIndex;
	static QStringList s_lBoroughNickName;
	static bool s_bAllowNeighborhoodCache;
	static bool s_bLoadRawData;

	static QMap<QString, QString> s_mNeighNameToNeighCode;
	static QMap<QString, QString> s_mCdNameToCdCode;

public:
	static QString getDatasetFileNameTemplate(const QString& dataPath) { return dataPath + s_sDatasetFileNameTemplate; };
	static QString getAttributesFileNameTemplate(const QString& dataPath) { return dataPath + s_sAttributesFileNameTemplate; };
	static QString getGeometriesFileNameTemplate(const QString& dataPath) { return dataPath + s_sGeometriesFileNameTemplate; };
	static QString getCacheFileNameTemplate(const QString& dataPath) { return dataPath + s_sCacheFileNameTemplate; };
	static QString getNeighborhoodFilePath(const QString& dataPath) { return dataPath + s_sNeighborhoodFileName.arg( "neigh" ); };
	static QString getCDFilePath(const QString& dataPath) { return dataPath + s_sNeighborhoodFileName.arg( "cd" ); };
	static QString getAttributesMetaFilePath(const QString& dataPath) { return dataPath + s_sAttributesMetaTemplate; };
	static QString getPOPDataFilePath(const QString& dataPath) { return dataPath + s_sPOPDataFileName; };

	static QChar getDelimiter() { return s_cDelimiter; };

	static QStringList& getYears() { return s_lYears; };
	static QString getAttributeType(const QString& attributeName);
	static QStringList& getAttributes(const QString& type) { return (type.compare("high", Qt::CaseInsensitive) == 0) ? s_lAttributesHigh : (type.compare("low", Qt::CaseInsensitive) == 0) ? s_lAttributesLow : s_lAttributesCateg ; };
	static QStringList& getBoroughs() { return s_lBoroughs; };
	static QStringList& getMetrics() { return s_lMetrics; };
	static QStringList& getTypes() { return s_ltypes; };
	static QStringList& getCategoricalAttributes() { return s_lAttributesCateg; };
	
	static void insertAttributes(const QList<QString>& attributes, const QString& attrsType);
	
	static bool isNeighborhoodCacheAllow() { return s_bAllowNeighborhoodCache; };
	static bool loadOnlyRaw() { return s_bLoadRawData; };
	static bool isCategorical(const QString& attributeName) { return s_lAttributesCateg.indexOf(attributeName) >= 0; };

	static int getBoroughID(const QString& boroughName) { return s_lBoroughsIndex.indexOf(boroughName, Qt::CaseInsensitive) + 1; };
	static int getYearIndex(const QString& year) { return s_lYears.indexOf(year); };
	static int getBoroughIDFromNickName(const QString& nickName) { return s_lBoroughNickName.indexOf(nickName, Qt::CaseInsensitive) + 1; };
	
	static QString decodeAttributeCategory(const QString& attribute, const QString& category);
	static QString findAttributeName(const QString& attributeName, const QString& category);

	static bool getAttributesMetaData(QString& json);
	static bool generateJsonArray(const QStringList& data, QString& json);
	static bool generateJsonObjectIndexed(const QStringList& data, QString& json);

	static void insertNeighborhoodInfo(const QString& neighborhoodName, const QString& neighborhodCode) { s_mNeighNameToNeighCode.insert(neighborhoodName, neighborhodCode); };
	static QString getNeighborhoodCode(const QString& neighborhoodName) { return s_mNeighNameToNeighCode.value(neighborhoodName); };

	static void insertCdInfo(const QString& cdName, const QString& neighborhodCode) { s_mCdNameToCdCode.insert(cdName, neighborhodCode); };
	static QString getCdCode(const QString& cdName) { return s_mCdNameToCdCode.value(cdName); };

	static QStringList fixLineSplitted(const QStringList& lineSplitted);
	static QList<QString>* getAttributeCategories(const QString& attributeName);
	static void insertAttributesCategories(QList<QString>* categories);
};


