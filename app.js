const express = require('express');
const router = require('./routes/router')
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const connectionString = `mongodb://localhost:27017/blog`;

mongoose.connect(connectionString, (err) => {
    if(!err)
        console.log('MongoDB Connection Succeeded');
     else
        console.log('Error in DB Connection: '.JSON.stringify(err, undefined, 2));
}); 

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/',router);

module.exports = app;
