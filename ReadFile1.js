const {readFileSync} = require('fs');
console.log('start')
// same as const fs = require('fs);
//         fs.readFileSync()
const first = readFileSync('./content/ReadFile.txt','utf8');//paramenter file location and character encoding
const len = first.length; // counts no. of characters
console.log(len);