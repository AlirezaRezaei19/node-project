const express = require('express');
const indexRouter = require('./routes/router');
const mongoose = require('mongoose');


const app = express();
const connectionString = `mongodb://localhost:27017/blog`;

mongoose.connect(connectionString, (err) => {
    if(!err)
        console.log('MongoDB Connection Succeeded');
     else
        console.log('Error in DB Connection: '.JSON.stringify(err, undefined, 2));
}); 


app.use('/', indexRouter);
app.listen(3000 , () => {
    console.log(`Server running at Port 3000`)
   });