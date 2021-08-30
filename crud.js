// built in modules
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//connecting mongoDB server
mongoose.connect('mongodb://localhost/crud');

// connection with mongoose
const con = mongoose.connection;

//event emitter
con.once('open',function(){
    console.log('Connection open');
})
con.on('Error',function(err){
    console.log(err)
})

//initialize express
const crud = express();

//load view engine
crud.set('')