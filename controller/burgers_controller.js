var express = require("express");
var burgers = require("../models/burger.js");
var router = express.Router();//  this is what routes api calls

router.get("/", function(req, res) { 
    res.render("index");
  });



module.exports = router; 
