var callbackfun = function(data){
    console.log('Recieved data'+ data);
    console.log(data.id)
    console.log(data.name)
    console.log(data.salary)
}

var fun1 = function(callback){

    console.log("in fun1.");
    var empObj={
        id:1001,
        name : 'Pooja',
        salary : 500000
    }
    callback(empObj);
    console.log('in fun1. ends');
}
fun1(callbackfun);