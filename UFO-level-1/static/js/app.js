// from data.js
var tableData = data;

//append table to web page and add data
var tbody = d3.select("tbody");

tableData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  
//Add event listener to search by date

//Assign data to a variable
var ufoInfo = tableData;

//Select the button and form
var button = d3.select("#filter-btn");
var form = d3.select("#datetime");

//Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

//Event handler function for the form
function runEnter() {

  d3.event.preventDefault();

  var inputElement = d3.select("#datetime");

  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = ufoInfo.filter(sighting => sighting.datetime === inputValue);

  console.log(filteredData);

  var tbody = d3.select("tbody");

  tbody.html("");

  filteredData.forEach((ufoReport) => {
      var row = tbody.append("tr");
      Object.entries(ufoReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });

}


