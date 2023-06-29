const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require("dotenv")

const app = express();

dotenv.config({path:'./config.env'});
const PORT = process.env.PORT||3000;
const MONGO_URL = process.env.MONGO||"mongodb://localhost:27017/Claims"

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api',require('./api/routes/routes'))
mongoose.connect(MONGO_URL)
.then(()=>{
    console.log('Connected to mongoDB')
})
.catch(()=>{
    console.log('Database connection error')
})

app.listen(PORT, ()=>{
    console.log(`listening at port ${PORT}`);
})