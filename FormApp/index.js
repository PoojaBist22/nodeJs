const express = require('express');
var  mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var pug = require('pug');

const app = express();

var form = require('./models/form');

mongoose.connect("mongodb://localhost/form",{
    useNewUrlParser : true,
    useUnifiedTopology: true
});

//middlewares
app.set('views',path.join(__dirname,'view'));
app.set('view engine','pug');
//app.set('view engine','pug');
app.use(bodyParser.urlencoded({extended : true}));

//redering form.pug

app.get('/',function(req,res){
    res.render('form');
});

//form submission
app.get('/result',(req,res)=>{
    res.render('result');
})

//creating form
app.post('/', function(res,req){
    var username = req.body.username;
    var email = req.body.email;
    var f ={
        username :username,
        email: email
    };
    form.create(f,function(err,newlyCreatedForm){
        if(err){
            console.log(err);
        }
        else{
            res.redirect('/result');
        }
    });
});

//starting the server at port 3000
app.listen(3000,function(){
    console.log('server running at port 3000');
});