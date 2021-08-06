const mongoose = require('mongoose');

// define it in React ?
// And store it in Model

const schema = new mongoose.Schema(
    {

        title: {type: String}


    },
    {
        timestamps: true
    }
);

schema.set('toJSON', {
  virtuals: true
});
module.exports = mongoose.model('Testing', schema);
