// Connect to Database
var connection = require('./connection.js')

var orm = {
    selectAll: function(callback){ 
        var q    = 'select id, burger_name '
            q   += 'from burgers'
        connection.query(q, function(err, res){ 
            if (err) throw err;
            callback(res) 
        });
    },
    insertOne: function(burgerName, enjoyed){ 
        var q    = 'insert into burgers set ?'
        connection.query(q, {burger_name : burgerName, devoured : enjoyed}, function(err, res){ 
            if (err) throw err; 
        });
    },
    updateOne: function(id, burgerName, enjoyed){
        var q    = 'update burgers set ? '
            q   += 'where id = ' + id
        connection.query(q, {burger_name : burgerName, devoured : enjoyed}, function(err, res){ 
            if (err) throw err; 
        });
    }
}

module.exports = orm