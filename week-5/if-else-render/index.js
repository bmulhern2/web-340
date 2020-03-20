/*
Title: Exercise 5.2
Author: Professor Krasso
Date: 20 March 2020
Modified By: Brendan Mulhern
Description: This is: For Loops with EJS.
*/
var express = require('express');
var http = require('http');
var path = require('path');

var app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

var n = [
    "Andrew",
    "Brad",
    "Cory",
    "Demarcus"
];
app.get("/", function(req, res) {
    res.render("index",{ names: n });
})
http.createServer(app).listen(8080, function() {
    console.log("Application started on Port 8080!");
});