const express = require('express');
const router=express.Router();
const controller=require("../../controller/admin/permission.controller")
const valid=require('../../Validates/admin/Validate.product')
const uploadClound=require('../../middleware/upload.middleware')
const multer  = require('multer')
const upload = multer()


router.get('/',controller.permission)

// Create
router.get('/create',controller.create)
// End Create

// Post create
router.post('/create',
    valid.createPost,
    controller.createPost)
// end Post create

// Detail permission
router.get("/detail/:id",controller.detail)
//End Detail permission

// Edit permission
router.get("/edit/:id",controller.edit)
// Edit permission
// Edit Post permission
router.patch("/edit/:id",controller.editPost)
// Edit post permission
// Delete item
router.delete('/delete/:id',controller.delete)
// End Delete item
module.exports=router

