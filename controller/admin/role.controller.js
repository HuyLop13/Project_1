const Role =require("../../model/model.role")
const systemConfig=require('../../config/system')

module.exports.role=async (req,res)=>{
    const find={
        deleted:"false"
    }
    const role= await Role.find(find)
    res.render("admin/pages/roles/index",{
        titlePage:"Nhóm quyền",
        role:role

})
}
// Create role
module.exports.create=async (req,res)=>{
    res.render("admin/pages/roles/create",{
        titlePage:"Thêm quyền",
})
}
// End Create role

// Create Post role
module.exports.createPost= async (req,res)=>{
  try{
    const createrole=new Role(req.body)
       await createrole.save()
        req.flash("success","Cập nhật thành công")
    } catch (error) {
        req.flash("error","Cập nhật thất bại ")
    }
    res.redirect(`${systemConfig.prefixAdmin}/role`)
}

// End Create Post role
// Detail role
module.exports.detail= async (req,res)=>{
    try{
        const find={
            deleted:false,
            _id:req.params.id
        }
        const role=await Role.findOne(find)
        res.render("admin/pages/roles/detail",{
            titlePage:role.title,
            role:role,   
        })
    }catch(error){
        res.redirect("back")
    }

}
// Detail role

// Edit role
module.exports.edit= async (req,res)=>{
    try{
        const find={
            deleted:false,
            _id:req.params.id
        }
        const role=await Role.findOne(find)
        res.render("admin/pages/roles/edit",{
            titlePage:"Chỉnh sửa nội dung",
            role:role,   
        })
    }catch(error){
        res.redirect("back")
    }

}
// end Edit role
// edit post role
module.exports.editPost= async (req,res)=>{
    const id=req.params.id
    try{
           await Role.updateOne({_id:id},req.body)
            req.flash("success","Cập nhật thành công")
        } catch (error) {
            req.flash("error","Cập nhật thất bại ")
        }
        res.redirect(`${systemConfig.prefixAdmin}/role`)
}
// end edit post role

// Delete role
module.exports.delete= async (req,res)=>{
    const id=req.params.id
    try{
           await Role.updateOne({_id:id},{deleted:true})
            req.flash("success","Cập nhật thành công")
        } catch (error) {
            req.flash("error","Cập nhật thất bại ")
        }
        res.redirect(`${systemConfig.prefixAdmin}/role`)

}
// Delete role

// Permission
module.exports.permission= async (req,res)=>{
    try{
        const find={
            deleted:false,
        }
        const permission=await Role.find(find)
        res.render("admin/pages/roles/permission",{
            titlePage:"Phân quyền",
            permission:permission,   
        })
    }catch(error){
        res.redirect("back")
    }

}
// End permission

// Permission Patch
module.exports.permissionPatch= async (req,res)=>{
    const permission= JSON.parse(req.body.permission)
    for(const item of permission){
        console.log(item)
        await Role.updateOne({_id:item.id},{permissions:item.permission})
    }
    res.redirect("back")
    req.flash("success","Cap nhat thanh cong")
   

}
// End permission Patch