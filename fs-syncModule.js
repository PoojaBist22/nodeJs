const {readFileSync, writeFileSync} = require('fs');
console.log('start')
// same as const fs = require('fs);
//         fs.readFileSync()
const first = readFileSync('./content/first.txt','utf8');//paramenter file location and character encoding
const second = readFileSync('./content/second.txt','utf8');

//console.log(first , second)

//if the file is not there it will create first
writeFileSync(
    './content/result-sync.txt',
    `Here is the result :${first}, ${second}`,
    {flag:'a'}  // to append in the file
    )

    console.log('done with this task')
    console.log('starting the next one')