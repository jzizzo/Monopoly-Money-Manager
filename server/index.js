var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('./client/dist'))

app.get('/balances', function(req, res) {
  res.send('Hello World!');
});

app.listen(1935, function () {
  console.log('Monopoly Money Manager listening on port 1935!')
});