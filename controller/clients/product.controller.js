const { get } = require("mongoose");
const Product =require("../../model/model")
const ProductCategory=require('../../model/model.product.category')
const subCategory=require('../../helper/subCategory')

module.exports.product=async (req, res)=>{
    const products=await Product.find({status:"active",deleted:false});
    // console.log(products)

    const newProducts=products.map((item)=>{
        item.currentPrice= Math.ceil(((100-item.discountPercentage)/100)*item.price)
        return item
    })
    res.render("clients/pages/products/index",{
        titlePage:"Trang san pham",
        products:newProducts
    })
};
module.exports.detail=async (req, res)=>{
    const find={
        deleted:false,
        status:"active",
        slug:req.params.slug
    }

    const products=await Product.findOne(find);
    // const newProducts=products.map((item)=>{
    //     item.currentPrice= Math.ceil(((100-item.discountPercentage)/100)*item.price)
    //     return item
    // })
    
    res.render("clients/pages/products/detail",{
        titlePage:req.params.slug,
        product:products
    })
}
module.exports.productCategory=async(req,res)=>{
    const find={
        deleted:false,
        slug:req.params.slugCategory,
    }
    const productCategory=await ProductCategory.findOne(find)
    const listSub=await subCategory(productCategory.id)
    console.log(listSub)
    const listSubId=listSub.map((item)=>{return item.id})
    const products=await Product.find({
        parent_id:{$in:[productCategory.id,...listSubId]},
        deleted:false,
        status:"active"
    })
    
    const newProducts=products.map((item)=>{
        item.currentPrice= Math.ceil(((100-item.discountPercentage)/100)*item.price)
        return item
    })
    res.render("clients/pages/products/index",{
        titlePage:productCategory.title,
        products:newProducts
    })
}