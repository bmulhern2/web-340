/*
Title: Exercise 3.3
Author: Professor Krasso
Date: 4 March 2020
Modified By: Brendan Mulhern
Description: This is outputting the employee ID.
*/
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

var app = express();
app.set("views", path.resolve(__dirname + "/views"));
app.set('view engine', 'ejs');
app.use(logger("short"));
app.get('/:employeeID', (req, res) => {
    var employeeID = parseInt(req.params.employeeID, 10);
    res.render('index', { employeeID: employeeID });
});
http.createServer(app).listen(1000, () => {
    console.log("Server Started on Port 1000");
})