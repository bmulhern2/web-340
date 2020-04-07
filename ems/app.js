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
var employee = require("./models/employee");
var logger = require('morgan');
var helmet = require("helmet");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");

var csrfProtection = csrf({cookie:true});
var app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));
app.use(helmet.xssFilter());
app.use(cookieParser());
app.use(csrfProtection);
app.use(function(request, response, next) {
var token = request.csrfToken();
response.cookie("XSRF-TOKEN",token);
response.locals.csrfToken = token;
next();    
});

var employee = new employee({
    firstName: "Brendan",
    lastName: "Mulhern"
});
app.get("/", function (req, res) { 
    res.render("index", {
    title: "XSS Prevention Example"
    })
})
http.createServer(app).listen(8080, function() {
    console.log("Application started on Port 8080!");
})