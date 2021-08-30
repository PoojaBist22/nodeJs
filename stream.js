var fs =require('fs');

var readStream =fs.createReadStream('./content/first.txt');
var data='';

readStream.setEncoding('utf-8');
readStream.on('data',function(datafrom){
    data +=datafrom;
});

readStream.on('end',function(){
    console.log(data);
});

var writeStream = fs.createWriteStream('./content/first.txt');
var writedata ='Implementation of write Stream';
writeStream.write(writedata,'utf-8');
writeStream.end();
writeStream.on('finish',function(){
    console.log('Data written in file');
});