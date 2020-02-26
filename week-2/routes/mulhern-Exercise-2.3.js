/*
Title: Exercise 2.3
Author: Professor Krasso
Date: 26 Feburary 2020
Modified By: Brendan Mulhern
Description: This is routing with HTTP and Express.
*/
var express = require('express');
var http = require('http');

var app = express();
app.get('/', res => {
    res.end("Welcome to The Homepage!");
});
app.get('/about', res => {
    res.end("Welcome to the about page!");
});
app.get('/contact', res => {
    res.end("Welcome to the contact page!");
});
app.use(res => {
    res.statusCode = 404;
    res.end("404!");
})
http.createServer(app).listen(2020);