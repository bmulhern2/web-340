/*
============================================
; Title:  Exercise-5.3
; Author: Professor Krasso
; Date:   20 March 2020
; Modified By: Brendan Mulhern
; Description: This is my first Pug Template example.
;===========================================
*/

var express = require('express');
var http = require('http');
var pug = require('pug');
var path = require('path');

var app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");
app.get("/", function(req, res) {
    res.render("index", {
        message: "This is the homepage for Exercise-5.3"
    })
});
http.createServer(app).listen(8080, function() {
    console.log("Application has started on Port 8080");
});