const router = require("express").Router();
const t = require("../init/try-catch");
const Review = require("../models/review");
const Product = require("../models/product");
const upload = require("../init/upload-photo");
const verify = require("../init/verify-token");

router.post("/:productID", verify, t(async (req, res) => {
    
    const review = new Review();
    review.headline = req.body.headline;
    review.body = req.body.body;
    review.rating = req.body.rating;
    review.user = req.decoded._id;
    review.productID = req.params.productID;

    const saved = await review.save();
    res.json(saved);
}));

router.get("/:productID", t(async (req, res) => {
    const prodRev = await Review.find({
        productID: req.params.productID
    }).populate("user").exec();

    res.json(prodRev);
}));

module.exports = router;