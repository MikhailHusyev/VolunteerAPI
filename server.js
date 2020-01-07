
var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    Event = require('./api/models/eventModel')
    port = process.env.PORT || 3000;



var routes = require('./api/routes/eventRoutes');
routes(app);

app.listen(port);

console.log('RESTful API server started on: ' + port);