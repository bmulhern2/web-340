/*
============================================
; Title:  mulhern-Exercise-7.2
; Author: Professor Krasso
; Date:   31 March 2020
; Modified By: Brendan Mulhern
; Description: Tests with mocha and chai!
;===========================================
*/
var fruits = require("../mulhern-fruits");
var chai = require("chai");
var assert = chai.assert;
describe("fruits", function(){
    it("should return an array of fruits", function() {
        var f = fruits('Apple,Orange,Mango');
        assert(Array.isArray(f));
    });
});