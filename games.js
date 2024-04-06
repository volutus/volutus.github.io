
const SCHEDULE_URI = 'json/schedule.json';
$(function() 
{
    // Load data into table
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
            row.insertCell(rowIndex++).innerHTML = cleanName(game.teams.home);
            row.insertCell(rowIndex++).innerHTML = cleanName(game.teams.away);
        }
    });
});

function cleanName(team)
{
    return team.locationName + " " + team.teamName;
}

