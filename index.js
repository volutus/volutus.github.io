
let standingsUri = 'json/standings.json';
let standingsJson = '{}'



$(function() 
{
    // Load data into table
    $.getJSON(standingsUri, function(data) 
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
});

