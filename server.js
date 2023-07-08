import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';


// Express to run server and routes
const express = require('express');
const cors = require('cors'); // Cross Origin Resource Sharing
const app = express(); // Start an instance of the app
const dotenv = require('dotenv').config(); // Use to access files in the .gitignore .env file
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

const API_KEY = '31f678bba3c481a6499309ca1c6a2874';
const baseURL = 'https://api.openweathermap.org/data/2.5/weather';
let newZip = document.querySelector('#zip');
zip = newZip.value;

// Function to get weather data from OpenWeatherMap API
async function getWeatherData() {
    const url = new URL(`${baseURL}?zip=${zip},US&appid=${API_KEY}`);

    const request = new Request(url, {
      headers: {'x-
      check-header-info': 'TODO'},
      method: 'GET',
      cache: 'no-store',
    });

    fetch(request)
      .then((response) => {
      console.log(response.status);
      if(!response.ok)
        throw new Error('Invalid request');
        return response.json();
    }).then((weatherData) => {
        console.log(weatherData); //check
        let weatherData = JSON.stringify(response);
        console.log(weatherData); //check
    })
      .catch(error=>console.error(error.message));
    }

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

getWeatherData();