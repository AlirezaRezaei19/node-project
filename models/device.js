const mongoose = require('mongoose');

const device = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    date: { type: Date , require : true },
    point : {type : String, require : true}
});

module.exports = mongoose.model('device' , device);