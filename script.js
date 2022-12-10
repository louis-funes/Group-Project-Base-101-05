
// Function that fecths the UR


async function getChart(){
  const dataChart = await gettingURL();
  const ctx = document.getElementById('chart');
  const myChart = new Chart(ctx, {
   type: 'line',
   data: {
     labels: dataChart.prueba, 
     datasets: [{
       
      label: 'Articles selected (Order by date = Oldest to Recent)',
       data: dataChart.yprueba,
       fill:false,
       borderWidth: 1
     }]
   },

 });
}



async function gettingURL() {
  prueba = [];
  yprueba = [];
  const topicName = document.getElementById('search').value;

  const rowNumber = document.getElementById('rows#').value;

  const queryURL = `https://api.si.edu/openaccess/api/v1.0/search?q=${topicName}&rows=${rowNumber}`;

  const api_key = 'EmJdH60tNih9rYDose9Icg92QjX1LQF9Y2LBeZh5';
  const response = await fetch(`${queryURL}&api_key=${api_key}`);
  // converting to json
  const data = await response.json();

  const gettingrows = await data.response.rows;

  // lenght of the data
  const arrayLenght = gettingrows.length;

  // creating and stroing the data in for loop
  const findit = document.getElementById('idtest');
  const arrayCounter = document.getElementById('arrCoun');

  for (let i = 0; i < arrayLenght; i++) {
    

    const gettingTitle = gettingrows[i].title;

    const gettinLinks = gettingrows[i].content.descriptiveNonRepeating.record_link;

    const gettingYear = gettingrows[i].content.freetext.date[0]["content"];
    
    console.log(gettingTitle);
    console.log(gettingrows[i])
    console.log(gettingYear);
    
    

    // storing and selecting the data
    const span = document.createElement('a');

    span.id = 'span';
    span.className = 'boxData';
    span.href = gettinLinks;

    // appending to the findit variable
    span.textContent = gettingTitle;
    findit.append(span);

    // probando eliminar
    prueba.push(gettingTitle);
    yprueba.push(gettingYear);
  }
  const gettingLenghtArticles = arrayLenght;
  const article = ' articles';
  arrayCounter.append(gettingLenghtArticles, article); 
  return {yprueba, prueba}; 
}











// function articleChart() {
  
//   const ctx = document.getElementById('chart');
//   new Chart(ctx, {
//     type: 'bar',
//     data: {
//       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//       datasets: [{
//         label: 'Articles selected (Order by date = Oldest to Recent)',
//         data: [12, 19, 3, 5, 2, 3],
//         borderWidth: 1
//       }]
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//   });
// }

// Calling the function fetching



getChart();