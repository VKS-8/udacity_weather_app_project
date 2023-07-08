const apiKey = '31f678bba3c481a6499309ca1c6a2874';
const endpoint = 'api.openweathermap.org/data/2.5/weather?';
let queryZip = document.querySelector('#zip').value;
let countryCode = document.querySelector('#countryCode').value;
countryCode.toUpperCase();
let units = document.querySelector('#units').value;
let url = new URL(`${endpoint}zip=${queryZip},${countryCode}&units=${units}&appid=${apiKey}`);

// Function to post data to the server
const postData = async (url = '', data = {}) => {
  console.log(data);
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    cache: 'no-store'
    },
    body: JSON.stringify(data),
  });

  try {
    if (!response.ok) {
        throw new Error('Network response was not ok.');
    }
    const newCurrentData = await response.json(); // Return the parsed data
    console.log(newCurrentData);
    return newCurrentData;
  } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
}

// Function to handle button click event
let submitUserInput = async function handleBtnClick(e) {
  e.preventDefault();

  // Post data to the server
  let retrievedData = await postData('/currentData', newCurrentData);
  console.log('Retrieved data: ', retrievedData);
    try{
          // Update the UI with the fetched data
          updateUI(retrievedData);
      } catch (error) {
          console.error('Error generating data:', error);
      }
  }

  //Function to update the UI with the fetched data
  let updateUI = async function updateUI(retrievedData) {
      const outputDiv = document.getElementById('output');
      outputDiv.innerHTML = `
          <p>Date: ${retrievedData.date}</p>
          <p>Temperature: ${retrievedData.temperature}°C</p>
          <p>Feeling: ${retrievedData.userResponse}</p>
      `;
}

// Event listener for the Generate button
document.getElementById('generate').addEventListener('click', submitUserInput);
