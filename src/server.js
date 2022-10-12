const express = require("express");
const server = express();

const cookieParser = require("cookie-parser");

const staticHandler = express.static("public");

const body = express.urlencoded({ extended: false });
const cookies = cookieParser(process.env.COOKIE_SECRET);


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
server.use(body)

// Routes
server.get("/", home.get);
server.get("/sign-up", signup.get);
server.post("/sign-up", signup.post)
server.get("/log-in", login.get);
server.post("/log-in", body, login.post)
server.get("/my-howdies/:id" , myhowdies.get)


// Export
module.exports = server;
