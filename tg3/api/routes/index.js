const router = require("express").Router();
const claimController = require("../controller");
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
    res.send({ message: "Internal server error" });
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
    res.send({ message: "Internal server error" });
  }
});

router.get("/claims/policy/:id", (req, res) => {
  try {
    claimController
      .getByPolicy(req.params.id)
      .then((response) => {
        res.send(response);
      })
      .catch((error) => {
        res.send(error);
      });
  } catch (error) {
    res.send({ message: "Internal server error" });
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
        res.send({ message: "Internal server error" });
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
        res.send({ message: "Internal server error" });
        
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
        res.send({ message: "Internal server error" });
        
    }
})
module.exports = router;
