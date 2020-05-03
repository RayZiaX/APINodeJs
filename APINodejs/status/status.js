const express = require("express");
const router = express.Router();
const status = {
    version: "0.1.0",
    status: [0,1]
}
router.get('/', getStatus);

function getStatus(req, res,{version,status}){
    res.setHeader('Content-Type','application/json');
    res.send(test);
};

