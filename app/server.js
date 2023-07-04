// Express to run server and routes
const express = require('express');

// Start an instance of the app
const app = express();

// Initialize the main project folder
app.use(express.static('app'));

/* Dependencies */
const bodyParser = require('body-parser');

/* Middle-ware */
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const port = 5500;

// Spin up server
const server = app.listen(port, listening);

function listening() {
  console.log("server running");
  console.log(`running on localhost: ${port}`);
}

/* JS object */
const projectData = {};



/* API */
const weatherKey = '<api key goes here>&units=imperial';