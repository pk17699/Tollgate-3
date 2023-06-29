
const express = require('express');
const router = express.Router();
const {
    postPolicy, 
    postClaim, 
    getAllClaims 
    } = require('../Controllers/policy');

router.post('/',postPolicy);
router.post('/:id',postClaim);
router.get('/:id',getAllClaims);

module.exports=router;