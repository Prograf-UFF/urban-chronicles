#pragma once

#include "AbstractRequest.h"
#include "Utilities.h"

class POPRequest : public AbstractRequest
{
public :
	POPRequest(const QString& param);
	~POPRequest();

	bool parseRequest(const QString& param);
	
};

