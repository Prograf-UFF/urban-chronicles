# Urban Chronicles

Urban Chronicles is a web-based tool that allows the interactive exploration of zoning datasets.

The team includes:

* Claudio Santos (Universidade Federal Fluminense)
* Maryam Hosseini (New York University)
* Joao Rulff (New York University)
* [Fabio Miranda](https://fmiranda.me) (New York University)
* [Nivan Ferreira](https://www.cin.ufpe.br/~nivan/) (Universidade Federal de Pernambuco)
* [Luc Wilson](https://ui.kpf.com) (Kohn Pedersen Fox)
* [Cláudio T. Silva](https://vgc.poly.edu/~csilva/) (New York University)
* [Marcos Lage](http://www.ic.uff.br/~mlage/) (Universidade Federal Fluminense)


## Table of contents

* [Installing prerequisites](#installing-prerequisites)
    * [Linux (Ubuntu)](#linux-ubuntu-linux-mint)
* [Preprocessing Dataset](#preprocessing-dataset)
* [Running Urban Chronicles](#running-urban-chronicles)
    * [Web client](#web-client)
    * [Online Version](#online-version)


## Preprocessing Dataset

Urban Chronicles takes as input a modified version of the raw PLUTO dataset available [here](https://www1.nyc.gov/site/planning/data-maps/open-data/dwn-pluto-mappluto.page). The New York Department of City Planning provides only one file per year, to make it easier to download all files since 2002, we bundled every file [here](https://drive.google.com/file/d/1BlEny9o1r7a0oWldhD8iVMPJiZmY33qw/view?usp=sharing).Below, are the steps necessary to the creation of Urban Chronicle's input files.

We first need to clone the repository:

```
git clone https://github.com/Prograf-UFF/PlutoVis.git
```

Now, download the dataset provided [here](https://drive.google.com/file/d/1BlEny9o1r7a0oWldhD8iVMPJiZmY33qw/view?usp=sharing):


## Running Urban Chronicles

### Web Client

If you want to go ahead and use Urban Chronicles without going through the preprocessing phase described above, you can download the input dataset [here](https://drive.google.com/file/d/1OPc8uD-N-SGJQ0KuTO7eJeN78FaIdue2/view), and follow the steps bellow:

1. Once downloaded preprocessed file mentioned above, go to the root folder of this repository and extract the file `data.zip` inside `system/`

```
unzip path/to/data.zip -d ./system/
```

2. Run the script that will load the Urban Chronicles data structure to the backend server:
```
./makerunfile.sh
```

3. Finally, go to localhost:4200 to start using Urban Chronicles 



### Online Version

An online version of the system will soon be available [here]()

