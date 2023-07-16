// Function to post data to the server
const postData = async (request, response) => {


  const response = await fetch('http://localhost:5501/clientRequest', {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(response),
    return: {
      statusCode: 200,
      contentType: "application/json",
      response
    }
  });

  sessionStorage.setItem('data', response);

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

//Function to update the UI with the fetched data
async function updateUI(data) {
  let {temp = 'data.main.temp'} = temp;
  let date = new Date().toLocaleDateString();
  let feelings = document.getElementById('feelings').value;
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = `
    <p>Date: ${date}</p>
    <p>Temperature: ${temp}°C</p>
    <p>Feeling: ${feelings}</p>
  `;
}

window.onload() {

  // Function to handle button click event
  let transmitUserInput = async function handleBtnClick() {

  // Send user input to the server
  postData();

  // Update the UI with retrieved data based on user input

  updateUI();

  // Event listener for the Generate button
  // document.getElementById('generate').addEventListener('click', generateButtonHandler);
  }
}