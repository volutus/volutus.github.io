
const STANDINGS_URI = 'json/standings.json';
const SCHEDULE_URI = 'json/schedule.json';
$(function() 
{
    // Load standings data
    $.getJSON(STANDINGS_URI, function(data) 
    {
        const standings = data?.standings
        let teams = []
        for (const team of standings)
        {
            let obj = {};
            obj.name = team.teamName.default;
            obj.logo = team.teamLogo;
            obj.points = team.points;
            obj.conference = team.conferenceName;
            obj.division = team.divisionName;
            teams.push(obj);
        }
        teams.sort((a, b) => a - b);

        for (const team of teams)
        {
            let table = document.getElementById("standings");
            let row = table.insertRow();
            let rowIndex = 0;
            row.insertCell(rowIndex++).innerHTML = "<img width='100' src='"+team.logo+"'>";
            row.insertCell(rowIndex++).innerHTML = team.name;
            row.insertCell(rowIndex++).innerHTML = team.points;
            row.insertCell(rowIndex++).innerHTML = team.conference;
            row.insertCell(rowIndex++).innerHTML = team.division;
        }
    });

    // Load schedule data
    $.getJSON(SCHEDULE_URI, function(data) 
    {   
        let allGames = [];
        for (let day of data) 
        {
            for (let game of day.games) 
            { 
                allGames.push(game); 
            } 
        }

        for (let game of allGames)
        {
            let table = document.getElementById("schedule");
            let row = table.insertRow();
            let rowIndex = 0;

            row.insertCell(rowIndex++).innerHTML = game.startTime;
            row.insertCell(rowIndex++).innerHTML = cleanTeamName(game.teams.home);
            row.insertCell(rowIndex++).innerHTML = cleanTeamName(game.teams.away);
        }
    });
});

function cleanTeamName(team)
{
    return team.locationName + " " + team.teamName;
}


