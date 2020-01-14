const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../public'));

app.get('/chart', (req, res) => {
  console.log('yoyo')
});

app.listen('3000', () => {
  console.log('Hey good lookin');
});