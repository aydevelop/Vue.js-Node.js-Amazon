const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false} ));

app.get('/', (req, res) => {
    res.json("Hello amazon clone");
});

app.post('/', (req, res) => {
    console.log(req.body.name);
    res.end();
});


app.listen(3000, err => {
    if(err){
        console.log(err);
    }

    console.log("listen 3000 ....");
});