const express = require("express");
const router = express.Router();
const md5 = require('md5');
const utilisateurs = require("../models/utilisateurs.js")

router.post("/ajt", (req, res)=>{

  console.log(req.body);
    
})