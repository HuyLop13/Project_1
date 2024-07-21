const express = require('express');
const router=express.Router();
const controller=require("../../controller/admin/auth.controller")

router.get('/login',controller.login)
// Post login
router.post('/login',controller.loginPost)
// Post login
// LOgout
router.get('/logout',controller.logout)
// LOgout
module.exports=router