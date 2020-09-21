const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _id: string,
    type: string,
    length: string,
    date: Date,
    time_of_day: string,
    river: string,
    area: string,
    fly: string,
    status: string,
    updated: Date,
});

module.exports = mongoose.model('Post', schema);