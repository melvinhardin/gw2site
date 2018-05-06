var cairnGID = [1480282890,516807299,777978539,119436615,858369185,1015892548,940026070,461179812,1494700677,683383792,491765656,840142421];
var selection = 0;
var GID = 0;

// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {
  	// Call to google sheet
 	var queryString = encodeURIComponent('SELECT B, C OFFSET 0')
  	var query = new google.visualization.Query("https://docs.google.com/spreadsheets/d/19N3mkRwI4wrY1b84yVjbkOj3Lt-qG-xpq2iUPpYTDQU/gviz/tq?gid=" + GID +"&headers=1&tq=" + queryString);
  	query.send(handleQueryResponse);
}

function handleQueryResponse(response) {

	//Handle error
	if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }

    //Create table
  	var data = response.getDataTable();
  	var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));
  	chart.draw(data, null);
}

window.onload = function(){
  document.getElementById("press").onclick = function(){
    selection = document.getElementById("menu").value;
    GID = cairnGID[selection];
    drawChart();
  };
};