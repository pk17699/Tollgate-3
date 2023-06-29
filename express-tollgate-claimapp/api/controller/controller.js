const claimModel = require('../model/model')
const getClaim = (id)=>{
    return new Promise(async(resolve, reject)=>{
        try {
            const claim = await claimModel.findById(id)
            console.log(claim)
            if(claim)
            {
                resolve({data:claim, message:"Claim found"})
            }
            else{
                reject({message:`claim with claimId ${id} was not found`})
            }
        } catch (error) {
            reject({message:'something wrong', error})
        }

    })
}
const addClaim = (claim)=>{
    return new Promise(async(resolve, reject)=>{
        try {
            const newClaim = new claimModel();
            newClaim.policyId = claim.policyId
            newClaim.hospitalId = claim.hospitalId
            newClaim.claim = claim.claim
            newClaim.policy = claim.policy
            newClaim.hospital= claim.hospital
            console.log(newClaim)
            newClaim.save()
            .then(()=>{
                resolve({message:'Claim added to database', data:newClaim})
            })
            .catch((error)=>{
                reject({message:'failed to save claim', error})
            })
        } catch (error) {
            reject({message:'something wrong', error})
        }
    })
}
const getByPolicyId = (id)=>{
    return new Promise(async(resolve, reject)=>{
        try {
            const claims = await claimModel.find({policyId:id})
            if(claims)
            {
                resolve({message:`claims with policyId ${id} found`, claims})
            }
            else{
                reject({message:'No matching claims found'})
            }
        } catch (error) {
            reject({message:'something wrong', error})
        }
    })
}
const getByHospitalAndDate = (hospital, date)=>{
    return new Promise(async(resolve, reject)=>{
        try {
            const claims = await claimModel.find({hospitalId:hospital, date:date})
            console.log(claims)
            if(claims.length >0)
            {
                resolve({message:`claims with hospital ${hospital} and date ${date} found`, claims})
            }
            else{
                reject({message:'No matching claims found'})
            }
        } catch (error) {
            reject({message:'something wrong', error})
        }
    })
}
const updateClaim = (id, claim)=>{
    return new Promise(async(resolve, reject)=>{
        try {
            const updatedClaim = await claimModel.findByIdAndUpdate(id, claim, {new:true}) 
            console.log(updatedClaim)
            if(updatedClaim)
            {
                resolve({message:`claim with id ${id} updated`, updatedClaim})
            }
            else{
                reject({message:'No matching claims found'})
            }
        } catch (error) {
            reject({message:'something wrong', error})
        }
    })
}
const deleteClaim = (id)=>{
    return new Promise(async(resolve, reject)=>{
        try {
            const updatedClaim = await claimModel.findByIdAndDelete(id)
            if(updatedClaim)
            {
                resolve({message:`claim with id ${id} deleted`, updatedClaim})
            }
            else{
                reject({message:'No matching claims found'})
            }
        } catch (error) {
            reject({message:'something wrong', error})
        }
    })
}
module.exports = {
    getClaim,
    addClaim,
    getByPolicyId,
    getByHospitalAndDate,
    updateClaim,
    deleteClaim
}