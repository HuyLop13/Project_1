const Permission =require("../../model/model.permission")
const systemConfig=require('../../config/system')

module.exports.permission=async (req,res)=>{
    const find={
        deleted:"false"
    }
    const permission= await Permission.find(find)
    res.render("admin/pages/permission/index",{
        titlePage:"Phân quyền",
        permission:permission

})
}
// Create permission
module.exports.create=async (req,res)=>{
    res.render("admin/pages/permission/create",{
        titlePage:"Thêm quyền",
})
}
// End Create permission

// Create Post Permission
module.exports.createPost= async (req,res)=>{
  try{
    const createPermission=new Permission(req.body)
       await createPermission.save()
        req.flash("success","Cập nhật thành công")
    } catch (error) {
        req.flash("error","Cập nhật thất bại ")
    }
    res.redirect(`${systemConfig.prefixAdmin}/permission`)
}

// End Create Post Permission
// Detail permission
module.exports.detail= async (req,res)=>{
    try{
        const find={
            deleted:false,
            _id:req.params.id
        }
        const permission=await Permission.findOne(find)
        res.render("admin/pages/permission/detail",{
            titlePage:permission.title,
            permission:permission,   
        })
    }catch(error){
        res.redirect("back")
    }

}
// Detail permission

// Edit Permission
module.exports.edit= async (req,res)=>{
    try{
        const find={
            deleted:false,
            _id:req.params.id
        }
        const permission=await Permission.findOne(find)
        res.render("admin/pages/permission/edit",{
            titlePage:"Chỉnh sửa nội dung",
            permission:permission,   
        })
    }catch(error){
        res.redirect("back")
    }

}
// end Edit Permission
// edit post permission
module.exports.editPost= async (req,res)=>{
    const id=req.params.id
    try{
           await Permission.updateOne({_id:id},req.body)
            req.flash("success","Cập nhật thành công")
        } catch (error) {
            req.flash("error","Cập nhật thất bại ")
        }
        res.redirect(`${systemConfig.prefixAdmin}/permission`)
}
// end edit post permission

// Delete Permission
module.exports.delete= async (req,res)=>{
    const id=req.params.id
    try{
           await Permission.updateOne({_id:id},{deleted:true})
            req.flash("success","Cập nhật thành công")
        } catch (error) {
            req.flash("error","Cập nhật thất bại ")
        }
        res.redirect(`${systemConfig.prefixAdmin}/permission`)

}
// Delete Permission