const express = require("express");
const router = express.Router();
const userService = require('./users.service');
const user = [{id: 1, userName: 'grenier', password: '0123', firstName: 'lepuit', lastName: 'frank'},
{id: 2, userName: 'garnier', password: 'Formation13@', firstName: 'lahoule', lastName: 'kilian'},
{id: 3, userName: 'leGeux', password: 'visitor', firstName: 'ouille', lastName: 'jacque'},
{id: 4, userName: 'ToufikSama', password: 'N@rut0', firstName: 'lahoule', lastName: 'jeanne'}
];
router.get('/', getAll);
module.exports = router;

function test(req, res){
    res.send("hello world !");
}