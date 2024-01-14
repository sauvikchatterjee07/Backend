// console.log("First Backend JS Program");

// MERN -> E -> Express
// NPM -> 
// Server -> (HTTP, (Express)) -> PORT -> 8000, 8001, 3000, 3400 => localhost:8000 === localhost:8000
// POST, GET, PUT, DELETE, ...
// Postman - An API testing tool

const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/doctors', (req, res)=>{
    res.send(
      [{
        name : "Dr. Anindya",
        date : "Saturday"
      },
      {
        name : "Dr. Tathagata",
        date : "Sunday"
      },
      {
        name : "Dr. Nasim Akhtar",
        date : "Monday"
      },
      {
        name : "Dr. Soumya",
        date : "Saturday"
      },
      {
        name : "Dr. Manoj",
        date : "Sunday"
      },
      {
        name : "Dr. Nasim Khan",
        date : "Monday"
      }
    ]
    )
})

app.get('/department', (req, res)=>{
    res.send('Dept a, b, c, d')
})

app.listen(port, () => {
  console.log(`Your server is running at  ${port}`)
})