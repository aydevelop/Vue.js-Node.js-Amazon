const router = require("express").Router();
const t = require("../init/try-catch");
const verify = require("../init/verify-token");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

router.post("/signup", t(async (req, res) => {
    if(!req.body.email || !req.body.password){
        throw new Error("Please enter email or password");
    }else{
        let user = new User();
        user.name = req.body.name;
        user.email = req.body.email;
        user.password = req.body.password;
        await user.save();

        let token = jwt.sign(user.toJSON(), process.env.SECRET, {
            expiresIn: 604800
        });

        res.json({
            token: token,
            message: "Created a new user"
        });
    }
}));

router.get("/user", verify,  t(async (req, res) => {
     let user = await User.findOne({ _id: req.decoded._id });
     res.json(user);
}));

router.post("/login", t(async (req, res) => {
    let user = await User.findOne({ email: req.body.email });

    if(!user){
        res.status(403).json({
            success: false,
            message: "Authentication failed, user not found"
        })
    } else {
        if(user.comparePassword(req.body.password)) {
            let token = jwt.sign(user.toJSON(), process.env.SECRET, {
                expiresIn: 604800
            });

            res.json({
                token: token,
                message: "User logged in"
            });
        } else {
            res.status(403).json({
                success: false,
                message: "Authentication failed, wrong password"
            })
        }
    }
}));

module.exports = router;