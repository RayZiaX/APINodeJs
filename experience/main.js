var express = require('express');
var app = express();
const test = {version: "0.1.0", status:[0,1]}
const users = [{id: 1, userName: 'grenier', password: '0123', firstName: 'lepuit', lastName: 'frank'},
{id: 2, userName: 'garnier', password: 'Formation13@', firstName: 'lahoule', lastName: 'kilian'},
{id: 3, userName: 'leGeux', password: 'visitor', firstName: 'ouille', lastName: 'jacque'},
{id: 4, userName: 'ToufikSama', password: 'N@rut0', firstName: 'lahoule', lastName: 'jeanne'}
];


app.get('/', function(req, res, {version,status}){
    res.setHeader('Content-Type','application/json');
    res.send(test);
});
app.get('/users', function(req, res, {version,status}){
    res.setHeader('Content-Type','application/json');
    res.send(users);
});
app.listen(8080);