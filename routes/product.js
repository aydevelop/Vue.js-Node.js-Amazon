const router = require("express").Router();
const t = require("../init/try-catch");
const Product = require("../models/product");
const upload = require("../init/upload-photo");

router.post('/', upload.single('photo'), t(async (req, res) => {
    let product = new Product();
    product.title = req.body.title;
    product.description = req.body.description;
    product.photo = req.file.filename;
    product.stockQuantity = req.body.stockQuantity;
    await product.save();
    
    res.json({
        success: true,
        message: "Product saved"
    });
}));

module.exports = router;