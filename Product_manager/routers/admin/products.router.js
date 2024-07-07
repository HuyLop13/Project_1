const express = require('express');
const router=express.Router();
const controller=require("../../controller/admin/product.controller")
const valid=require('../../Validates/admin/Validate.product')

const multer  = require('multer')

const storage=require('../../helper/uploadMulter')
const upload = multer({ storage: storage() })
const app = express()

router.get('/',controller.product)

//Change Status
router.patch('/change-status/:status/:id',controller.changeStatus)
//end Change Status

//Change Multi Status
router.patch('/change-multi-status',controller.changeMultiStatus)
//end Change Multi Status

// Delete item
router.delete('/delete/:id',controller.deleteItem)
// End Delete item

// Create
router.get('/create',controller.create)

// Create
// Create Post
router.post('/create', 
    upload.single('thumbnail'),
    valid.createPost,
    controller.createPost)

// Create Post

// Edit item
router.get('/edit/:id',controller.edit)
// End Edit item

// Update Edit item 
router.patch('/edit/:id',
    upload.single('thumbnail'),
    valid.createPost,
    controller.editPatch)
// End Update Edit item
// Detail item
router.get('/detail/:id',controller.detail)
// end Detail item
module.exports=router
