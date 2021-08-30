/*Problem statement #1
Write various scenarios for validating the given email id of a student. And develop the testcases for the scenarios that you explored.
    Methods/blocks: 
    validateEmail(String email)
Explore the scenarios to validate the email id and write the scenarios
Implement the testcases for the scenarios that are written.*/

var assert = require('chai');
var app = require('./app');

describe('app',function email(){
    it('Valid email', function email(){
        var email = app.email('abc@xyz.com');
        assert.equal(email ,'abc@xyz.com');
    });

    it('Invalid email', function email(){
        var email = app.email('abc@xyz.com');
        assert.notequal(email ,'abc@xyz.com');
    });
})
 