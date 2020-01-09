'use strict';

var mongoose = require('mongoose'),
    Task = mongoose.model('Event');

exports.getEvents = function(req, res){

    Task.find({}, function(err, task){
        if(err)
            res.send(err);
        res.json(task);
    });

};