const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//const schema = new mongoose.Schema({} ,{ strict: false });
// can enter whatever we want inside the schema

// inputs de base dans schema comme  order, top, color, title, model

const schema = require('../models/Thing');

//const schema = new mongoose.Schema({} ,{ strict: false });



router.get('/read/:type', async (req, res) => {
    const Thing = mongoose.model(req.params.type, schema);
    let things = await Thing.find({});
    res.json(things);
});

router.get('/readone/:id', async (req, res) => {
    let thing = await Thing.findById(req.params.id);
    res.json(thing);
});

router.post('/', async (req, res) => {
    const Thing = mongoose.model(req.body.type, schema);
    let thing = new Thing(req.body);

    /*
    let obj = thing.toJSON();
    obj.bim = 'bim';
    let thingUpdated = new Thing(obj);
    */
    await thing.save();
    res.json(thing);
});

router.patch('/', async (req, res) => {
    const Thing = mongoose.model(req.body.type, schema);
    let thing = await Thing.findByIdAndUpdate(req.body.id, req.body, {new: true});
    res.json(thing);
});

// req.body.id  or _id
router.delete('/', async (req, res) => {
    const Thing = mongoose.model(req.body.type, schema);
    let thing = await Thing.findByIdAndDelete(req.body.id);
    res.json(thing);
});

module.exports = router;
