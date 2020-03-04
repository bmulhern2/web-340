/*
Title: Exercise 3.4
Author: Professor Krasso
Date: 3 March 2020
Modified By: Brendan Mulhern
Description: This is trying to get ejs to work!
*/
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
const ejsLint = require('ejs-lint');

var app = express();
app.set(path.join(__dirname + "/views"));
app.set('view engine', 'ejs');
app.use(logger("short"));
app.get('/', (req, res) => {
    res.render('index', { message: "Home Page" });
});
app.get('/about', (req, res) => {
    res.render('about', { message: "About Page" });
});
app.get('/contact', (req, res) => {
    res.render('contact', { message: "Contact Page" });
});
app.get('/products', (req, res) => {
    res.render('products', { message: "Products Page" });
});
http.createServer(app).listen(1000, () => {
    console.log("Server has started on Port 1000");
});