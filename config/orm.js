// Connect to Database
var connection = require('./connection.js');

var orm = {
    selectAll: function(callback) { 
        var q    = 'select id, burger_name, devoured ';
            q   += 'from burgers';
        connection.query(q, function(err, res) { 
            if (err) throw err;
            callback(res);
        });
    },
    insertOne: function(burgerName, enjoyed, callback) { 
        var q    = 'insert into burgers set ?'
        connection.query(q, {burger_name : burgerName, devoured : enjoyed}, function(err, res) { 
            if (err) throw err; 
            callback(res);
        });
    },
    updateOne: function(id, enjoyed, callback) {
        var q    = 'update burgers set ? '
            q   += 'where id = \'' + id + '\''
        connection.query(q, {devoured : enjoyed}, function(err, res) { 
            if (err) throw err; 
            callback(res);
        });
    }
};

module.exports = orm;