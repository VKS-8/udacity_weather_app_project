import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import { getEnvVariables } from './env';

config() // access variables with dotenv


// Express to run server and routes
// Start instance of Express app
const app = express(); // Start an instance of the app
const port = process.env.PORT || 5500;

/* Middle-ware */
// Cross Origin Resource Sharing
app.use(cors());

// Parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static('app', {
  setHeaders: (res, path) => {
    if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));
app.use(fetch());

// app.post('/userInput', (req, res)=>{
//   //https://www.techiedelight.com/get-current-date-time-javascript/ (date code)
//   let options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
//   let date = new Date().toLocaleDateString('en-US', options);
//   res.send('Here I am!');
// });



const apiURL = 'api.openweathermap.org/data/2.5/weather?';
let byZip = `zip=${zip},US&appid=`
const apiKEY = process.env.API_KEY3;

async function getWeatherData() {
  const response = await fetch(`api.openweathermap.org/data/2.5/weather?zip=74401,US&APPID=3a4f71ba50bab790d1cad75ea3699ce9`);
  let data = await response.json();
  res.send(data);
}

getWeatherData();


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});