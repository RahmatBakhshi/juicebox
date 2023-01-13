const express = require("express");
const user = express.Router();

user.get("/", (req, res, next) => {
  console.log("Hello");
  res.send("<H1>Hello<H1/>");
});
module.exports = user;
