const express = require('express');
const router=express.Router();
const controller=require("../../controller/admin/my_account.controller")
const valid=require('../../Validates/admin/Validate.product')

const uploadClound=require('../../middleware/upload.middleware')
const multer  = require('multer')
const upload = multer()
const app = express()
// edit myAccount
router.get("/",
    // upload.single('thumbnail'),
    // uploadClound.upLoad,
    controller.myAccount
)
// edit myAccount

module.exports=router
