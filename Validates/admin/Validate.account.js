module.exports.createPost=(req,res,next)=>{
    if(!req.body.fullname){
        req.flash("error",'Vui lòng nhập tên ')
        res.redirect("back")
        return;
    }
    if(!req.body.email){
        req.flash("error",'Vui lòng nhập email')
        res.redirect("back")
        return;
    }
    if(!req.body.phone){
        req.flash("error",'Vui lòng nhập số điện thoại ')
        res.redirect("back")
        return;
    }
    next();
}