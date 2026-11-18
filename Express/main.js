/**
 * rest api
 * 
 * this is best practice to make hybrid server
 * for mobile application and different usecase /api/users is useful
 * and for browser based /users is beneficial
 * 
 * 
 * GET /users   ---> get all users [in html document]
 * 
 * GET /users/1  --> get user with ID 1
 * GET /users/2  upto 5
 * 
 * dynamic path parameters
 * where we define with ':id' -> ':' represent postfix it will be dynamic
 * 
 * POST /users    --> CREATE NEW USER
 * 
 * PATCH /users/1  --> edit the user with ID 1
 * 
 * DELETE /users/2  --> delete user with ID 2
 */


// const express = require("express");
// const http = require("http");
// const users = require("./MOCK_DATA.json");

// const app = express();

// app.get("/",(req,res)=>{
//     res.send("welcome " + req.query.username);
// });


// app.get("/users", (req,res)=>{
//     const html = `
//     <ul>
//     ${users.map((user)=> `<li>${user.first_name}</li>`).join("")};
//     </ul>
//     `;
//     res.send(html);
// });



// app.get("/api/users", (req,res)=>{
//     res.json(users);
// });

// app.get("/api/users/:id", (req,res)=>{
//     const id = Number(req.params.id);
//     const user = users.find((user)=> user.id === id);

//     return res.json(user);
// });






// const MyServer = http.createServer(app);

// MyServer.listen(8000, ()=>{console.log("server started!!")});