const Data = require("../model/userSchema");

// create and save data
exports.create = (req, res) => {
  //  first we validate the request
  if (!req.body) {
    res.status(400).send({ message: " Please Fill All The Required Data " });
    return;
  }
  // if it is a new data
  const data = new Data({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    hospital: req.body.hospital,
    dateofjoin : req.body.dateofjoin,
    insurance: req.body.insurance
    
  });
  //  now we have to save this data in the data base
  data
    .save(data)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "some error occured while creating the data",
      });
    });
};

// get all the data or get data by a specific id
exports.find = (req, res)=>{

  if(req.query.id){
      const id = req.query.id;

      Data.findById(id)
          .then(data =>{
              if(!data){
                  res.status(404).send({ message : "Not found user with id "+ id})
              }else{
                  res.send(data)
              }
          })
          .catch(err =>{
              res.status(500).send({ message: "Erro retrieving user with id " + id})
          })

  }else{
      Data.find()
          .then(user => {
              res.send(user)
          })
          .catch(err => {
              res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
          })
  }

  
};


// update data
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "please enter the data which has to be updated!" });
  }

  const id = req.params.id;
  Data.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({message: ` cannot update the data with ${id}. maybe data not found`,});
      } else {
        res.send(data);
      }
    })
    .catch((error) => {
      res.status(500).send({ message: error.message || "error while updating data" });
     });
    
}

//  delete the data by specified id
exports.delete = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "please enter the data which has to be deleted!" });
  }
    const id = req.params.id;
    Data.findByIdAndDelete(id, req.body)
    .then(data=>{
        if(!data){
            res.status(404).send({message: `cannot delete the data with ${id}. maybe id not found`})
        }else {
            res.send({message:"data has been deleted succesfully"})
        }
    }).catch(err =>{
        res.status(500).send({message: err.message });
    });
}
