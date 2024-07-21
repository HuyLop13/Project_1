const express = require('express');
const router=express.Router();
const controller=require("../../controller/admin/account.controller")
const valid=require('../../Validates/admin/Validate.account')

const uploadClound=require('../../middleware/upload.middleware')
const multer  = require('multer')
const upload = multer()
const app = express()

router.get('/',controller.account)

// Create account
router.get('/create',controller.create)
// Create account
// Post create account
router.post('/create',
    upload.single('avatar'),
    uploadClound.upLoad,
    valid.createPost,
    controller.createPost)
// Post create account
// Edit account
router.get('/edit/:id',controller.edit)
// Edit account
// Edit Patch
router.patch('/edit/:id',controller.editPatch)
// Edit Patch

// Detail Account
router.get('/detail/:id',controller.detail)
// Detail Account
// Delete Account
router.delete('/delete/:id',controller.delete)

// Delete Account

module.exports=router