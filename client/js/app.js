// Function to post data to the server
const postData = async (url = '', data = {}) => {
  console.log(data);
  const response = await fetch('http://localhost:5501/clientRequest', {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  try {
    if (!response.ok) {
        throw new Error('Network response was not ok.');
    }
    const data = await response.json(); // Return the parsed data
    console.log(data);
    return data;
  } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
}

// Function to handle button click event
let submitUserInput = async function handleBtnClick() {

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
// document.getElementById('generate').addEventListener('click', generateButtonHandler);
}