#pragma once
#include <QString>

enum class RequestType : unsigned int
{
	ResourceRequest = 0,
	APIRequest,
	PageRequest,
	Unknown

};

enum class HttpRouteName : unsigned int 
{
	Years = 0,
	NAttributes,
	Attributes,
	Metrics,
	Boroughs,
	Layer,
	Summaries,
	Histogram,
	Filter,
	POPLayer,
	BlockData,
	Unknown
};

enum class LayerType : unsigned int
{
	Neighborhood = 0,
	Block,
	Lot,
	Unknown
};

enum class DatasetType : unsigned int
{
	NTA = 0,
	CD,
	Unknown
};