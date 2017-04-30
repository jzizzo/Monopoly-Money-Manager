var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mmm'
});


// reload server with: mysql -u root < schema.sql
// start server again with: mysql -u root


module.exports.getAllPlayers = function(callback) {
  connection.query('SELECT * FROM players', function(err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  })
}

module.exports.balanceTransfer = function(player, amount, callback) {
  connection.query(`UPDATE players SET balance = ${amount} WHERE players.token = ${player}` , function(err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  })

}