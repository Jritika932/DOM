10.//Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected
  
function yearChange() {
    let selectedYear = document.getElementById("yearSelect").value;
    document.getElementById("year").innerText = selectedYear;
    
  }
  