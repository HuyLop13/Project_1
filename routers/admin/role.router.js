const express = require('express');
const router=express.Router();
const controller=require("../../controller/admin/role.controller")
const valid=require('../../Validates/admin/Validate.product')

router.get('/',controller.role)

// Permission
router.get('/permission',controller.permission)
// End Permission
// Permission Patch
router.patch('/permission',controller.permissionPatch)
// End Permission Patch

// Create
router.get('/create',controller.create)
// End Create

// Post create
router.post('/create',
    valid.createPost,
    controller.createPost)
// end Post create

// Detail role
router.get("/detail/:id",controller.detail)
//End Detail role

// Edit role
router.get("/edit/:id",controller.edit)
// Edit role
// Edit Post role
router.patch("/edit/:id",controller.editPost)
// Edit post role
// Delete item
router.delete('/delete/:id',controller.delete)
// End Delete item
module.exports=router

