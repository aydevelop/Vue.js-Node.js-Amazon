const router = require("express").Router();
const t = require("../init/try-catch");
const Category = require("../models/category");

router.post('/', t(async (req, res) => {
    const category = new Category();
    category.title = req.body.title;
    await category.save();

    res.json({ 
        success: true,
        message: "Category created"
    });
}));

router.get('/', t(async (req, res) => {
    let categories = await Category.find();
    res.json(categories);
}));

module.exports = router;
