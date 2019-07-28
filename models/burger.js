// Load ORM
var orm = require('../config/orm.js')

var burger = {
    selectAll: function(callback) { 
        orm.selectAll(function(res){
            callback(res)
        })
    },
    //insertOne: orm.insertOne(burgerName, enjoyed),
    //updateOne: orm.updateOne(id, burgerName, enjoyed)
}

module.exports = burger