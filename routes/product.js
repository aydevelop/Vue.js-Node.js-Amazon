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
    product.price = req.body.price;
    
    res.json(await product.save());
}));

router.get('/', t(async (req, res) => {
    let products = await Product.find();
    res.json(products);
}));

router.get('/:id', t(async (req, res) => {
    let product = await Product.findOne({ _id: req.params.id });
    res.json(product);
}));

router.put('/:id', upload.single('photo'), t(async (req, res) => {
    let product = await Product.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { 
            title: req.body.title,
            description: req.body.description,
            photo: req.file.filename,
            stockQuantity: req.body.stockQuantity,
            price: req.body.price,            
            category: req.body.categoryID,
            owner: req.body.ownerID
        } }, { upsert: true }
    );
    
    res.json(product);
}));

router.delete('/:id', t(async (req, res) => {
    let product = await Product.findOneAndDelete(
        { _id: req.params.id }
    );
    
    res.json(product);
}));

module.exports = router;