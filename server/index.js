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
      // update cashed data with query information
      data = players;
      // send player data to client
      res.send(data);
    }
  })
  // data from server:
  // res.send(data);
});

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
      console.log(index)
      console.log(token)
      if (datum.token === token) {
        data[index].balance = req.body[token];
      }
    })

    promises.push(dbPromise(token))
  }
  Promise.all(promises).then((values) => {
    console.log('data ', data)
    res.send(data)
  })
})


//     db.updateBalance(JSON.stringify(token), req.body[token], function(err, players) {
//       if (err) {
//         console.log('didn\'t update balance:', err)
//       } else { // on success:
//         // update cashed data
//         // find matching data object and update balance by index
//         data.forEach(function(datum, index) {
//           console.log(index)
//           if (datum.token === token) {
//             data[index].balance = req.body[token];
//           }
//         })
//       }
//     })

// console.log(data)
//   }

//       // send back data
//       res.send(data)
// })

app.put('/transfer', function(req, res) {
  console.log('req is', req.body)

  for (var token in req.body) {
    console.log('* * * * * * * * * * * * * * * * * * *')
    console.log('token ', token)
    console.log('req token ', req.body[token])
    console.log('* * * * * * * * * * * * * * * * * * *')


    db.updateBalance(JSON.stringify(token), req.body[token], function(err, players) {
      if (err) {
        console.log('didn\'t update balance:', err)
      } else { // on success:
        // update cashed data
        // find matching data object and update balance by index
        data.forEach(function(datum, index) {
          console.log(index)
          if (datum.token === token) {
            data[index].balance = req.body[token];
          }
        })
      }
    })

console.log(data)
  }

      // send back data
      res.send(data)
})


app.listen(1935, function () {
  console.log('Monopoly Money Manager listening on port 1935!')
});