const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        title:{type: String},
        fields: {type: []},
        top: {type: []}

    },
    {
        timestamps: true
    }
);

schema.set('toJSON', {
  virtuals: true
});
module.exports = mongoose.model('Model', schema);
