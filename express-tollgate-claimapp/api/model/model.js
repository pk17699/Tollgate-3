const mongoose = require("mongoose");

const schema = mongoose.Schema({
  policyId: {
    type: String,
    required: true,
  },
  hospitalId: {
    type: String,
    required: true,
  },
  claim: {
    type: String,
  },
  policy: {
    type: String,
  },
  hospital: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("claim", schema);
