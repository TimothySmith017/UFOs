// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // Clear out any data
    tbody.html("");


// Loop through each object in the data
//and append a row and cells for each row
data.forEach((dataRow) => {
// Append a row to the table body
    let row = tbody.append("tr");

    //loop through each field
    // each value gets a table cell (td)
    Object.values(dataRow).forEach((val) => {
        let cell=row.append("td");
        cell.text(val);
        }
    );
    });
}

// Keep track of all filters
var filters = {};

// This function will replace your handleClick function
function updateFilters() {
    let date = d3.select("#datetime").property("value");
    let city = d3.select("#city").property("value");
    let state = d3.select("#state").property("value");
    let country = d3.select("#country").property("value");
    let shape = d3.select("#shape").property("value");
    let filteredData = tableData;
    // Checking if a date is there
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    if (city) {
        filteredData = filteredData.filter(row => row.city === city);
    };

    if (state) {
        filteredData = filteredData.filter(row => row.state === state);
    };

    if (country) {
        filteredData = filteredData.filter(row => row.country === country);
    };

    if (shape) {
        filteredData = filteredData.filter(row => row.shape === shape);
    };
    //Rebuild the table with filtered data
    // @ NOTE: if no date is entered, then the data will be the default.
    buildTable(filteredData);
};

// Use a ForEach Loop to update the table

// Well why is this necessary? Code already works. 



// Attach a listener for a click
//Works!
d3.selectAll("#filter-btn").on("click", updateFilters);

// Build the original table so users know where to start before filtering
buildTable(tableData);

