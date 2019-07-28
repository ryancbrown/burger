var connection = require('./connection.js')

var orm = {
    selectAll: function(){ 
        var q    = 'select id, burger_name, devoured '
            q   += 'from burgers'
        connection.query(q, function(err, res){ 
            if (err) throw err; 
            console.log(res)
        });
    },
    insertOne: function(){ 
        var q    = 'insert into burgers set ?'
        connection.query(q, {burger_name:'Flavortown', devoured:false}, function(err, res){ 
            if (err) throw err; 
            console.log(res)
        });
    },
    updateOne: function(){
        var q    = 'update burgers set ? '
            q   += 'where id = 4'
        connection.query(q, {burger_name:'Normal', devoured:false}, function(err, res){ 
            if (err) throw err; 
            console.log(res)
        });
    }
}

module.exports = orm