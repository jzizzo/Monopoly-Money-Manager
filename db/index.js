var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mmm'
});


// reload server with: mysql -u root < schema.sql
// start server again with: mysql -u root


var getAllPlayers = function(callback) {
  connection.query('SELECT * FROM players', function(err, results, fields) {
    if (err) {
      callback(err, null)
    } else {
      callback(null, results)
    }
  })
}

module.exports.getAllPlayers = getAllPlayers;