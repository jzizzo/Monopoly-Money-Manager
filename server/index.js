var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var db = require('../db/index.js')

var data = [{
  id: 1,
  token: 'bank',
  tokenImg: 'bank',
  balance: 150000
  },
  {
  id: 2,
  token: 'hat',
  tokenImg: 'hat',
  balance: 1500
  },
  {
  id: 3,
  token: 'trex',
  tokenImg: 'trex',
  balance: 1500
  },
  ]

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('./client/dist'))


app.get('/data', function(req, res) {
  // data from database:
  db.getAllPlayers(function(err, players) {
    if (err) {
      console.log('didn\'t get players from db. Got: ', err)
    } else {
      res.send(players);
    }
  })
  // data from server:
  // res.send(data);
});


app.listen(1935, function () {
  console.log('Monopoly Money Manager listening on port 1935!')
});