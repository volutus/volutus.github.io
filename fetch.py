import requests
from datetime import datetime

today = datetime.today().strftime('%Y-%m-%d')

def standings(): 
    uri = f"https://api-web.nhle.com/v1/standings/{today}"
    response = requests.get(uri)
    with open('json/standings.json', 'wb') as f:
        f.write(response.content)

def games():
    uri = "https://nhl-score-api.herokuapp.com/api/scores?startDate=2024-04-06&endDate=2024-04-12"
    response = requests.get(uri)
    with open('json/schedule.json', 'wb') as f:
        f.write(response.content)

standings()
games()