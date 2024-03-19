
let standingsUri = 'json/standings.json';


$(function() 
{
    // Load data into table
    $.getJSON(standingsUri, function(data) 
    {
        alert(data);
    });
});