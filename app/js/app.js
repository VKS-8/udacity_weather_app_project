import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

/* Global Variables */

// Personal API Key for OpenWeatherMap API
const apiKey = '<your_api_key>&units=imperial';

// Business Logic

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

document.addEventListener('DOMContentLoaded', funtion() {
//TODO add appropriate calls here
onSubmit();

});

function getCurrentWeather() {
  let request = new XMLHttpRequest();

  request.addEventListener('loadend', ()=> {
    const response = JSON.parse(this.responseText);
    if (this.status === 200) {
      printResults(response, zip);
    } else {
      printError(this, response, zip);
    }
  });

  request.open("GET", apiKey, true);
  request.send();
}


// UI Logic

function printResults(apiResponse, zip) {
  document.querySelector('#temp').innerText = Math.round(allData.temp)+ 'degrees';
  document.querySelector('#content').innerText = allData.feel;
  document.querySelector('#date').innerText = allData.date;

 // document.getElementById('temp').innerHTML = Math.round(allData.temp)+ 'degrees';
  // document.getElementById('content').innerHTML = allData.feel;
  // document.getElementById("date").innerHTML =allData.date;
}

function onSubmit(event) {
  const submitBtn = document.querySelector('#generate');

  event.prevent('default');

  submitBtn.addEventListener('click',submitInput);

  const submitInput = (event) => {
    const zip = document.querySelector('#zip').value;
    document.querySelector('#zip').value=null;
    getCurrentWeather(zip);
    console.log("submitted");
  };

  submitBtn.removeEventListener('click',submitInput);
  submitBtn.addEventListener('click',submitInput);
}

const retrieveData = async () =>{
  const request = await fetch('/all');
  try {
  // Transform into JSON
  const allData = await request.json()
  console.log(allData)
  // Write updated data to DOM elements
  printResults();
  // document.getElementById('temp').innerHTML = Math.round(allData.temp)+ 'degrees';
  // document.getElementById('content').innerHTML = allData.feel;
  // document.getElementById("date").innerHTML =allData.date;

  }
  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
 }
