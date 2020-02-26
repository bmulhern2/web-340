/*
Title: Exercise 2.2
Author: Professor Krasso
Date: 25 Feburary 2020
Modified By: Brendan Mulhern
Description: This is an HTTP server built with HTTP and Express
*/
var express = require('express');
var http = require('http');

var app = express(); 
app.use(function(request, response){
    console.log("In comes a request to:" + request.url);
    response.end("Hello World");
});

http.createServer(app).listen('8080');