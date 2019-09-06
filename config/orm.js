// Import MySQL connection.
var mysql = require("mysql");
var connection = require("./connection");


// Object for all our SQL statement functions.
var orm = {
    all: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    }
}
module.exports = orm;