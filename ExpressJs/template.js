const express= require('express');
const path = require('path');

//init app
const app = express();

//Load view engine
app.set('views' , path.join(__dirname , '../src.views'));
app.set('view engine' , 'pug');

//home route
app.get('/' , function(req , res){
    let emp =[
        {
            empId : 1001,
            empName : 'Yu Yeju',
            empDep : 'HR',
            empSalary : 2787983
        },
        {
            empId : 1002,
            empName : 'Tashi',
            empDep : 'Management',
            empSalary : 436668
        },
        {
            empId : 1003,
            empName : 'Mayoko',
            empDep : 'IT',
            empSalary : 7355423
        }
    ];

    res.render('../src/views/index',{
        title : 'This is Capgemini Departments',
        empData : emp
    });
});

//home route
app.get('../src/views/home', function(req,res){
    res.render('home',{
        mydata:'This is Capgemini Departments'
    });
});

//start server
app.listen(3000 , function(){
    console.log('Server running at port 3000')
});