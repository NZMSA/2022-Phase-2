# Data Science.

Welcome to Phase 2 Data Science section.

In this section we will be covering Exploratory Data Analysis (EDA), Data Preparation and Data Modelling on the weather dataset in order to predict the weather in the future.

By now, you should be able to setup a Jupyter instance and be familiar with at least some basics of Python in [this module](https://docs.microsoft.com/en-us/learn/paths/beginner-python/).

## Requirements:
* [Python 3.8+](https://www.python.org/)

Recommended:
* [Anaconda](https://www.anaconda.com/) or [VirtualEnv](https://virtualenv.pypa.io/en/latest/).
* [Visual Studio Code](https://code.visualstudio.com/) with [Python Extension](https://marketplace.visualstudio.com/items?itemName=ms-python.python) installed.

## Dataset Information:
The dataset `nzmsa-data.csv` is obtained from [IOWA Environmental Mesonet - Iowa State University](https://mesonet.agron.iastate.edu/).

Columns for this dataset:
* `station`: Acronym for the place of data capture.
* `valid`: Date and time of capture.
* `tmpc`: Temperature of the environment in celsius.
* `dwpc`: Temperature of the dew point in the environment in celsius.
* `relh`: Relative humidity of the environment in percentage.
* `sknt`: Wind Speed in knots.
* `gust`: Wind Gust in knots.
* `peak_wind_drct`: Peak Wind Gust Direction (from PK WND METAR remark). (deg).

## Getting started:
Install the following libraries as listed in `requirements.txt` via the command:

```bash
pip install -r requirements.txt
```

It is recommended to use a virtual environment. A `submission.ipynb` notebook is provided for your convenience.

Examples of the below processes is shown on respective folders in this directory but note that they use more simplified datasets so they are best used as guides. 

## Exploratory Data Analysis (EDA):
Before doing any processing on the data, it is essential that a data scientist has to know at least the general format of the data and the statistics of said data.

You are expected to show at least the following without hard-coding the values:

Numerically:
- [ ] Average.
- [ ] Standard Deviation.
- [ ] Percentile range either:
    - [ ] 10th and 90th or
    - [ ] 25th and 75th.

Graphically:
- [ ] Correlation Plot.
- [ ] Graphing any Numerical Sections of the dataset.

In addition:
- [ ] Comment on the dataset that is provided to you.

You are also to convert any columns to their appropriate types when required.

## Data Preparation:
Now that you know your data inside and out, you are to clean the dataset by removing any unused values and make the dataset usable to train the model.

Note that the models used in the next section does not understand strings alone.

Student Checklist:
- [ ] Data deemed useless removed.
- [ ] Converted or a model dataset made.
- [ ] A train and test dataset for the model made.

Ensure that you have also show some general information of the train/test dataset like in the EDA before entering the modelling stage.

## Data Modelling:
With the dataset made, you are to choose a model best suited for your purpose of the goal. There are a good number of models to choose from in the sci-kit learn library.

After training the model, you are required to add at least another month worth of data into the existing dataset and have the model predict the values of the added dates.

Student Checklist:
- [ ] Model selected.
- [ ] Training dataset fitted.
- [ ] Testing dataset predicted.
- [ ] Predicted results compared to test dataset original values.
- [ ] Another month of the existing dataset predicted.
- [ ] Model evaluation in a paragraph.

## Resource Information:
* [Matplotlib](https://matplotlib.org/) - A library for generating graphs.
* [Pandas](https://pandas.pydata.org/docs/reference/index.html) - A library to handle dataset operations and getting statistics.
* [Sci-kit Learn](https://scikit-learn.org/stable/) - Beginner friendly library where models can be used.
* [Seaborn](https://seaborn.pydata.org/) - Extensive library to plot more graphs. Extends from matplotlib.