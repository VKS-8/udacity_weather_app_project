import express from 'express';
import cors from 'cors';
import { getEnvVariables } from '/.env';

// Access variables with dotenv
dotenv.config()

// Express to run server and routes
// Start instance of Express app
const app = express(); // Start an instance of the app
const port = process.env.PORT || 5501;

/* Middle-ware */
// Cross Origin Resource Sharing
app.use(cors());

// Parse JSON URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('client', {
  setHeaders: (res, path) => {
    if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));

// Test server
app.get('/', (req, res) => {
  res.send("Your server is working");
});

// Route that handles login logic
app.post('/clientRequest', (req, res) => {
  console.log(req.body.zip);
  console.log(req.body.countryCode);
  console.log(req.body.units)
});

app.post('/clientRequest', (req, res)=>{
  //https://www.techiedelight.com/get-current-date-time-javascript/ (date code)
  let options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
  let date = new Date().toLocaleDateString('en-US', options);
  let feelings = document.querySelector('#feelings').value;
  res.send('Here I am!');
  getWeatherData();
});

async function getWeatherData() {
  let zip = document.querySelector('#zip').value;
  let countryCode = document.querySelector('countryCode').value.toUpperCase();
  let units = document.querySelector('units').value;
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},${countryCode}&units=${units}&APPID=a308e7287b4c480280bef12289998f2c`);
  let data = await response.json();
  res.send(data);
}

app.post('/serverResponse', (req, res) => {

})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});