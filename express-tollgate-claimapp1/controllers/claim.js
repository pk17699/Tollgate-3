const User = require('../models/Claim')

const postClaim = async (req, res) => {
    const user = await User.create(req.body);
    res.status(200).json({ user });
  };
const getClaimById = async (req,res)=>{
    const userClaim = await User.findById(req.params.id);
  res.status(200).json({ userClaim });
}
const updateClaim = async (req,res)=>{
    const claim = await User.findOneAndUpdate(req.body);
    res.status(200).json({ claim })
}
const deleteClaim = async (req,res)=>{
    const delClaim = await User.findOneAndDelete(req.params.id);
    res.send("claim is deleted");
}
module.exports= { 
    postClaim,
    getClaimById,
    updateClaim,
    deleteClaim,
}