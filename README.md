# NHL Playoff Machine

The goal of this application is to create something like the NFL playoff machine from ESPN.

The application would allow users to 'fix' the outcome of future games and see how those outcomes would influence the playoff picture.

## Goals

- Render the current playoff picture based on a pull from [the NHL API](https://api-web.nhle.com/v1/standings/2024-03-18)

- Render future games. We could either use a [dedicated API endpoint](https://nhl-score-api.herokuapp.com/api/scores/latest) or glom off the Moneypuck site since we may want their [win% info](https://moneypuck.com/index.html?date=2024-03-18)

- Allow users to select winners and losers and the overtime checkbox. This should update the playoff picture based on their selection. 

- Add a feature to allow users to simulate outcomes based on win% and overtime%. 


### The following URLs may be useful:
https://api-web.nhle.com/v1/standings/2024-03-18

https://github.com/peruukki/nhl-score-api

https://moneypuck.com/index.html?date=2024-03-18

