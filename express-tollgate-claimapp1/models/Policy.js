const mongoose = require('mongoose');

const PolicySchema = new mongoose.Schema({
    name: String,
    date: {
        type: Date,
        default: Date.now(),
    },
    claims: [
        {
            name:{
                type:String,
            } ,
            hospital:{
                type:String,
            } ,
            address:{
                type:String,
            },
            phone:{
                type:Number
            } ,
            date: {
                type: Date,
                default: Date.now(),
            },
        },
    ],
});
module.exports = mongoose.model('Policy',PolicySchema);