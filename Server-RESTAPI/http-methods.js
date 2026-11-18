/*
restapi:
get put post delete

get -> means get information from server
post -> means send response from server to browser

*/

const http = require("http");
const fs = require("fs");
const url = require("url");


const MyServer = http.createServer((req,res)=>{
    const log = `${Date.now()}: New Request Received...`;
    const MyURL = url.parse(req.url, true);
    console.log(MyURL);

    fs.appendFile("log.txt",log,(err,data)=>{
        switch (MyURL.pathname) {
            case "/":
                if(req.method === "GET") res.end("you are at homepage");
                break;

            case "/about":
                const username = MyURL.query.username;
                const search = MyURL.query.search;
                res.write(`hi ${username}`);
                res.end(`you searched ${search}`);
                break;

            case "/search":
                const search1 = MyURL.query.search_query;
                res.end("here are your result: "+search1);
                break;

            case "/signup":
                if(req.method === "GET") {res.end("this is signup page...");}
                else if(req.method === "POST") {res.end("success..");}
                break;

            default:
                res.end("404 page not found");

        }
    })
    
});

MyServer.listen(8000,() =>{console.log("Server Started ...")})