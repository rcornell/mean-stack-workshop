const mongoose = require('mongoose');

var LinkSchema = new mongoose.Schema({
  // define fields (types / required? / unique?)
  url: {type: String, required: true},
  image: {type: String }

});

module.exports = mongoose.model('Link', LinkSchema);
