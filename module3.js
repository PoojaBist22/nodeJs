const str = require('./3-util.js')

str('pooja');
str('poo67%');

const prompt =require('prompt-sync')();

const str1 = prompt('Enter a string:');
str(str1);