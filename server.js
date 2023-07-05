// Express to run server and routes
const express = require('express');
const cors = require('cors'); // Cross Origin Resource Sharing
const app = express(); // Start an instance of the app
const port = 5500;
require('dotenv').config(); // Loads variables from the .env into process.env

/* Middle-ware */
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// /* Dependencies */
// const bodyParser = require('body-parser');

// /* Middle-ware */
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

// Initialize the main project folder
app.use(express.static('app'));

app.post('/saveData', (req, res) => {
  const data = req.body; //Access the parsed JSON data sent by the client
  console.log(data); // Log the JSON data to the server console
  res.status(200).json({ message: 'Data saved successfully.'});
});

app.listen(port, () => {
  console.log(`Server running on http://localhost: ${port}`);
});
