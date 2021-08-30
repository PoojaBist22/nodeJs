var  exp = require('express');
//var app = require('http');

var app=exp();

app.use(function name (req , resp ,next){
    // var name = req.body.get('uname');
    console.log('request recieved :', Date.now());
    next();
})

app.get("/test", function name(req ,resp, next){
    resp.send('Welcome to Express');
})

app.listen(3000 , function(){
    console.log('Server started.')
})