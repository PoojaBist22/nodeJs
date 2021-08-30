//const { isBuffer } = require("lodash");

var bufr = new Buffer.alloc(150);
console.log("No of octets written into buffer:"+bufr.write("Capgemini","utf-8"));
console.log("No of octets written :"+bufr.write('is an IT company'));
console.log(bufr.toString());

var info = bufr.slice(0,7);

console.log('Sliced info:'+info.toString())

var bufr2 = new Buffer.alloc(140);

bufr.copy(bufr2,4,0,6);

console.log("2nd buffer"+ bufr2.toString());

//display buffer in JSON form
var bufr3 = new Buffer.alloc(40);
bufr3.write("All the glitters is not gold");
console.log(bufr3.toJSON());