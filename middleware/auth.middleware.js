const systemConfig=require("../config/system")
const Account=require('../model/account.model')
const Role =require('../model/model.role')

module.exports.requiredAuth=async(req,res,next)=>{
    const cookieToken=req.cookies.token
    if(!cookieToken){
        res.redirect(`${systemConfig.prefixAdmin}/auth/login`)
    }else{
        const find={
            token:cookieToken
        }
        const user= await Account.findOne(find)
        const role= await Role.findOne({_id:user.role_id})
        if(!user){
            res.redirect(`${systemConfig.prefixAdmin}/auth/login`)
        }else{
            res.locals.user=user
            res.locals.role=role
            next()
        }
    }
}