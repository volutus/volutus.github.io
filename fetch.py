import requests


def standings(): 
    uri = "https://api-web.nhle.com/v1/standings/2024-03-18"
    response = requests.get(uri)
    with open('json/standings.json', 'wb') as f:
        f.write(response.content)


standings()
