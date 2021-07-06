# Urban Chronicles

![Chronicles Interface](https://raw.githubusercontent.com/Prograf-UFF/urban-chronicle/main/images/interface.png)

This repository contains the source code for Urban Chronicles, a visual analytics system that enables interactive exploration of changes in land use pattern. Using New York City’s Primary Land Use Tax Lot Output ([PLUTO](https://www1.nyc.gov/site/planning/data-maps/open-data/dwn-pluto-mappluto.page)) as an example, the system allows the exploration of  the data over several years at different resolutions. Urban Chronicles supports on-the-fly aggregation and filtering operations by using a tree-based data structure that leverages the hierarchical nature of the data set to index the shape and attributes of geographical regions that change over time.

This README file details the [installation prerequisites](#installation-prerequisites), the [steps to preprocess the data](#preprocessing-dataset), and finally [running the visual analytics system](#running-urban-chronicles), for Linux, MacOS and Windows systems.

The team includes:

* Claudio Santos (Universidade Federal Fluminense)
* Maryam Hosseini (New York University)
* Joao Rulff (New York University)
* [Fabio Miranda](https://fmiranda.me) (University of Illinois at Chicago)
* [Nivan Ferreira](https://www.cin.ufpe.br/~nivan/) (Universidade Federal de Pernambuco)
* [Luc Wilson](https://ui.kpf.com) (Kohn Pedersen Fox)
* [Cláudio T. Silva](https://vgc.poly.edu/~csilva/) (New York University)
* [Marcos Lage](http://www.ic.uff.br/~mlage/) (Universidade Federal Fluminense)


## Table of contents

* [Installation prerequisites](#installation-prerequisites)
    * [Linux (Ubuntu)](#linux-ubuntu)
	* [MacOS](#macos)
	* [Windows](#windows-10)
* [Preprocessing Dataset (optional)](#preprocessing-dataset-optional)
* [Running Urban Chronicles](#running-urban-chronicles)
    * [Web client](#web-client)


## Installation Prerequisites

### Linux (Ubuntu)

1. Download Qt 5.14 (or later version) at [qt.io/download-open-source](https://www.qt.io/download-open-source/) and install it.
2. Install GCC 9.3.0 (or later version)

	```
	sudo apt-get install gcc-9.3.0 g++-9.3.0
	```
3. Install Node.js:

	```
	sudo apt-get install nodejs npm
	```

### MacOS

1. Download Homebrew, a package manager for macOS, at [brew.sh](https://brew.sh/) and install it.
2. Download Qt 5.14 (or later version) at [qt.io/download-open-source](https://www.qt.io/download-open-source/) and install it.
3. Install GCC through [XCode](https://developer.apple.com/xcode/) or brew:

	```
	brew install gcc@4.8
	```

4. Install Node.js:

	```
	brew install nodejs npm
	```
	

### Windows 10

1. Download Qt 5.14 (or later version) at [qt.io/download-open-source](https://www.qt.io/download-open-source/) and install it. When selecting the Qt version to install, make sure to also select MingW for installation. 
2. Make sure GCC is installed through MingW.
3. Download Node.js LTS at [nodejs.org/en/download/](https://nodejs.org/en/download/) and install it.

## Preprocessing Dataset (optional)

Here we describe how to generate the input files for Urban Chronicles. **This is an optional step; if you want to skip the preprocessing step, you can simply download the already preprocessed files [here](https://drive.google.com/file/d/1OPc8uD-N-SGJQ0KuTO7eJeN78FaIdue2/view) and jump to [Running Urban Chronicles](#running-urban-chronicles).**

### Downloading the Dataset

Urban Chronicles takes as input a modified version of the raw PLUTO dataset available [here](https://www1.nyc.gov/site/planning/data-maps/open-data/dwn-pluto-mappluto.page). The New York Department of City Planning provides one set of files per year containing the geometry of the lots and the associated metadata.

**If you want to skip downloading each file separately from the Department of City Planning website, we bundled them in the zip file [NewYorkCity_complete.zip](https://drive.google.com/file/d/1HtFAEBYIdY4Mux8iN_Vajm4nyOcmVAFn/view).**

If you want to use the raw PLUTO dataset, download the MapPLUTO files from 2002 to 2017 from [here](https://www1.nyc.gov/site/planning/data-maps/open-data/bytes-archive.page?sorts[year]=0) and organize them inside a folder with the following structure:

```
NewYorkCity
|
└───2002
└───2003
└───2004
└───2005
│   └───Bronx
|   └───Brooklyn
|   └───Queens
|   └───Manhattan
│   |   |   MNMapPLUTO.shp
|   |   |   MNMapPLUTO.dbf
|   |   |   MNMapPLUTO.prj
|   |   |   MNMapPLUTO.shx
|   └───StatenIsland
└───2009.2
    | ...
```

### Running Preprocessing Scripts

1. First, clone the repository:

```
git clone https://github.com/Prograf-UFF/PlutoVis.git
```

2. Make sure you have python 3.7 or later running on your machine and install all the requirements:

```
pip install -r ./preprocessing/pylibs/requirements.txt
```

3. If you choose to download the NewYorkCity_complete.zip bundle provided [here](https://drive.google.com/file/d/1HtFAEBYIdY4Mux8iN_Vajm4nyOcmVAFn/view?usp=sharing), unzip the bundle inside `./preprocessing` with the command below. Otherwise, only move the NewYorCity folder generated as described in the previous section to `./preprocessing`:

```
mv /path/to/downloads/NewYorkCity_complete.zip ./preprocessing
unzip ./preprocessing/NewYorkCity_complete.zip
```

4. Execute the preprocessing script:

```
cd ./preprocessing
python ./preprocessingFacade.py
```

4. Copy the dist folder to the system folder as below:

```
cp -r ./preprocessing/dist/data ./system
```

## Running Urban Chronicles

### Web Client

If you want to go ahead and use Urban Chronicles without going through the preprocessing steps described above, download the proprocessed dataset [here](https://drive.google.com/file/d/1OPc8uD-N-SGJQ0KuTO7eJeN78FaIdue2/view). 

#### Linux and MacOS

1. Once downloaded the preprocessed files mentioned above (or generated through the preprocessing section above), go to the root folder of this repository and extract the file `data.zip` inside `system/`

```
unzip path/to/data.zip -d ./system/


urban-chronicle
│   README.md
|
└───system
│   │   ...
│   └───Data
|       | 
|       |
|   |   ...
│   
└───preprocessing
    | ...

```

2. Generate the frontend application build:

```
cd ./system/front
npm install
ng build
```

3. Run the script that will load the Urban Chronicles data structure to the backend server:
```
./makerunfile.sh
```

4. Finally, go to `localhost:4200` to start using Urban Chronicles .

#### Windows

1. First, download the compiled release of Urban Chronicles [here](https://drive.google.com/file/d/1xHNegEY7fb3UHysTLZEOR-yg0bWHZn9u/view?usp=sharing).

2. Unzip the `.zip` folder inside `system/`. You should have a structure like the one below

```
urban-chronicle
│   README.md
|
└───system
│   │   ...
│   │   Release
|   |   runUrbanChroniclesServer.bat
|   |   Data
|   |   ...
│   
└───preprocessing
    | ...
```

3. Generate the frontend application build:

```
cd ./system/front
npm install
ng build
```

4. Run `runUrbanChroniclesServer.bat` by double clicking it.

