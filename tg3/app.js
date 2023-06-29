const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express();
const PORT = 3000;
const MONGO_URL = 'mongodb://localhost:27017'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api',require('./api/routes'))
mongoose.connect(MONGO_URL)
.then(()=>{
    console.log('Connected to database')
})
.catch(()=>{
    console.log('Database connection error')
})

app.listen(PORT, ()=>{
    console.log('listening at port', PORT);
})