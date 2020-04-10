const express = require("express");
const router = express.Router();
const status = {
    "version": "0.1.0",
    "status": [0,1]
}
router.get('/', getStatus);

async function getStatus(){
    return status.map(s =>{
        return s
    });
}

function getStatus(req, res, next){
    getStatus()
    .then(status => res.json(status))
    .catch(err => next(err));
}