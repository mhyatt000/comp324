var express = require('express');
var http = require('http');
var jsonApp = express();

var notes = {"notes" : [1,2,3,4,5]}


jsonApp.use(express.static(__dirname + "/app"));
http.createServer(jsonApp).listen(3030);

// set up routes
jsonApp.get('/test',function(req,res) {
    res.json(notes)
});

$.getJSON("notes.json", function(response) {
    console.log("response = " + response.toSource());
    buildNote(response);
})
