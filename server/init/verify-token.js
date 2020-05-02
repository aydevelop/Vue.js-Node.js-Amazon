const jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {
    let token = req.headers["x-access-token"] || req.headers["authorization"] || req.headers["token"];
    let bearer = "Bearer ";

    if(token) {
        if(token.startsWith(bearer)) {
            token = token.slice(bearer.length, token.length);
        }

        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if(err) { throw new Error("Failed to authenticate"); }
            else {
                req.decoded = decoded;
                next();
            }
        });
    }else{
        res.json("No token Provided");
    }
}