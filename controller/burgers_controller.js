var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();//  this is what routes api calls

router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});


module.exports = router; 
