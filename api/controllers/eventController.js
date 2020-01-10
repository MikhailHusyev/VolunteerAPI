'use strict';

var mongoose = require('mongoose'),
    Event = mongoose.model('Events');


// Finds multiple events by query parameters
exports.getEvents = function(req, res){

    let queryObject = {

    };

    Event.find({}, function(err, event){
        if(err){
            //TODO: Log errors instead of sending it.
            res.send(err);
        }
            
        res.send(event);
    });
};

// Finds a single event by id
exports.getEvent = function(req, res){
    Event.findById(req.params.eventId, function(err, event){
        if(err){
            //TODO: Log errors instead of sending it.
            res.send(err);
        }
        res.json(event);
    });
}

// Deletes a single event by id
exports.deleteEvent = function(req, res){
    Event.deleteOne({_id: req.params.eventId}, function(err){
        if(err){
            //TODO: Log errors instead of sending it.
            res.send(err);
        }
        //TODO: Log deletes for back up
    });
}