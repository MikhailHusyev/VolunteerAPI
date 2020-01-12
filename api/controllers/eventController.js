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
        //res.status(404);
        res.json(event);
    });
};

// Deletes a single event by id
exports.deleteEvent = function(req, res){
    Event.deleteOne({_id: req.params.eventId}, function(err, event){
        if(err){
            //TODO: Log errors instead of sending it.
            res.send(err);
        }

        if(event.deletedCount == 0){
            res.send(404, 'Event not found.');
        }
        res.send('Event deleted.');
        //TODO: Log deletes for back up
    });
};

exports.updateEvent = function(req, res){

    Event.findByIdAndU({_id: req.params.eventId}, req.body, {useFindAndModify: true}, function(err, doc){
        if(err){
            //TODO: Log errors instead of sending it.
            res.send(500, err);
        }
        res.json('Event modified.');
    });
};