const mongoose = require('mongoose');

const device = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    date: { type: Date , required : true },
    point : {type : String, required : true}
});

module.exports = mongoose.model('device' , device);