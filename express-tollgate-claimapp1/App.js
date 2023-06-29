const express = require('express');
const app = express();
const mongoose=require('mongoose');

const connect = async() => {
    try {
        await mongoose.connect("mongodb://localhost:27017/MCI");
        console.log("Connected to mongoDB.");
    } catch (error) {
        throw error;
    }
};
mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
});

app.use(express.json());
app.use('/api', require('./routes/claim'));
app.use('/api/claims/policy', require('./routes/policy'));

app.listen(1234,(err)=>{
    connect()
    console.log("Server started ")
})
