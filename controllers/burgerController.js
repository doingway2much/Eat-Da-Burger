var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");


router.get("/burgers", function(req, res) {
    burger.all(function(data) {
        var burgersData = {
        burgers: data
    };
    console.log(burgersData);
    res.render("index", burgersData);
    });
});

module.exports = router;
