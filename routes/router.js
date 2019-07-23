const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Device = require('../models/device');


router.post('/', function (req, res) {
    const sendPoint = new Device({
        _id : new mongoose.Types.ObjectId,
        date  : req.body.date,
        point : req.body.point
    });
    sendPoint.save().then(result => {
        console.log(result);
    })
    .catch(err => console.log(err)) ;
    
    res.status(201).json({
        messeage : 'your response arrived',
        point : sendPoint,
    });
});
router.get('/records', function(req, res) {
    Device.find().exec().then(docs => {
        console.log(docs);
        res.status(200).json(docs);
    }).catch(err => {
        console.log(err);
    })
  });


module.exports = router;
                