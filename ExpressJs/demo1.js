const express = require('express');
//init app
const  app = express();

//home route
app.get('/', function(req , res){
  //  res.send('Hello World')
  res.send("<p style ='color:blue'>This is paragraph</p>");
});

app.get('/home', function(req , res){
    //  res.send('Hello World')
    res.send("<p style ='color:blue'>This is home page</p>");
  });
  
//atrt server
app.listen(3000 , function(){
    console.log('Sever running at 3000');
});