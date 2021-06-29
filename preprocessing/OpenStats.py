import pandas as pd

df_csv = pd.read_csv('./BrooklynStatsDrive.csv', header=0)
print(pd.isnull(df_csv))