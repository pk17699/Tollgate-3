const express = require("express");
const router = express.Router();

// importing Data from userSchema
const Data = require("../model/userSchema");

// we require the mongodb connection
require('../database/connection');

// require the controller
const controller = require('../controller/controller');

// Api

router.post('/api/claims', controller.create);
router.get('/api/claims', controller.find);
router.put('/api/claims/:id', controller.update);
router.delete('/api/claims/:id',controller.delete);




module.exports = router;





// router.post("/claims", async (req, res) => {
//   const { name, email, gender, hospital, date_of_join, insurance } = req.body;
//   if (!name || !email || !gender || !hospital || !date_of_join || !insurance) {
//     return res.status(422).json({ error: "please fill all the fields properly" });
//   }

//   try {
//     const dataExist = await Data.findOne({ email: email });
//     if (dataExist) {
//       return res.status(422).json({ error: "email already exist" });
//     }
//     const data = new Data({
//       name,
//       email,
//       gender,
//       hospital,
//       date_of_join,
//       insurance,
//     });
//     await data.save();

//     res.status(201).json({ message: "data stored succesfully" });
//   } catch (error) {
//     console.log(error);
//   }
// });