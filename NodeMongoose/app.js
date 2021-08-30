var mongoose = require('mongoose');

var schema = mongoose.Schema;

var userSchema =new schema({
    userId : Number,
    userName : String,
    userEmail : String,
    userPhone :Number
});
var userProfiles = mongoose.model('userProfiles',userSchema);
var meenaProfiles = new userProfiles({userId : 1001,userName:'Meena',userEmail : "meena@gmail.com",userPhone : 9876543210});
mongoose.connect("mongodb://localhost/testMongoose",function(err,res){
    if(err){
        console.log("Error in connecting");
    }
    else{
        console.log("Connection established with mongodb");
    }
});

con = mongoose.connect;
meenaProfiles.save(function(err){
    if(err){
        console.log("Not saved")
    }
    else{
        console.log("Profile is saved")
    }   
});