const mongoose = require('mongoose');

// define it in React ?
// And store it in Model

const schema = new mongoose.Schema(
    {
        model: {type: String},
        title: {type: String},  // label
        //value: {type: String},
        type: {type: String},
        order: {type: Number},
        choices: {type: []},
        relations: {type: []}

    },
    {
        timestamps: true
    }
);

schema.set('toJSON', {
  virtuals: true
});
module.exports = mongoose.model('Field', schema);
