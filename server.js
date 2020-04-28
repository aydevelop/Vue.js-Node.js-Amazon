const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
require('dotenv').config();
const User = require("./models/user");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false} ));

mongoose.connect(process.env.DATABASE,  
{ 
    useNewUrlParser: true,
    useUnifiedTopology: true 
}, err => {
    if(err){ console.log("Error mongoose.connect: " + err); return; }
    console.log("Successfully connected to database: " + process.env.DATABASE);

    app.listen(process.env.SERVER_PORT, err => {
        if(err){ console.log("Error app.listen: " + err); return; }
        console.log("App listening " + process.env.SERVER_PORT + " port");
    });
});

app.get("/", (req, res) => {
    res.json("Hello amazon clone");
});

app.post("/", (req, res) => {
    let user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;

    user.save(err => {
        if(err){ res.json(err); }
        else{ res.json("User saved"); }
    });
});  