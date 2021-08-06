const express = require('express');
const router = express.Router();

const Thing = require('../models/Field');


router.get('/', async (req, res) => {
    let things = await Thing.find({});
    res.json(things);
});

router.get('/readone/:id', async (req, res) => {
    let thing = await Thing.findById(req.params.id);
    res.json(thing);
});

router.post('/', async (req, res) => {
    let thing = new Thing(req.body);
    await thing.save();
    res.json(thing);
});

router.patch('/', async (req, res) => {
    let thing = await Thing.findByIdAndUpdate(req.body._id, req.body, {new: true});
    res.json(thing);
});

// req.body.id  or _id
router.delete('/', async (req, res) => {
    let thing = await Thing.findByIdAndDelete(req.body.id);
    res.json(thing);
});

module.exports = router;
