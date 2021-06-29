#include "PlutoNeigh.h"

PlutoNeigh* PlutoNeigh::parseLotData(const QString& line)
{
	QStringList fileLine = line.split(Utilities::getDelimiter());
	PlutoNeigh* neighData = new PlutoNeigh();
	neighData->setBoroughID(fileLine.at(0).toInt());
	neighData->setName(fileLine.at(2));
	neighData->setCode(fileLine.at(1));
	neighData->setGeometry(fileLine.at(3));
	
	return neighData;
}

PlutoNeigh::PlutoNeigh()
{
	m_iBoroughID = -1;
}

PlutoNeigh::~PlutoNeigh()
{
}

void PlutoNeigh::insertBlock(PlutoBlock* pPlutoBlock)
{
	m_mBlocks.insert(pPlutoBlock->getCode(), pPlutoBlock);
}

PlutoBlock* PlutoNeigh::getPlutoBlock(const int& blockCode)
{
	QMap< int, PlutoBlock* >::iterator it = m_mBlocks.find(blockCode);

	if (it != m_mBlocks.end())
	{
		return it.value();
	}
	return NULL;
}

bool PlutoNeigh::getBlocks(QStringList& blocks)
{
	QMap<int, PlutoBlock*>::iterator it;
	for (it = m_mBlocks.begin(); it != m_mBlocks.end(); it++)
	{
		blocks.append( QString::number( it.key() ).rightJustified(5, '0', true) );
	}
	return true;
}
