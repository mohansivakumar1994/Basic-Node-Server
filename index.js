const express = require("express");
const http_server = express();
const parser = require ('body-parser');
const { isLoggedIn } = require("./auth.middleware");
const PORT = 5000;
const HOST_NAME = "localhost";

http_server.use(parser.json());

http_server.listen(PORT, HOST_NAME, () => {
 console.log("server started successfully");
});

http_server.get("/", (req, res, next) => {
 return res.status(200).json({
  message: "Server working",
 });
});

http_server.post("/deleteUser", isLoggedIn, (req, res, next) => {
console.log(req.headers);
 return res.status(201).json({
  message: "User deletion successful"
 });
});