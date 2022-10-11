const express = require("express");
const server = express();

const cookieParser = require("cookie-parser");

const staticHandler = express.static("public");

const body = express.urlencoded({ extended: false });
const cookies = cookieParser(process.env.COOKIE_SECERT);

// Routes
const home = require("./routes/home");
const login = require("./routes/login");
const signup = require("./routes/sign-up");
const logout = require("./routes/log-out");
const myhowdies = require("./routes/my-howdies");
const deleteitem = require("./routes/delete");

// Middlewear
server.use(cookies);
server.use(staticHandler);

// Routes
server.get("/", home.get);
server.get("/sign-up", signup.get);


// Export
module.exports = server;
