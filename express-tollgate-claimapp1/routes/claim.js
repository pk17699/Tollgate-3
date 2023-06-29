const router = require('express').Router();
const bodyparser = require('body-parser');
const {
    postClaim,
    getClaimById,
    updateClaim,
    deleteClaim
}  = require('../controllers/claim');

router.use(bodyparser.json());
router.use(bodyparser.urlencoded({extende:true}));

router.post('/claims', postClaim);
router.get('/claims/:id',getClaimById);
router.put('/claims',updateClaim);
router.delete('/claims/:id', deleteClaim);

module.exports = router;