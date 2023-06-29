const express = require ('express');
const Claimcontroller = require('../controller/controller');
const Claim = require('../model/claim.model');
const router = express.Router();

router.get('/',Claimcontroller.getClaims);
router.post('/add', Claimcontroller.addClaim);
router.put('/update/:id',Claimcontroller.updateClaim);
router.delete('/delete/:id',Claimcontroller.deleteClaim);
router.get('/:id',Claimcontroller.getClaim);
module.exports = router;