'use strict';

module.exports = function(app){
    var event = require('../controllers/eventController');

    app.route('/v1/events')
        .get(event.getEvents)
        .post(event.addEvent)
    
    app.route('/v1/event/:eventId')
        .get(event.getEvent)
        .put(event.updateEvent)
        .delete(event.deleteEvent);
};