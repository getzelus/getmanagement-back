const express = require('express');
const router = express.Router();

const Thing = require('../models/Model');

const mongoose = require('mongoose');
const schemaThing = require('../models/Thing');


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
    let thing = await Thing.findByIdAndUpdate(req.body.id, req.body, {new: true});
    res.json(thing);
});

// req.body.id  or _id
router.delete('/', async (req, res) => {

    try {
      let thing = await Thing.findByIdAndDelete(req.body.id);
      const ThingReal = mongoose.model(req.body.title, schemaThing);
      await ThingReal.deleteMany();
      //console.log('All Data successfully deleted');
      res.json(thing);
    } catch (err) {
      console.log(err);
      res.json({error : 'failed to delete collection'});
    }

});

module.exports = router;
