const Account=require('../../model/account.model')
const Role =require("../../model/model.role")
const systemConfig=require('../../config/system')
//mã hóa mật khẩu
const md5 = require('md5')
//mã hóa mật khẩu

module.exports.login=(req,res)=>{
    if(req.cookies.token){
        res.redirect(`${systemConfig.prefixAdmin}/dashboard`)
        
    }else{
        res.render('admin/pages/auth/login',{
            titlePage:"Đăng nhập"
    })
    }

}

// Post login
module.exports.loginPost= async(req,res)=>{
    const password=md5(req.body.password)
    const find ={
        email:req.body.email,
        deleted:false,
    }
    const user=await Account.findOne(find)
    if(!user){
        req.flash("error","Email không tồn tại ")
        res.redirect("back")
    }else{
        if(password==user.password){
            res.cookie('token',user.token)
            res.redirect(`${systemConfig.prefixAdmin}/dashboard`)
        }
        else if(user.status=="inactice"){
            req.flash("error","Tài khoản đã bị khóa")
            res.redirect("back")
        }
        else{
            req.flash("error","Mật khẩu không chính xác")
            res.redirect("back")
        }
        
    }

}
//  end Post login
// Log out
module.exports.logout=(req,res)=>{
    res.clearCookie('token')
    res.redirect(`${systemConfig.prefixAdmin}/auth/login`)
}
// Log out