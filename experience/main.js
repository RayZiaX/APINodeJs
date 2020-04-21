var express = require('express');
var app = express();

const test = {version: "0.1.0", status:[0,1]}

app.get('/', function(req, res, {version,status}){
    res.setHeader('Content-Type','application/json');
    res.send(test);
});
app.listen(8080);