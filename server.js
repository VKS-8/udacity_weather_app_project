// Express to run server and routes
const express = require('express');
const cors = require('cors'); // Cross Origin Resource Sharing
const app = express(); // Start an instance of the app
const fetch = require('node-fetch');
const port = process.env.PORT||5500;
const API_KEYS = process.env.API_KEYS.split(',');
const baseURL = 'https://api.openweathermap.org/data/2.5/weather';
let weatherData = '';
require('dotenv').config(); // Loads variables from the .env into process.env


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

app.get()

app.get('', (req, res) => {
  const apiKEY = req.query.apiKEY;
  if (API_KEYS.includes(apiKEY)) {
    res.send(weatherData); // Send data
  } else {
    res.status(401).send('Unauthorized');
  }
});

app.post('/saveWeatherData', (req, res) => {
  const saveWeatherData = req.body; //Access the parsed JSON data sent by the client
  console.log(saveWeatherData); // Log the JSON data to the server console
  if (!saveWeatherData || !saveWeatherData.temperature || !saveWeatherData.location) {
    res.status(400).send('Invalid weather data');
    return;
  } else {
      weatherData = saveWeatherData;
      res.status(200).json({ message: 'Weather data saved successfully.'});
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost: ${port}`);
});

