/* JS object */
const projectData = {};

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

// Cors for cross origin allowance
const cors = require('cors');

app.use(cors());

const port = 5500;

// Spin up server
const server = app.listen(port, listening);

function listening() {
  console.log("server running");
  console.log(`running on localhost: ${port}`);
}
