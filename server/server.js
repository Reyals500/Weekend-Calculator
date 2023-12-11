const express = require('express');
const bodyParcer = require('body-parser');
const app = express();
let PORT = process.env.PORT || 5000;

app.use(bodyParcer.urlencoded({extended: true}))
app.use(bodyParcer.json())

app.use(express.json());
app.use(express.static('server/public'));

// Global variable that will contain all of the
// calculation objects:
let calculations = []


// Here's a wonderful place to make some routes:

// function mathFunctions(){
//   const numArea = document.querySelector('.nums'),
//   buttons = document.querySelectorAll('button[data-value]');

// let stringToEval = "";

// const clickHandler = event => {
//   const value = event.target.attributes["data-value"].nodeValue;
//   stringToEval += value;
//   inputBox.value = stringToEval;
// }

// const execute = () => {
//   inputBox.value = eval(stringToEval)
//   stringToEval = "";
// }

// const clear = () => {
//   inputBox.value = "";
//   stringToEval = "";
// }

// const del = () => {
//   stringToEval = stringToEval.slice(0, -1);
//   inputBox.value = stringToEval;
// }

// buttons.forEach(btn => btn.addEventListener("click", clickHandler));
// btnEquals.addEventListener("click", execute);
// btnClear.addEventListener("click", clear);
// btnDelete.addEventListener("click", del);
// }

// GET /calculations
app.get('/calculations', (req, res) => {
  console.log('Request for /calculations was made');
  res.send(calculations)
})

// POST /calculations
app.post('/calculations', (req, res) => {
  console.log('POST on /calculations', req.body.data);//get the req.body b4 push
  calculations.push(req.body.data)
  console.log('After the push', req.body.data);//seeing if the push went through
  res.sendStatus(201)
})

// PLEASE DO NOT MODIFY ANY CODE BELOW THESE BEARS:
// 🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸

// Makes it so you don't have to kill the server
// on 5000 in order to run the tests:
if (process.env.NODE_ENV === 'test') {
  PORT = 5001;
}

// This starts the server...but also stores it in a variable.
// This is weird. We have to do it for testing reasons. There
// is absolutely no need for you to reason about this.
const server = app.listen(PORT, () => {
  console.log('server running on: ', PORT);
});

// server.setTimeout(500)

// This is more weird "for testing reasons" code. There is
// absolutely no need for you to reason about this.
app.closeServer = () => {
  server.close();
}

app.setCalculations = (calculationsToSet) => {
  calculations = calculationsToSet;
}

module.exports = app;
