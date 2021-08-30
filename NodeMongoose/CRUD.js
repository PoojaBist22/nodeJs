const { update } = require('lodash');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testMongo',function(err,res){ 
    if(err){
        console.log("Error in connecting");
    }
    else{
        console.log("Connection established with mongodb");   
    }
});

var schema = mongoose.Schema;
var empSchema = new schema({
    name : String,
    id :Number,
    designation : String
});

var empProfiles = mongoose.model('EmployeeProfile',empSchema);

con = mongoose.connect;
var rakeshProfile = new empProfiles({name :"Rakesh",id:1002, dept :"Business Management"});
var meenaProfile = new empProfiles({name :"Meena",id:1003, dept :"HR"});
var poojaProfile = new empProfiles({name :"Pooja",id:1004, dept :"IT"});
var tejuProfile = new empProfiles({name :"Tejaswini",id:1005, dept :"Graphic Designer"});
var anuragProfile = new empProfiles({name :"Anurag",id:1006, dept :"Assistant Designer"});
var navinProfile = new empProfiles({name :"Navin",id:1007, dept :"Management"});
var joansProfile = new empProfiles({name :"Joans",id:1008, dept :"Management"});
rakeshProfile.save(function(err){
    if(err){
        console.log("Not saved")
    }
    else{
        console.log("Profile is saved")
    }   
});
meenaProfile.save();
poojaProfile.save();
tejuProfile.save();
anuragProfile.save();
navinProfile.save();
joansProfile.save();

console.log(empProfiles);

joansProfile.update({name : "Stalin",id:1008, dept :"Management"});

console.log(empProfiles);

joansProfile.remove();

console.log(empProfiles);