const express = require("express");
const http = require("http");

const app = express();

app.get("/", (req, res)=>{
    return res.send("you are at homepage...");
})

app.get("/about", (req,res)=>{
    return res.send("you are at about page" + " hey " + req.query.username);
})

app.get("/book-a-demo", (req,res)=>{
    return res.send("this is booking a demo page: " + req.query.bookdemo + " and username is: " + req.query.username);
})

const MyServer = http.createServer(app);

MyServer.listen(8000, ()=>{console.log("server started!!")});