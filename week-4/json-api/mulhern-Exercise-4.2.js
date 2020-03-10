/*
Title: Exercise 4.2
Author: Professor Krasso
Date: 10 March 2020
Modified By: Brendan Mulhern
Description: This is an example of a JSON API.
*/
// Defining dependencies
var express = require('express');
var http = require('http');
// Defining app
var app = express();
// A Get request to customers/:id
app.get('/customers/:id', (req, res) => {
// Retrieving the id number
    var id = parseInt(req.params.id, 10)
// Printing out the data
    res.json({
        firstName: "James",
        lastName: "Thoughtworthy",
        employeeId: id
    });
});
// Start server
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080");
});