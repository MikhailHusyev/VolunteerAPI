'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
    eventName: {
        type: String,
        required: 'Event Name Required'
    },
    eventDescription:{
        type: String
    },
    imagePrimary:{
        type: String
    },
    organization: {
        type: String,
        required: 'Organization Name Required'
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date,
        default: Date.now
    },
    location: {
        address: {
            street:{
                type: String
            },
            city: {
                type: String
            },
            state:{
                type: String
            },
            counry:{
                type: String
            }
        },
        cordinates: {
            type: [Number],
            index: '2d'
        }
    }
});

module.exports = mongoose.model('Event', EventSchema);