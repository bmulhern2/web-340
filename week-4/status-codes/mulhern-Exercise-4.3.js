/*
Title: Exercise 4.3
Author: Professor Krasso
Date: 10 March 2020
Modified By: Brendan Mulhern
Description: This is displaying Status Codes with Express.
*/
// Defining dependencies
var express = require('express');
var http = require('http');

// Defining App of Express
var app = express();
// Get request to not-found
app.get('/not-found', (req, res) => {
// Shows a status of 404 and outputs 'Page not found'
    res.status(404);
    res.json({
        error: "Page not found"
    })
})
// Get request to page 'okay'
app.get('/okay', (req, res) => {
// Displays a 200 status code and prints to the console the message.
    res.status(200);
    res.json({
        message: "Correct is the loading of the Page"
    })
});
app.get('/not-applied', (req, res) => {
// Display a status code of 501 and prints 'Page not loaded' to the console.
    res.status(501);
    res.json({
        error: "Page not loaded."
    })
})
// Create server to listen on port 8080
http.createServer(app).listen(8080, () => {
// Prints to the console the message
    console.log("Application started on Port 8080!");
})
