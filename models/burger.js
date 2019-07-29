// Load ORM
var orm = require('../config/orm.js');

var burger = {
    selectAll: function(callback) { 
        orm.selectAll(function(res) {
            callback(res)
        });
    },
    insertOne: function(burgerName, enjoyed, callback) {
        orm.insertOne(burgerName, enjoyed, function(res) {
            callback(res)
        });
    }, 
    updateOne: function(id, enjoyed, callback) { 
        orm.updateOne(id, enjoyed, function(res) {
            callback(res)
        });
    }
};

module.exports = burger;