
import pandas as pd
import matplotlib.pyplot as plt

from pyodide.http import open_url

url = (
    "https://raw.githubusercontent.com/Cheukting/pyscript-ice-cream/main/bj-products.csv"
)
ice_data = pd.read_csv(open_url(url))

def plot(data):
    plt.rcParams["figure.figsize"] = (22,20)
    fig, ax = plt.subplots()
    bars = ax.barh(data["name"], data["rating"], height=0.7)
    ax.bar_label(bars)
    plt.title("Rating of ice cream flavours of your choice")
    display(fig, target="graph-area", append=False)

plot(ice_data)