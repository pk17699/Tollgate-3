const Policy = require('../models/Policy');

const postPolicy = async (req,res)=>{
    const postpolicy = await Policy.create(req.body)
    res.status(200).json({postpolicy});

};
const postClaim = async (req, res) => {
    const { id } = req.params;
    const policy = await Policy.findById(id);
    policy.claims.push(req.body);
    policy.save();
    res.status(200).json({ policy });
  };
const getAllClaims = async (req,res)=>{
    const { id } = req.params;
  const policy = await Policy.findById(id);
  const claims = policy?.claims ?? [];
  res.status(200).json({ claims });
}

module.exports={
    postPolicy,
    postClaim,
    getAllClaims,
}