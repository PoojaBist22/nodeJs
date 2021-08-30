const amount = 9
if (amount <10){
    console.log("small number");
}
else{
    console.log("large number");// ; not manadatory
}
console.log(`Hey it's my first node app!!!`);// tild can also be used instead of ""/''
console.log(__dirname)// global variable
setInterval(()=>{
    console.log('hello world')
},1000) // prints hello world after 1 sec . To stop press ctrl + C