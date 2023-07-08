// Express to run server and routes
const express = require('express');
const cors = require('cors'); // Cross Origin Resource Sharing
const app = express(); // Start an instance of the app
const port = 5500;

require('dotenv').config(); // Loads variables from the .env into process.env

let zip = document.querySelector('#zip').value;
const API_KEY = process.env.API_KEY;
const baseURL = 'https://api.openweathermap.org/data/2.5/weather';
const url = `${baseURL}?zip,US&appid=${API_KEY}`;

console.log(`${baseURL}?zip=${zip},US&appid=${url}`);
/* Middle-ware */
// Cross Origin Resource Sharing
app.use(cors());

// Parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// /* Dependencies */
// const bodyParser = require('body-parser');

// /* Middle-ware */
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

// Initialize the main project folder
app.use(express.static('app'));

const projectData = async (url, data = {})=>{

  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application.json',
    },
    body: JSON.stringify(data),
  });

  console.log(response.body);

  try {
    const newData = await response.json();
      return newData
  } catch(error) {
    console.log("error", error);
  }
}



// app.post('/projectData', (req, res) => {
//   const data = req.body; //Access the parsed JSON data sent by the client
//   console.log(data); // Log the JSON data to the server console
//   if (!data || !data.main.temperature || !data.main.location) {
//     res.status(400).send('Invalid weather data');
//     return;
//   } else {
//       weatherData = data;
//       res.status(200).json({ message: 'Weather data saved successfully.'});
//   }
// });

app.listen(port, () => {
  console.log(`Server running on http://localhost: ${port}`);
});

