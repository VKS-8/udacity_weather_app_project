/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

document.addEventListener('DOMContentLoaded', funtion() {
//TODO add appropriate calls here

});

function onSubmit(event) {
  const submitBtn = document.querySelector('#generate');

  event.prevent('default');

  submitBtn.addEventListener('click',submitInput);

  const submitInput = (event) => {
    //TODO add submit code here
    console.log("submitted");
  });
}

const retrieveData = async () =>{
  const request = await fetch('/all');
  try {
  // Transform into JSON
  const allData = await request.json()
  console.log(allData)
  // Write updated data to DOM elements
  document.getElementById('temp').innerHTML = Math.round(allData.temp)+ 'degrees';
  document.getElementById('content').innerHTML = allData.feel;
  document.getElementById("date").innerHTML =allData.date;
  }
  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
 }
