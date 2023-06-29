const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require('body-parser');
const router = express.Router();
const app = express();

// config.env 
dotenv.config({path:'./config.env'});

// connection from connection.js
require('./database/connection');

// body-parser
router.use(bodyparser.json());
app.use(express.urlencoded({extende:true}));

// convert the data in to json
 app.use(express.json());

// port in config.env
const PORT = process.env.PORT;

// userSchema
const Data = require('./model/userSchema');

// routing
app.use(require('./routes/router'));



// listening port
app.listen(PORT, () => {
  console.log(`server is running at port no ${PORT}`);
});
