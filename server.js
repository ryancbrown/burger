var path = require('path');
var bodyParser = require('body-parser');
var dotenv = require('dotenv');
var express = require('express');
var PORT = 8080;
var app = express();

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ 
    extended: true 
}));

// Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ 
    defaultLayout: "main" 
}));
app.set("view engine", "handlebars");

// Load in controller for accessing routes
var routes = require("./controllers/burgers_controller.js");
app.use(routes);
 
app.listen(PORT, function() { 
    console.log('App listening on ' + PORT);
});