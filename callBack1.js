var callbackfun = function(data){
   // console.log('Recieved data'+ data);
   for(var i=0; i< data.length;i++){
    console.log(data[i].id)
    console.log(data[i].name)
    console.log(data[i].salary)
   }
    
}

var fun1 = function(callback){
    // always the functionality should be inside call back
    console.log("in fun1.");
    var emp1={
        id:1001,
        name : 'Pooja',
        salary : 500000
    };
    var emp2={
        id:1002,
        name: 'Shweta',
        salary:'356996'
    };
    var emp = new Array();
    emp.push(emp1);
    emp.push(emp2);
    console.log(emp);
    callback(emp);
    console.log('in fun1. ends');
}
fun1(callbackfun);


    













