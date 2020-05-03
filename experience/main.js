const express = require('express');
const bodyParser = require('body-parser');
var app = express();
const cors = require('cors');
const status = {version: "0.1.0", statut:[0,1]}



app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use('/',require('./form.js'));


app.get('/status', function(req, res, {version,statut}){
        res.setHeader('Content-Type','application/json');
        res.send(status);
});

app.listen(8080);