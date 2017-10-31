var connection = require("../config/connection.js");

// I need to insertOne()
// selectAll()
//updateOne()

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
//export for model/burgers.js