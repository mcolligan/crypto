const express = require('express');
const bodyParser = require('body-parser');
const conn = require('../api/cd.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../public'));

app.get('/chart', (req, res) => {
  conn.getData((data) => {
    res.send(data);
  });
});

app.get('/current', (req, res) => {
  conn.getCurrent((data) => {
    res.send(data);
  });
});

app.listen('3001', () => {
  console.log('Hey good lookin');
});
