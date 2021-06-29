#pragma once
#include "AbstractRequest.h"
#include "Utilities.h"

class BlockDataRequest : public AbstractRequest
{

private:
	bool parseRequest(const QString& param);

public:
	BlockDataRequest(const QString& paramData);
	~BlockDataRequest();


};

