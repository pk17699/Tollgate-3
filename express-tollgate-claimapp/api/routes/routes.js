const router = require("express").Router();
const claimController = require("../controller/controller");

router.get("/claims/:id", (req, res) => {
  try {
    claimController
      .getClaim(req.params.id)
      .then((response) => {
        res.send(response);
      })
      .catch((error) => {
        res.send(error);
      });
  } catch (error) {
    res.status(500).send({ message: "error retrieving data with id" + id });
  }
});

router.post("/claims", (req, res) => {
  try {
    claimController
      .addClaim(req.body)
      .then((response) => {
        res.send(response);
      })
      .catch((error) => {
        res.send(error);
      });
  } catch (error) {
    res.status(500).send({ message: "some error occured while adding the data" });
  }
});

router.get("/claims/policy/:id", (req, res) => {
  try {
    claimController
      .getByPolicyId(req.params.id)
      .then((response) => {
        res.send(response);
      })
      .catch((error) => {
        res.send(error);
      });
  } catch (error) {
    res.status(500).send({ message: "error retrieving data with policy id" + req.params.id });
  }
});

router.get('/claims',(req,res)=>{
    try {
        const hospital = req.query.hospital
        const date = req.query.date
        claimController.getByHospitalAndDate(hospital, date)
        .then((response) => {
            res.send(response);
          })
          .catch((error) => {
            res.send(error);
          });
        
    } catch (error) {
      res.status(500).send({ message: "error retrieving data"});
    }
    
})

router.put('/claims/:id', (req, res)=>{
    try {
        claimController.updateClaim(req.params.id, req.body)
        .then((response) => {
            res.send(response);
          })
          .catch((error) => {
            res.send(error);
          });
        
    } catch (error) {
      res.status(500).send({ message: "error while updating data with id" + id });
        
    }
})

router.delete('/claims/:id', (req, res)=>{
    try {
        claimController.deleteClaim(req.params.id)
        .then((response) => {
            res.send(response);
          })
          .catch((error) => {
            res.send(error);
          });
        
    } catch (error) {
      res.status(500).send({ message: "error deleting data with id" + id });
        
    }
})

module.exports = router;
