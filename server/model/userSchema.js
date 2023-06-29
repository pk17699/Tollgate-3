const mongoose = require('mongoose');

const userSchema = new mongoose.Schema ({
    name: {
        type : String,
        required: true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    gender : {
        type : String,
        required : true
    },
    hospital : {
        type : String,
        required : true
    },
    dateofjoin : {
        type : String,
        required : true
    },
    insurance : {
        type : String,
        required : true
    },
});

const Data = mongoose.model('data', userSchema);
module.exports = Data;