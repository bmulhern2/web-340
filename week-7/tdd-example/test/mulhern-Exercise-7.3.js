/*
============================================
; Title:  mulhern-Exercise-7.2
; Author: Professor Krasso
; Date:   31 March 2020
; Modified By: Brendan Mulhern
; Description: Tests with mocha.
;===========================================
*/
var assert = require("assert");

describe("String#split", function(){
    it("should return an array of fruits", function(){
        assert(Array.isArray('Apple,Orange,Mango'.split(',')));
    });
});