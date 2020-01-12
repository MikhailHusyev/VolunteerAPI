
var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    Events = require('./api/models/eventModel'),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');


mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/dev', {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false},
     function(err, db){
        if(err) console.log(err);
        else console.log('Connected to DB!');
    }
);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var routes = require('./api/routes/eventRoutes');
routes(app);

app.listen(port);

console.log('RESTful API server started on: ' + port);