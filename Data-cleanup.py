
import pandas as pd

#input: txtfile = raw swell data, mode = "avg" or "min" or "max"
#Output: pandas dataframe with the daily average/min/max conditions over a year
#this function works specifically with the format of the Raw-Swell-Data-2019 file provided

def Dataclean(txtfile, mode):
    Dataframe = pd.read_csv(txtfile, header = 0, delim_whitespace=True)
    Dataframe.drop(['hh', 'mm', 'GST', 'APD', 'PRES', 'DEWP', 'VIS', 'TIDE'], axis=1, inplace=True)
    Dataframe.drop(0, axis=0, inplace=True)

    Dataframe['WVHT'] = pd.to_numeric(Dataframe['WVHT'])
    Dataframe['WDIR'] = pd.to_numeric(Dataframe['WDIR'])
    Dataframe['WSPD'] = pd.to_numeric(Dataframe['WSPD'])
    Dataframe['DPD'] = pd.to_numeric(Dataframe['DPD'])
    Dataframe['DD'] = pd.to_numeric(Dataframe['DD'])
    Dataframe['MM'] = pd.to_numeric(Dataframe['MM'])
    Dataframe['#YY'] = pd.to_numeric(Dataframe['#YY'])
    Dataframe['MWD'] = pd.to_numeric(Dataframe['MWD'])
    Dataframe['ATMP'] = pd.to_numeric(Dataframe['ATMP'])
    Dataframe['WTMP'] = pd.to_numeric(Dataframe['WTMP'])

    year = Dataframe['#YY'].to_list()
    month = Dataframe['MM'].to_list()
    day = Dataframe['DD'].to_list()

    date = []
    i = 0

    for yr in year:
        cur = str(year[i]) + "-" + str(month[i]) + "-" + str(day[i])
        date.append(cur)
        i=i+1
    
       
    
    Dataframe['DATE'] = pd.to_datetime(date)

    Dataframe.drop(['#YY', 'MM', 'DD'], axis=1, inplace=True)

    if mode == "max":
        return Dataframe.groupby('DATE').max()
    elif mode == "min":
        return Dataframe.groupby('DATE').min()
    else: 
        return Dataframe.groupby('DATE').mean()

    


