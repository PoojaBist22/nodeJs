// Modules : Encapsulated code (only share minimum)
// Common Js : every file is a module by default
// require : global variable to access the shared variables by export object

const names = require('./1-names');
const sayHi = require('./1-util');
//console.log(names)
const data = require('./1-alternativeWay');
require('./1-mindGrenade');
//sayHi('Susan')
//sayHi(names.john)
//sayHi(names.peter)