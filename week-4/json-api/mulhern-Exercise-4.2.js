var express = require('express');
var http = require('http');

var app = express();
app.get('/customers/:id', (req, res) => {
    var id = parseInt(req.params.id, 10)
    res.json({
        firstName: "James",
        lastName: "Thoughtworthy",
        employeeId: id
    });
});
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080");
})