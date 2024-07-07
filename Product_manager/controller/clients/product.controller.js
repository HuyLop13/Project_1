const Product =require("../../model/model")

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
    const product=await Product.findOne(find);
    res.render("clients/pages/products/detail",{
        titlePage:req.params.slug,
        product:product
    })
}