const mongoose = require('mongoose');

const user_schema = new mongoose.Schema({
    name: String,
    id: Number,
    region: String,
    Segment: String,
});

const user_model = mongoose.model("user", user_schema);


module.exports = user_model;