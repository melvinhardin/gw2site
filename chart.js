
var cairnGID = [1480282890,516807299,777978539,119436615,858369185,1015892548,940026070,461179812,1494700677,683383792,491765656,840142421];
var bossSheet= [
                'https://docs.google.com/spreadsheets/d/1L6Z8UZNQvgLi1Ve9ybmUjD6yLdDIz4D65c4FfQB3Sec/gviz/tq?gid=', //vg
                'https://docs.google.com/spreadsheets/d/1GiN7hb_m_aWAV811YhSddN2d32B7QnqfR45_lBNSUhM/gviz/tq?gid=', //gorse
                'https://docs.google.com/spreadsheets/d/1HAqrzdwqxxNTC4Q3nuU2salCq9Kpeuqp5axUZS4OR3A/gviz/tq?gid=', //sab
                'https://docs.google.com/spreadsheets/d/1JrI-o24_gZXyk_6B2EaLrzJ55rXxhW5SrfNPeCeBQfU/gviz/tq?gid=', //sloth
                'https://docs.google.com/spreadsheets/d/1Bn2UGa6Bw6uz0XDYqEnWKotWUsvh-eZf65C2NMMUnwQ/gviz/tq?gid=', //matthias
                'https://docs.google.com/spreadsheets/d/157oPsVQkOZyu4h_9d3RUM_Oi0vnEZwN8S5x6GaE444M/gviz/tq?gid=', //kc
                'https://docs.google.com/spreadsheets/d/18667ZIdJvlZKh5nEjsGzJ8N1YGEF8eBquekZ4konfSU/gviz/tq?gid=', //xera
                'https://docs.google.com/spreadsheets/d/19N3mkRwI4wrY1b84yVjbkOj3Lt-qG-xpq2iUPpYTDQU/gviz/tq?gid=', //cairn
                'https://docs.google.com/spreadsheets/d/1z7QRf-vO_jA60w9xtJqh64URPArrQNLL6HPtk8WJ4PY/gviz/tq?gid=', //mo
                'https://docs.google.com/spreadsheets/d/1KwuXDkfleVrcSp6GbWF-GlLC9c2-slphRkD5jRxbIbc/gviz/tq?gid=', //sam
                'https://docs.google.com/spreadsheets/d/15qrugyur2zX27IuzcWdJgwpKfkay2FNTzuIA-YsJ8WY/gviz/tq?gid=', //deim
                'https://docs.google.com/spreadsheets/d/1vxyXvP2cZf-m-HsZCvY7Yv-rrqHGAvN66-KYmX4g3yo/gviz/tq?gid=', //sh
                'https://docs.google.com/spreadsheets/d/15Bx8GtDL2xyD6OWCQNHLKG2YD98HTkGcmSb0UMIDxZ8/gviz/tq?gid='  //deimos
                ];
var bossSelection = 0;
var classSelection = 0;
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
    classSelection = document.getElementById("menu").value;
    GID = cairnGID[classSelection];
    drawChart();
  };
document.getElementById("bossPress").onclick = function(){
    bossSelection = document.getElementById("bossSelect").value;
  };
};