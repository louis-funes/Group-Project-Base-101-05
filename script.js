




// Function that fecths the UR
async function gettingURL() {
  const topicName = document.getElementById("search").value;

  const rowNumber = document.getElementById("rows#").value;

  const queryURL = `https://api.si.edu/openaccess/api/v1.0/search?q=${topicName}&rows=${rowNumber}`;

  const api_key = "EmJdH60tNih9rYDose9Icg92QjX1LQF9Y2LBeZh5";
  const response = await fetch(queryURL + "&api_key=" + api_key);
  // converting to json
  const data = await response.json();

  const gettingrows = await data.response["rows"];

  // lenght of the data
  const arrayLenght = gettingrows.length;

  // creating and stroing the data in for loop
  let findit = document.getElementById("idtest");
  let arrayCounter = document.getElementById("arrCoun");

  for (var i = 0; i < arrayLenght; i++) {
    console.log(gettingrows[i]["title"]);

    console.log(
      gettingrows[i]["content"]["descriptiveNonRepeating"]["record_link"]
    );

    const gettingTitle = gettingrows[i]["title"];

    const gettinLinks =
      gettingrows[i]["content"]["descriptiveNonRepeating"]["record_link"];

    // storing and selecting the data
    let span = document.createElement("a");

    span.id = "span";
    span.className = "boxData";
    span.href = gettinLinks;

    // appending to the findit variable
    span.textContent = gettingTitle;
    findit.append(span);
  }
  const gettingLenghtArticles = arrayLenght;
  const article = " articles";
  arrayCounter.append(gettingLenghtArticles, article); 
}


function xl() {
  
  const ctx = document.getElementById('chart');
  new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: 'Articles selected (Order by date = Oldest to Recent)',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
}


// Calling the function fetching
gettingURL();
xl()



