const morgan = require("morgan");
server.use(morgan("dev"));

server.use(express.json());

const express = require("express");
const route = express.Router();

const usersRouter = require("./users");
route.use("/users", usersRouter);

module.exports = route;
