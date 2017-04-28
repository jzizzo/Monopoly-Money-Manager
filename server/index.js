var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(1935, function () {
  console.log('Monopoly Money Manager listening on port 1935!')
});