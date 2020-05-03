var express = require('express');
var router = express.Router();
var app = express();

const users = {nom : 'Frank', mdp: '123'}

app.post('/users', function(req,res,{nom,mdp}){
    res.setHeader('Content-Type','text/html; charset=utf-8');
    res.send("hey salut !")
})