'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventScheema = new Schema({
    organization: {
        type: String,
        required: 'Enter Orgnization'
    },
    eventName: {
        type: String
    },
    startDate: {
        type: Date,
        default: Date.now
    }
});

module.exports - mongoose.model('Event', EventScheema);