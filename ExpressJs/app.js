var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
//const bodyParser = require('body-parser');
var upload = multer();
var app = express();
var mongoose = require('mongoose');

var schema = mongoose.Schema;

var registrationSchema =new schema({
    userId : Number,
    userName : String,
    userEmail : String,
    userPhone :Number
});
var userProfiles = mongoose.model('registration',registrationSchema);
mongoose.connect("mongodb://localhost/forms",function(err,res){
    if(err){
        console.log("Error in connecting");
    }
    else{
        console.log("Connection established with mongodb");
    }
});

con = mongoose.connect;
app.get('/', function(req,res){
    res.render('form');
});

app.get('/login', function(req,res){
    res.render('form1');
});

app.set('view engine', 'pug');
app.set('views','../src/views');

//for parsing application/json
app.use(bodyParser.json());

//for parsing multipart / form data
app.use(upload.array());
app.use(express.static('public'));

app.post('/',function(req , res){
    console.log(req.body);
    res.send("Received your request!");
});

app.listen(3000);