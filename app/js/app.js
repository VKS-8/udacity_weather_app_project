/* Global Variables */

// Personal API Key for OpenWeatherMap API
const apiKey = process.env.API_KEY; // Access API key
const baseURL = 'http://api.openweathermap.org/geo/1.0/zip';
const zipInput = document.querySelector('#zip');
const feelingsInput = document.querySelector('#feelings');
const submitBtn = document.querySelector('#generate');
const entryHolder = document.querySelector('#entryHolder');

// Business Logic

// Get data from OpenWeatherMap API
const getCurrentWeather = async () => {
  const zip = zipInput.value;
  const apiURL = `/getWeatherData?apiKey=${apiKey}&zip=${zip}`;

  try {
    const response = await fetch(apiURL);
    if(!response.ok) {
      throw new Error('Network response was not successful');
    }
    const apiResponse = await response.json();
    return apiResponse;
  } catch (error) {
    console.error('Error fetching weather data: ', error);
    throw error;
  }
}

// UI Logic

// Post data to update UI
const postData = async (data) => {
  try {
    const response = await fetch('/saveWeatherData', {
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

// Update the UI
const updateUI = (data) => {
  const {temperature, date, userResponse} = data;
  const entryHtml = `
    <div id="date">${date}</div>
    <div id="temp">${temperature}°C</div>
    <div id="content">${userResponse}</div>
    `;
  entryHolder.innerHTML = entryHtml;
}

const generateBtnHandler = async (event) => {
  event.preventDefault(); //Prevent default form submission behavior

  try {
    const weatherData = await getCurrentWeather();
    const temp = weatherData.main.temp;
    const date = new Date().toLocaleDateString();

    // Create JS object with fetched data and user input
    const projectData = {
      temperature: temp,
      date: date,
      userResponse: feelingsInput.value,
    };

    // Store data in local storage
    localStorage.setItem('weatherEntry', JSON.stringify(projectData));

    // Post data to update UI
    await postData(projectData);

    // Update the UI with the fetched data
    updateUI(projectData);
  } catch (error) {
    console.error('Error generating data: ', error);
  }
}

 document.addEventListener('DOMContentLoaded', () => {

  document.querySelector('form').addEventListener('submit', function(e){
    document.querySelector('form').addEventListener('submit', generateBtnHandler)
 });

  // Event listener for the generate button
  document.querySelector('#generate').addEventListener('click', generateBtnHandler);
  submitBtn.addEventListener('click', generateBtnHandler);
});

window.addEventListener('beforeunload', function() {
  localStorage.clear()
});
