const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        //model: {type: String},
        title: {type: String},
        type: {type: String},
        order: {type: Number}
        //choices: {type: []},
        //relations: {type: []}

    },
      {strict: false, timestamps: true}
);

schema.set('toJSON', {
  virtuals: true
});
module.exports = schema;
