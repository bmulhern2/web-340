/*
Title: Exercise 3.3
Author: Professor Krasso
Date: 3 March 2020
Modified By: Brendan Mulhern
Description: This is trying to get ejs to work!
*/
var express = require('express');
var logger = require('morgan');
var path = require('path');
var http = require('http');

var app = express();
app.use(logger("short"));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set(path.join(__dirname + '/views'));
app.get('/', (req, res) => {
    var message = "EJS WORKS!"
    res.render('index', { message : message })});
http.createServer(app).listen('9000', () => {
    console.log("Server started on Port 9000");
});