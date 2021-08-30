var fs=require('fs')

var readStream =fs.createWriteStream('./content/first.txt');

var writeStream = fs.createWriteStream('./content/first.txt');

readStream.pipe(writeStream);