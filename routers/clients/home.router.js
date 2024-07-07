const express = require('express');
const router=express.Router();
const controller=require("../../controller/clients/home.controller")
router.get('/',controller.home)

module.exports=router