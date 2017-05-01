var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var db = require('../db/index.js')

// cache data
var data = [{
  id: 1,
  token: 'Fred',
  tokenImg: 'https://emoji.slack-edge.com/T4LT5QJT0/fred/1ba7e7f11e4185cc.png',
  balance: 150000
  },
  {
  id: 2,
  token: 'Hat',
  tokenImg: 'http://icons.iconarchive.com/icons/rob-sanders/hat/128/Hat-bowler-icon.png',
  balance: 1500
  },
  {
  id: 3,
  token: 'Trex',
  tokenImg: 'https://static-s.aa-cdn.net/img/gp/20600004620273/jq1i1nFKtLmxQI70ss58AfAwZi0Ef44ie62bthVndVBeHrPL04Ea46560tm-Pdki7phe=w300?v=1',
  balance: 1500
  }]

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('./client/dist'))


// query database to load data
app.get('/data', function(req, res) {
  // data from database:
  db.getAllPlayers(function(err, players) {
    if (err) {
      console.log('didn\'t get players from db. Got: ', err)
    } else {
      // update cashed data with query information
      data = players;
      // send player data to client
      res.send(data);
    }
  })
  // data from server:
  // res.send(data);
});


// update balances
app.put('/transfer', function(req, res) {
  var promises = []
  var dbPromise = (token) => {
    return new Promise((resolve, reject) => {
      db.updateBalance(JSON.stringify(token), req.body[token])
      .then((response) => {
        resolve()
      })
    })
  }
  for (var token in req.body) {
    data.forEach(function(datum, index) {
      if (datum.token === token) {
        data[index].balance = req.body[token];
      }
    })
    promises.push(dbPromise(token))
  }
  Promise.all(promises).then((values) => {
    res.send(data)
  })
})

app.listen(1935, function () {
  console.log('Monopoly Money Manager listening on port 1935!')
});