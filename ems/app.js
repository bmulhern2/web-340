/*
============================================
; Title:  Assignment-5.4
; Author: Professor Krasso
; Date:   21 March 2020
; Modified By: Brendan Mulhern
; Description: This is the header; nav and footer of the ems project.
;===========================================
*/
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

var app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));
app.get("/", function (req, res) { 
    res.render("index", {
    title: "Home Page"
    })
})
http.createServer(app).listen(8080, function() {
    console.log("Application started on Port 8080!");
})