const API_KEY = '31f678bba3c481a6499309ca1c6a2874';
const baseURL = 'https://api.openweathermap.org/data/2.5/weather';
let newZip = document.querySelector('#zip');

// Function to get weather data from OpenWeatherMap API
async function getWeatherData() {
    const url = new URL(`${baseURL}?zip=${newZip},US&appid=${API_KEY}`);

    const request = new Request(url, {
      headers: {'check-header-info': 'TODO'},
      method: 'GET',
      cache: 'no-store',
    });

    fetch(request)
      .then((response) => {
      console.log(response.status);
      if(!response.ok)
        throw new Error('Invalid request');
        return response.json();
    }).then((data) => {
        console.log(data);
    })
      .catch(error=>console.error(error.message));
    }

// Function to post data to the server
// async function postData(url = '', data = {}) {
//     try {
//         const response = await fetch(url, {
//             method: 'POST',
//             credentials: 'same-origin',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data),
//         });
//         if (!response.ok) {
//             throw new Error('Network response was not ok.');
//         }
//         return await response.json(); // Return the parsed data
//     } catch (error) {
//         console.error('Error posting data:', error);
//         throw error;
//     }
// }

// Function to handle button click event
// async function generateButtonHandler() {
//     let zipInput = document.getElementById('zip').value;
//     let feelingInput = document.getElementById('feelings').value;

//     try {
//         let weatherData = await getWeatherData(zipInput);
//         let temp = weatherData.main.temp;
//         let date = new Date().toLocaleDateString();

        // Create an object with the fetched data and user input
        // const projectData = {
        //     temperature: temp,
        //     date: date,
        //     userResponse: feelingInput,
        // };

        // Post data to the server
//         const retrievedData = await postData('/savedData', projectData);
//         console.log('Retrieved data: ', retrievedData);

//         // Update the UI with the fetched data
//         updateUI(projectData);
//     } catch (error) {
//         console.error('Error generating data:', error);
//     }
// }

// Function to update the UI with the fetched data
// function updateUI(projectData) {
//     const outputDiv = document.getElementById('output');
//     outputDiv.innerHTML = `
//         <p>Date: ${data.date}</p>
//         <p>Temperature: ${data.temperature}°C</p>
//         <p>Feeling: ${data.userResponse}</p>
//     `;
// }

// Event listener for the Generate button
// document.getElementById('generateButton').addEventListener('click', generateButtonHandler);
