const mongoose = require('mongoose');
const { Schema } = mongoose;

const fishSchema = new Schema({
    type: {
        type: String,
        required: true,
    },
    length: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time_of_day: {
        type: String,
        required: true,
    },
    river: {
        type: String,
        required: true,
    },
    area: {
        type: String,

    },
    fly: {
        type: String,

    },
    updated: {
        type: Date
    },
}, {
    timestamps: true,
});

const Fish = mongoose.model('Fish', fishSchema)

module.exports = Fish;