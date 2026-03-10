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

// JSON user object
const user = {
    name: "John Doe",
    email: "JohnDoe"
};

// Json list of products
const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 }
];

// Home route
app.get("/", (req, res) => {
    res.send("<h1>Welcome to Express server</h1>");
});

// about route
app.get("/about", (req, res) => {
    res.send("<h1>About this application</h1>");
});

// contact route
app.get("/contact", (req, res) => {
    res.send("<h3>Contact page</h3>")
});


// produce route
app.get("/products", (req, res) => {
    res.json(products);   // sends JSON response
});

// user route
app.get("/user", (req, res) => {
    res.json(user);   // sends JSON response
})

// 404 route
app.use((req, res) => {
    res.status(404).send("<h1>Page 404</h1>");
});

// Start server
app.listen(1000, "127.0.0.1", () => {
    console.log("My server is listening on PORT 1000");
});