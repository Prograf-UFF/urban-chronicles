#include "AbstractDS.h"

AbstractDS::AbstractDS()
{
}

AbstractDS::~AbstractDS()
{
}

bool AbstractDS::insertBoroughAttributeData(const int& boroughID, const QString& boroughFilePath, QString& errorMessage)
{
	QFile fileReader(boroughFilePath);
	if (!fileReader.exists())
	{
		errorMessage = QString("[AbstractDS] - borough FilePath does not exist. %1").arg(boroughFilePath);
		return false;
	}
	if (!fileReader.open(QFile::ReadOnly | QFile::Text))
	{
		errorMessage = QString("[AbstractDS] - borough FilePath can not be opened. %1");
		return false;
	}
	int dataStructureLength = 0;
	while (!fileReader.atEnd())
	{
		QString line = fileReader.readLine();
		dataStructureLength++;
	}
	initDataStructure(boroughID, dataStructureLength);
	fileReader.close(); 
	fileReader.open(QFile::ReadOnly | QFile::Text);
	while (!fileReader.atEnd())
	{
		QString line = fileReader.readLine();
		if (line.indexOf("LANDUSE;BLDGCLASS", Qt::CaseInsensitive) >= 0 ||
			line.indexOf("FACTRYAREA;RETAILAREA", Qt::CaseInsensitive) >= 0 ||
			line.indexOf("RESAREA;COMAREA", Qt::CaseInsensitive) >= 0)
		{
			continue;
		}
		QStringList lineList = line.split(Utilities::getDelimiter());
		dataStructureID = lineList.at(1).toInt();
		QString json;
		if (isAttribute)
		{
			QStringList subList = lineList.mid(2, lineList.size() - 1);
			json = subList.join(Utilities::getDelimiter());
		}
		else 
		{
			json = lineList.at(2).toUtf8();
		}
		processDatasetItem(boroughID, dataStructureID, json);
	}
	return true;
}
