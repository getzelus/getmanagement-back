const express = require('express');
const router = express.Router();

const Thing = require('../models/Testing');

router.get('/', async (req, res) => {
    let things = await Thing.find({});
    res.json(things);
});

router.get('/create', async (req, res) => {
  let timeNow = Date.now();
  let thing = new Thing({title: 'testing ' + timeNow});
  await thing.save();
  res.json(thing);
});

module.exports = router;
