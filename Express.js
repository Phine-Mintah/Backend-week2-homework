// //We required http module and creating a server
// // import express from 'express';  // Add this at the top
// const http = require("http");

// //Creating a request handler
// const handleAllRequests = (req, res) => {
//     console.log("Hi! My server just received a request");

//     const url = req.url;
//     if (url === "/") {
//         res.send("<h1>Welcome to the HomePage</h1>");
//     } else if (url === "/login") {
//     res.send("<h1>Welcome to the Login Page</h1>");
//     } else if (url === "/logout") {
//     res.send("<h1>You successfully LoggedOut</h1>");
//     } else {
//     res.send("<h1>Page 404</h1>");
//     }

//     res.send("<h1>'This is a Test!'</h1>");
//     res.end("The test have been successfully completed!!");
// };

// //Creating a server
// // const server = http.createServer(handleAllRequests);
  
// const server = express();

// server.use();
// //Listening to the server
// server.listen(1000, "127.0.0.1", () => {
//     console.log("My server is listening to request on PORT 4000");
// });



import express from "express";

const app = express();

// Home route
app.get("/", (req, res) => {
    res.send("<h1>Welcome to the HomePage</h1>");
});

// Login route
app.get("/login", (req, res) => {
    res.send("<h1>Welcome to the Login Page</h1>");
});

// Logout route
app.get("/logout", (req, res) => {
    res.send("<h1>You successfully LoggedOut</h1>");
});

// 404 route
app.use((req, res) => {
    res.status(404).send("<h1>Page 404</h1>");
});

// Start server
app.listen(1000, "127.0.0.1", () => {
    console.log("My server is listening on PORT 1000");
});