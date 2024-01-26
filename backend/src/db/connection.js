

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/instagarm").then(() => {
    console.log("Connected to MongoDB Database");
}).catch((err) => {
    console.log("Error connecting to MongoDB Database");
});