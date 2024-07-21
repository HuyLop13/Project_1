const Account=require('../../model/account.model')
const Role =require("../../model/model.role")
const systemConfig=require('../../config/system')
//mã hóa mật khẩu
const md5 = require('md5')
//mã hóa mật khẩu

module.exports.account=async(req,res)=>{
    const account=await Account.find({deleted:false})
    res.render("admin/pages/account/index",{
        titlePage:"Danh sách tài khoản",
        account:account,
    })
}

// Create Account
module.exports.create= async(req,res)=>{
    const role=await Role.find({deleted:false})
    res.render("admin/pages/account/create",{
        titlePage:"Tạo tài khoản",
        role:role,
    })
}
// Create Account

// Create Account
module.exports.createPost=async (req,res)=>{
    req.body.password=md5(req.body.password)
    const findEmail= {
        email:req.body.email,
        deleted:false,
    }
    const exist=await Account.findOne(findEmail)

    if(exist){
        req.flash("error","Email đã tồn tại ")
        res.redirect("back")
    }else{
    try {
        const account=new Account(req.body)
        await account.save()
        req.flash("success","Cập nhật thành công ")
        
    } catch (error) {
        req.flash("error","Cập nhật thất bại ")
    }}
    res.redirect("back")
}
// Create Account

// Edit Account
module.exports.edit= async(req,res)=>{
    
    const find ={
        deleted:false,
        _id:req.params.id,
    }
    const role=await Role.find({deleted:false})
    const account=await Account.findOne(find)
    res.render("admin/pages/account/edit",{
        titlePage:"Sửa tài khoản",
        account:account,
        role:role
    })
}
// Edit Account

// Edit patch
module.exports.editPatch = async (req,res)=>{
    req.body.password=md5(req.body.password)
   
    try {
        await Account.updateOne({_id:req.params.id},req.body)
        req.flash("success","Cập nhật thành công")
    } catch (error) {
        req.flash("error","Cập nhật thất bại")
    }
    res.redirect(`${systemConfig.prefixAdmin}/account`)
}
// Edit patch

// Detail Account
module.exports.detail = async (req,res)=>{
    const find ={
        deleted:false,
        _id:req.params.id,
    }
    
    const account=await Account.findOne(find)
    const role=await Role.findOne({
        deleted:false,
        _id:account.role_id,
    })
    res.render("admin/pages/account/detail",{
        titlePage:"Sửa tài khoản",
        account:account,
        role:role,
    })
    console.log(role)
}
// Detail Account

// Delete Account
module.exports.delete= async (req,res)=>{
    await Account.updateOne({_id:req.params.id},{deleted:true})
    res.redirect(`${systemConfig.prefixAdmin}/account`)
    req.flash("success","Cập nhật thành công")
}
// Delete Account
