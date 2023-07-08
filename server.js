import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';


// Express to run server and routes
const express = require('express');
const cors = require('cors'); // Cross Origin Resource Sharing
const app = express(); // Start an instance of the app
require('dotenv').config(); // Use to access files in the .gitignore .env file
const port = process.env.PORT || 5500;

/* Middle-ware */
// Cross Origin Resource Sharing
app.use(cors());

// Parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('app', {
  setHeaders: (res, path) => {
    if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));

let currentData = {};

app.post('/currentData', (req, res)=>{
  //https://www.techiedelight.com/get-current-date-time-javascript/ (date code)
  let options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
  let date = new Date().toLocaleDateString('en-US', options);

  let currentWeather = currentData;
  console.log(currentWeather);
  let newCurrent = {
    temp: currentWeather.main.temp,
    date: date
  }
});

app.get('url', getWeatherData);

const getWeatherData = async (req, res) => {
  console.log(req.body);
  currentData.push(req.body);
}

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
