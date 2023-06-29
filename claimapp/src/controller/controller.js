const Claim = require('../model/claim.model');

module.exports.getClaims = async (request, response) => {
    
    try {
        let claim = await Claim.find();
        response.status(200).send({ success: true, claim});
    } catch (error) {
        console.log(error);
        response.status(400).send({ success: false, message: error.message });
    }
}
module.exports.addClaim = async(request, response) => {
    try {
        const {name, doj, dod } = request.body;
        let claim = new Claim({ name, doj, dod });
        let result = await claim.save();
        response.send({ success: true, claim });
    }
    catch(error) {
        console.log(error)
    }
}

module.exports.updateClaim = async(request , response) => {
    try{ 
        let claim = await Claim.findOne({_id: request.params.id})
        if(!claim)
           response.send({ success: false, message:'Claimrecord does not exist'})
        let {name,doj,dod} = request.body
        let updatedclaim = {name, doj, dod }
        let result = await Claim.updateOne({_id: request.params.id}, updatedclaim);

        response.send({ success: true, claim: {id: request.params.id, }});
   } catch(error) {
    response.status(400).send({success: false, message: error.message});
   }
}
module.exports.deleteClaim = async(request , response) => {
    try{ 
        let result = await Claim.findOneAndRemove({_id: request.params.id});

        response.status(200).json({ success: true, claim: {id: request.params.id, }});
   } catch(error) {
    response.status(400).send({success: false, message: error.message});
   }
}
module.exports.getClaim = async(request , response) => {
    try{ 
        let claim = await Claim.findOne({_id: request.params.id})

        response.send({ success: true, claim})
    } catch(error) {response.status(400).send({success: false, message: error.message});  }
}