// npm init -y
// npm i express
const express = require("express");
const fs = require("fs");
const path = require("path");
const cookieParser = require('cookie-parser');
const userRouter = require('./Router/userRouter');
const authRouter = require('./Router/authRouter');
// Server: // route  -> request -> response/file 
// File system// path -> interact/type -> file /folder
// server init
const app = express();

app.use(express.static("Frontend_folder"));
app.use(express.json());
app.use(cookieParser());

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.listen(8081, function () {
    console.log("server started");
})
// 404 page
app.use(function (req, res) {
    // console.log("fullPath", fullPath);
    res.status(404).sendFile
        (path.join(__dirname, "404.html"));
})




















// app.get("/", function (req, res) {
//     console.log("hello from home page")
//     // res.send("<h1>Hello from Backend</h1>");
//     res.status(200).json(
//         { message: content }
//     )
// })
// app.put("/", function (req, res) {
//     console.log("hello from home page")
//     res.send("<h1>Hello from Backend</h1>");
// })
// app.update("/", function (req, res) {
//     console.log("hello from home page")
//     res.send("<h1>Hello from Backend</h1>");
// })
// app.delete("/", function (req, res) {
//     console.log("hello from home page")
//     res.send("<h1>Hello from Backend</h1>");
// })
// app.get("/user", function (req, res) {
//     console.log("users")
//     // for sending key value pair
//     res.json(obj);
// })
// //localhost:8080 ??
// / port, ip,localhost
// app.post("/", function (req, res, next) {
        //     let body = req.body;
        //     console.log("inside first post", body);
        //     next();
        // })
        // app.use(function (req, res, next) {
        //     console.log("inside app.use",)
        //     next();
        // })
        // app.get("/", function (req, res) {
        //     let body = req.body;
        //     console.log("inside first get", body);

        // })
        // app.post("/", function (req, res, next) {
        //     let body = req.body;
        //     console.log("inside second post ", body);
        //     res.send("tested next");
        // })