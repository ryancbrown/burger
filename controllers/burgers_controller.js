var app = require('express');
var router = app.Router()
var burger = require('../models/burger.js')

// If loading root, show all burgers
router.get("/", function (req, res) {
    
    // Runs selectAll in burgers.js, which then runs the SQL in orm.js
    burger.selectAll(function(results){
        var obj = {
            burger: results
        }
        res.render("index", obj);
    });
    
});

module.exports = router