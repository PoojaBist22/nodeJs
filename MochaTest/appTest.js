
var assert = require('chai').assert;
var app = require('./app');
 
varappSum=require('./app').findSum;
 
describe('App', function name() {​​​​​​​​
 
it('Got welcome successfully', function name() {​​​​​​​​

var msg = app.sayWelcome('Arun');
 
assert.equal(msg,'welcome Arun')
}​​​​​​​​);    
 
it('Got welcome is null', function name() {​​​​​​​​

varmsg=app.sayWelcome(null);
 
assert.isNull(msg,null)
    }​​​​​​​​);    

it('Got welcome failed', function name() {​​​​​​​​

var msg=app.sayWelcome('Arun');
 
assert.notEqual(msg,'welcome')
    }​​​​​​​​);  

}​​​​​​​​);
 
describe('appSum', () => {​​​​​​​​

it('Sum is fine', () => {​​​​​​​​

varactualSum=appSum(30,30);
 
assert.equal(actualSum,60);
 
    }​​​​​​​​);
 
it('Sum is wrong', () => {​​​​​​​​

varactualSum=appSum(20,30);
 
assert.isAbove(actualSum,40);

    }​​​​​​​​);
}​​​​​​​​);


