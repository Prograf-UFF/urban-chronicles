#pragma once
#include <QList>
#include <QThread>
#include <QThreadPool>
#include <QElapsedTimer>

#include "Utilities.h"

#include "PlutoBorough.h"

#include "FilterRequest.h"
#include "FilterRequestBoroughData.h"
#include "AttributesDS.h"
#include "Utilities.h"
#include "FilterQueryHandlerNeighWorker.h"

class FilterQueryHandler
{
    public:
        FilterQueryHandler(QList< QList< PlutoLot* >* >* pBoroughsLots, FilterRequest* pFilterRequest, AttributesDS* pAttributesHighDS, AttributesDS* pAttributesLowDS, AttributesDS* pAttributesCategDS);
        ~FilterQueryHandler();

        void getDataFiltered();

    private:
        void doBoroughFiltering(FilterRequestBoroughData* pFilterDatas, QList<PlutoLot*>* pBoroughLots, const bool& processDefault);

    private:
        QList< QList< PlutoLot* >* >* m_pBoroughsLots;
        AttributesDS* m_pAttributesHighDS;
        AttributesDS* m_pAttributesLowDS;
        AttributesDS* m_pAttributesCategDS;
        FilterRequest* m_pFilterRequest;
};

