import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

/* Global Variables */

// Personal API Key for OpenWeatherMap API
const API_KEY = '<your_api_key>&units=imperial';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

const zip = document.querySelector('#zip').value;

// Business Logic

// Get data from OpenWeatherMap API
async function getCurrentWeather() {
  const url = `${API_URL}?zip=${zip}&appid=${API_KEY}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not successful.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
}

// Post data to the server
async function postData(url = '', data = {}) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    return await response.json();
  } catch (error) {
      console.error('Error posting data: ', error);
      throw error;
  }
}

// UI Logic

function printResults(apiResponse, zip) {
  document.querySelector('#temp').innerText = Math.round(allData.temp)+ 'degrees';
  document.querySelector('#content').innerText = allData.feel;
  document.querySelector('#date').innerText = allData.date;

}

function printError(request, apiResponse, zip) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the weather data for ${city}: ${request.status} ${request.statusText}: ${apiResponse.message}`;
}

async function generateBtnHandler() {
  const zipInput = document.querySelector('#zip').value;
  const feelingsInput = document.querySelector('feelingsInput').value;

  try {
    const weatherData = await getCurrentWeather(zipInput);
    const temp = weatherData.main.temp;
    const date = new Date().toLocaleDateString();

    // Create JS object with fetched data and user input
    const projectData = {
      temperature: temp,
      date: date,
      userResponse: feelingsInput,
    }

    // Post data to the server
    await postData('/saveData', projectData);

    // Update the UI witht he fetched data
    updateUI(projectData);
  } catch (error) {
    console.error('Error generating data: ', error);
  }
}

// Event listener for the generate button
document.querySelector('#generate').addEventListener('click', generateBtnHandler);



 document.addEventListener('DOMContentLoaded', function() {
  //TODO add appropriate calls here

  });
