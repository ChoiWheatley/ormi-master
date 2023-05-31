import pandas as pd
from pyodide.http import open_url
# 외부와 통신하기 위해서는 해당 'from pyodide.http import open_url'를
# 사용해야 합니다.

url = (
"https://raw.githubusercontent.com/Cheukting/pyscript-ice-cream/main/bj-products.csv"
)
ice_data = pd.read_csv(open_url(url))
print(ice_data)
for i in ice_data:
    print(i)