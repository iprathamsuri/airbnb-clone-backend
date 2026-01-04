const path = require('path')

const express = require('express');
const hostRouter = express.Router();

const rootDir = require("../utils/pathUtil");



hostRouter.get("/add-home", (req, res, next) => {
  res.render("addHome");

})

const registeredHomes = [];

hostRouter.post("/add-home", (req, res) => {
  registeredHomes.push({ houseName: req.body.houseName });
  res.render("homeAdded");
});



exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;