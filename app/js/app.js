//Code sourced from this YouTube channel: https://www.youtube.com/watch?v=nGVoHEZojiQ
// Steve Griffith - OpenWeatherMap API Tutorial 2021

const app = {
  init: ()=> {
    document
      .getElementById('generate')
      .addEventListener('click', app.getCurrentWeather);
    document
      .getElementById('form')
      .addEventListener('submit', app.showResults);
  },

  /* Global Variables */

  // Get data from OpenWeatherMap API
  getCurrentWeather: async (e) => {
    require('dotenv').config();
    const baseURL = 'http://api.openweathermap.org/geo/1.0/zip';
    const apiURL = `${baseURL}?zip=${zip},US&lat=${lat}&lon${long}&lang=${lang}&units=${units}&appid=${process.env.API_KEY}`;
    let lat;
    let long;
    let lang = 'en';
    let units = 'imperial';

    // fetch the weather data
    fetch(apiURL)
      .then(response=>{
        if(!response.ok)
        throw new Error(resp.statusText);
        return response.json();
      })
      .then((data)=> {
        app.entryHolder(data);
      })
      .catch(console.error);
    },
    // Get current location
    getCurrentLocation: (e)=> {
      let options = {
        enableHighAccuracy: true,
        timeout: 1000 * 10, // 10 seconds
        maximumAge: 1000 * 60 * 5, // 5 minutes
      };
      navigator.geolocation.getCurrentPosition(app.success, app.fail, options);
    },
    success: (position) => {
      //get position
      document.getElementById('latitude').value =
        position.coords.latitude.toFixed(2);
      document.getElementById('longitude').value =
        position.coords.longitude.toFixed(2);
    },
    fail: (error) => {
      //geolocation failed
      console.error(error);
    },
    // Update the UI
    entryHolder: (response) => {
      console.log(response);
      // reset current weather information display
      let entryHolder = document.getElementById('entryHolder').innerHTML = '';
      let temperature = response.main.temp;
      let date = new Date().toLocaleDateString();
      let userResponse = document.getElementById('feelings').value;
      let entryHtml = `
        <div id="date">${date}</div>
        <div id="temp">${temperature}°C</div>
        <div id="content">${userResponse}</div>
        `;
      entryHolder.innerHTML = entryHtml;
    }


    //   try {
  //     const response = await fetch(apiURL);
  //     if(!response.ok) {
  //       throw new Error('Network response was not successful');
  //     }
  //     const apiResponse = await response.json();
  //     return apiResponse;
  //   } catch (error) {
  //     console.error('Error fetching weather data: ', error);
  //     throw error;
  //   }
  // }

  // UI Logic

  // Post data to update UI
  // const postData = async (data) => {
  //   try {
  //     const response = await fetch('/saveWeatherData', {
  //       method: 'POST',
  //       credentials: 'same-origin',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     });
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok.');
  //     }
  //     return await response.json();
  //   } catch (error) {
  //       console.error('Error posting data: ', error);
  //       throw error;
  //   }
  // }

  // const generateBtnHandler = async (event) => {
  //   event.preventDefault(); //Prevent default form submission behavior

  //   try {
  //     const weatherData = await getCurrentWeather();
  //     const temp = weatherData.main.temp;
  //     const date = new Date().toLocaleDateString();

  //     // Create JS object with fetched data and user input
  //     const projectData = {
  //       temperature: temp,
  //       date: date,
  //       userResponse: feelingsInput.value,
  //     };

//       // Store data in local storage
//       localStorage.setItem('weatherEntry', JSON.stringify(projectData));

//       // Post data to update UI
//       await postData(projectData);

//       // Update the UI with the fetched data
//       updateUI(projectData);
//     } catch (error) {
//       console.error('Error generating data: ', error);
//     }
//   }

//   document.addEventListener('DOMContentLoaded', () => {

//     document.querySelector('form').addEventListener('submit', function(e){
//       document.querySelector('form').addEventListener('submit', generateBtnHandler)
//   });

//     // Event listener for the generate button
//     document.querySelector('#generate').addEventListener('click', generateBtnHandler);
//     submitBtn.addEventListener('click', generateBtnHandler);
//   });

//   window.addEventListener('beforeunload', function() {
//     localStorage.clear()
//   });
// }

app.init();