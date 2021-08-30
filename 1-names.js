// local
const secret ='SUPER SECRET'
// share
const john ='John'
const peter ='Peter'

//console.log(module) // global variable
//multiple variable sharing
module.exports ={  john , peter }   // whatever you dump in export can be accessed from anywhere in the app
// ES6 syntax is used as key name is same as value name                                    
// want to share only john and peter and not secret
                