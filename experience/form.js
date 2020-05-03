const express = require('express');
const router = express.Router();
const users = [{id: 1, userName: 'grenier', password: '0123', firstName: 'lepuit', lastName: 'frank'},
{id: 2, userName: 'garnier', password: 'Formation13@', firstName: 'lahoule', lastName: 'kilian'},
{id: 3, userName: 'leGeux', password: 'visitor', firstName: 'ouille', lastName: 'jacque'},
{id: 4, userName: 'ToufikSama', password: 'N@rut0', firstName: 'lahoule', lastName: 'jeanne'}
];
module.exports = router
router.get('/',page);
router.post('/authenticate',authenticate);
router.post('/users',getUsers);
function page (req,res){
    res.setHeader('Content-Type','text/html; charset=utf-8');
    res.send("<form action='authenticate' method='POST'><input type='text' name='nom' id='nom'><input type='password' name='mdp' id='mdp'><input type='submit' id='envoi'></form>");
}


function authenticate(req,res){
    const user = users.find(u => u.userName === req.body.nom && u.password === req.body.mdp);
    if(user){
        res.setHeader('Content-Type','text/html; charset=utf-8');
        res.send('Bonjours '+req.body.nom+' vous etes bien connecter')
    }else{
        res.setHeader('Content-Type','text/html; charset=utf-8');
        res.send('Erreur ! Je ne vous connais pas !')
    }
}

function getUsers(req,res) {
    res.setHeader('Content-Type','application/json')
    res.send(users);
};