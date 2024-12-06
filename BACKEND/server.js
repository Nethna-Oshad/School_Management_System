const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

// Corrected mongoose connection options
mongoose.connect(URL, {
    
    useNewUrlParser: true,
    useUnifiedTopology: true, // Correct spelling of `useUnifiedTopology`
      
});

// Verify connection success
const connection = mongoose.connection;

connection.once("open", () => {
    console.log("MongoDB Connection success!");
});

const studentRouter = require("./router/students.js");

app.use("/student",studentRouter);  //student.js file deka hadala me line deka add krnn

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});  
