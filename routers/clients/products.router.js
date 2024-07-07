const express = require('express');
const router=express.Router();
const controller=require("../../controller/clients/product.controller")
router.get('/',controller.product)

// Detail item
router.get('/:slug',controller.detail)
//End Detail item
module.exports=router