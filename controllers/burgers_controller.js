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

router.post("/api/burger/:id", function (req, res) {
    var id = req.params.id;
    var enjoyed = true

    // Runs selectAll in burgers.js, which then runs the SQL in orm.js
    burger.updateOne(id, enjoyed, function(results){
        console.log(results)
    });
    
});

module.exports = router;