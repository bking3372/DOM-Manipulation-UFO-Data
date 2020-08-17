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

//Select the button and forms
var button = d3.select("#filter-btn");
var form1 = d3.select("#datetime");
var form2 = d3.select("#city");
var form3 = d3.select("#state");
var form4 = d3.select("#country");
var form5 = d3.select("#shape");

//Create event handlers
button.on("click", runEnter);
form1.on("submit", runEnter);
form2.on("submit", runEnter);
form3.on("submit", runEnter);
form4.on("submit", runEnter);
form5.on("submit", runEnter);

//Event handler function for the form
function runEnter() {

  d3.event.preventDefault();

  var inputElement1 = d3.select("#datetime");
  var inputElement2 = d3.select("#city");
  var inputElement3 = d3.select("#state");
  var inputElement4 = d3.select("#country");
  var inputElement5 = d3.select("#shape");

  var inputValue1 = inputElement1.property("value");
  var inputValue2 = inputElement2.property("value").toLowerCase();
  var inputValue3 = inputElement3.property("value").toLowerCase();
  var inputValue4 = inputElement4.property("value").toLowerCase();
  var inputValue5 = inputElement5.property("value").toLowerCase();

  console.log(inputValue1);
  console.log(inputValue2);
  console.log(inputValue3);
  console.log(inputValue4);
  console.log(inputValue5);
  
  //filter data by first search term; if first search term is empty, set filtered dataset variable to original dataset
  if (inputValue1 !== "") {
    var filteredData = ufoInfo.filter(sighting => (sighting.datetime === inputValue1));
  }
  else {
    var filteredData = ufoInfo;
  }

  //filter data by second search term, if present
  if (inputValue2 !== "") {
    var filteredData = filteredData.filter(sighting => (sighting.city === inputValue2));
  }

  //filter data by third search term, if present
  if (inputValue3 !== "") {
    var filteredData = filteredData.filter(sighting => (sighting.state === inputValue3));
  }

  //filter data by fourth search term, if present
  if (inputValue4 !== "") {
    var filteredData = filteredData.filter(sighting => (sighting.country === inputValue4));
  }

  //filter data by fifth search term, if present
  if (inputValue5 !== "") {
    var filteredData = filteredData.filter(sighting => (sighting.shape === inputValue5));
  }

  console.log(filteredData);

  var tbody = d3.select("tbody");

  //clear current data
  tbody.html("");

  //show filtered data on web page
  filteredData.forEach((ufoReport) => {
      var row = tbody.append("tr");
      Object.entries(ufoReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });

}


