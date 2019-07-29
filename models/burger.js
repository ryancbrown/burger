// Load ORM
var orm = require('../config/orm.js');

var burger = {
    selectAll: function(callback) { 
        orm.selectAll(function(res){
            callback(res)
        });
    },
    //insertOne: orm.insertOne(id, enjoyed),
    updateOne: function(id, enjoyed, callback) { 
        orm.updateOne(id, enjoyed, function(res){
            callback(res)
        });
    }
}

module.exports = burger;