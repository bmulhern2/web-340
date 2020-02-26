var http = require('http');
var express = require('express');
var path = require('path');

var app = express();
app.set("views", path.resolve(__dirname + "/views"));
app.set("view engine", "ejs");
app.get('/', (req, res) => {
    res.render("index",{ firstName: "Brendan", lastName: "Mulhern", address: "91 Bagdad Rd, Durham, New Hampshire, 03824" });
});
http.createServer(app).listen(9021, () => {
    console.log("... Started on port 9021");
});