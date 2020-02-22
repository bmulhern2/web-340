
/*
============================================
; Title: Assignment 1.5
; Author: Professor Krasso
; Date: 22 Feburary 2020
; Modified By: Brendan Mulhern
; Description: This section of code closely resembles an HTTP server.
;===========================================
*/ 

var http = require('http');

function functionRequest(request, response) {
    var body = "Wassup";
    var contentLength = body.length;
    response.writeHead(200, {
        'Content-Length': contentLength,
        'Content-Type': 'text/plain'
    });
    response.end(body);
}
var server = http.createServer(functionRequest);
server.listen('2020');