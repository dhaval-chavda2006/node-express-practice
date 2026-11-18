// /*
//  * rest api
//  *
//  * GET /users   ---> get all users [in html document] -DONE
//  * GET /users/1  --> get user with ID 1         - DONE
//  * GET /users/2  upto 5                         - DONE
//  *
//  * dynamic path parameters
//  * where we define with ':id' -> ':' represent postfix it will be dynamic
//  * ---------------------------------------------------------------------------
//  *
//  * WE NEED POSTMAN TO TEST OUR API'S
//  *
//  * POST /users    --> CREATE NEW USER
//  *
//  * PATCH /users/1  --> edit the user with ID 1
//  *
//  * DELETE /users/2  --> delete user with ID 2
//  */

const express = require("express");
const http = require("http");
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();

// middleware
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("welcome " + req.query.username);
});

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.get("/users", (req, res) => {
  const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")};
    </ul>
    `;
  res.send(html);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);

    return res.json(user);
  })
  .patch((req, res) => {
    return res.json({ status: "pending" });
  })
  .delete((req, res) => {
    return res.end("pending");
  });

app.post("/api/users", (req, res) => {
  const body = req.body;
  users.push({...body, id : users.length + 1});
  
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "success", id:users.length });
  });

});

const MyServer = http.createServer(app);

MyServer.listen(8000, () => {
  console.log("server started!!");
});
