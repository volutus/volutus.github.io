import requests
from datetime import datetime

today = datetime.today().strftime('%Y-%m-%d')

def standings(): 
    uri = f"https://api-web.nhle.com/v1/standings/{today}"
    response = requests.get(uri)
    with open('json/standings.json', 'wb') as f:
        f.write(response.content)

standings()
