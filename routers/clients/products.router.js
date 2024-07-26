const express = require('express');
const router=express.Router();
const controller=require("../../controller/clients/product.controller")
router.get('/',controller.product)

// Detail item
router.get('/detail/:slug',controller.detail)
//End Detail item
//product Categry
router.get('/:slugCategory',controller.productCategory)

module.exports=router