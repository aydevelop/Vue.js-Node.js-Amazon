const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const fs = require('fs');
require('dotenv').config();

const app = express();

//Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false} ));
const dir = __dirname + "/uploads";
app.use(express.static(dir));
 if (!fs.existsSync(dir)){ 
     if(fs.mkdirSync(dir)) { throw new Error(dir + ' - does not exist'); }
 }

//App connect
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
mongoose.set('useCreateIndex', true);

//Routers
const productRoutes = require("./routes/product");
app.use("/api/products", productRoutes);