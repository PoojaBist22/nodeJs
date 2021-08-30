const numbers = require("./2-util1.js");
numbers(2);
numbers(3);
numbers(0);

const prompt =require('prompt-sync')();

const num1 =parseInt(prompt('Enter a number:'));
numbers(num1);