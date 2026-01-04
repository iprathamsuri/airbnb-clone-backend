const path = require('path');

const express = require('express');
const rootDir = require("../utils/pathUtil");
const { register } = require('module');

const { registeredHomes } = require('./hostRouter');


const userRouter =express.Router();

userRouter.get("/", (req, res, next) => {
  console.log(registeredHomes);
  // res.sendFile(path.join(__dirname,'../','views','home.html'));
  res.render('home',{registeredHomes: registeredHomes})
})

module.exports=userRouter;