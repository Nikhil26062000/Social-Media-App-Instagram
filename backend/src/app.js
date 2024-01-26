

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
require("./db/connection")

app.get('/', (req, res) => {
    res.status(200).send("Welcome to this Social media app ");
})

app.listen(PORT, () => {
    console.log("Server is running on Port",PORT);
})