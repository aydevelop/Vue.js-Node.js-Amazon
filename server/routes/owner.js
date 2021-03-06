const router = require("express").Router();
const t = require("../init/try-catch");
const Owner = require("../models/owner");
const upload = require("../init/upload-photo");

router.post('/', upload.single('photo'), t(async (req, res) => {
    const owner = new Owner();
    owner.name = req.body.name;
    owner.about = req.body.about;
    owner.photo = req.file.filename;
    res.json(await owner.save());
}));

router.get('/', t(async (req, res) => {
    let owners = await Owner.find();
    res.json(owners);
}));

module.exports = router;