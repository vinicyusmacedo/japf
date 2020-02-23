const bodyParser = require('body-parser');
const express = require('express')
const fs = require('fs');
const app = express()

app.use(bodyParser.json());
 
app.get('/functions', function (req, res) {
  let data = fs.readFileSync('functions.json');
  res.json(JSON.parse(data));
})
 
app.get('/postSomething/japf', function (req, res) {
  let data = fs.readFileSync('postSomething.json');
  res.json(JSON.parse(data));
})

app.get('/echo/japf', function (req, res) {
  let data = fs.readFileSync('echo.json');
  res.json(JSON.parse(data));
})

app.get('/echo', function (req, res) {
  let message = req.query.message;
  if (message === undefined) {
    res.status(400).send({errorMessage: 'You forgot the query string!'})
  }
  res.json({message: message});
})

app.post('/postSomething', function (req, res) {
  let message = req.body.message;
  if (message === undefined) {
    res.status(400).send({errorMessage: 'You forgot the body!'})
  }
  res.json({message: message});
})

app.listen(3000)
