import requests
from bs4 import BeautifulSoup 
import pandas


url = 'https://www.zomato.com/mobile'

req = requests.get(url)
content = BeautifulSoup(req.content,'html.parser')
print(content)
