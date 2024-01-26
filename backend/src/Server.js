require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
require("./db/connection");
const authRouter = require("./router/auth-router");


//! In summary, app.use(express.json()); is an important middleware for handling JSON requests in your Express application, especially when dealing with APIs where JSON is a common data format. It's placed before your route definitions to ensure that it processes the request body before your route handlers.
app.use(express.json());

app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log("Server is running on Port", PORT);
});
