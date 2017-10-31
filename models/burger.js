var orm = require("../config/orm.js");


//call the ORM functions with burger specfic input for ORM
var burgers = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  }
};


module.exports = burgers; // ?
