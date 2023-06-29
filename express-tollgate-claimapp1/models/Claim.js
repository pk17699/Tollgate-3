const mongoose = require('mongoose');
const claimSchema = new mongoose.Schema({
    name: {
        type: String,
      },
    address :{
        type: String,
    },
    policy : {
      type: String,
    },
    hospital :{
      type:String,
    },
    status:{
      type:String,
      
    },
    phone :{
      type:Number,
    },
    age : {
      type:Number,
    },
    date:{
        type: Date,
        default:Date.now(),
      },
})

module.exports = mongoose.model('Claim', claimSchema);