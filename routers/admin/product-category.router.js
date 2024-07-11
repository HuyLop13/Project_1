const express = require('express');
const router=express.Router();
const controller=require("../../controller/admin/product-category.controller")
const valid=require('../../Validates/admin/Validate.product')
const uploadClound=require('../../middleware/upload.middleware')
const multer  = require('multer')
const upload = multer()
const app = express()

router.get('/',controller.product_category)

// create
router.get('/create',controller.create)
// end create

// Create category post
router.post('/create',
    upload.single('thumbnail'),
    uploadClound.upLoad,
    valid.createPost,
    controller.createPost)
// Create category post
module.exports=router

