const Product_category =require("../../model/model.product.category")
const createTree=require('../../helper/createTree')

module.exports.product_category=async (req,res)=>{

    const find={
        deleted:"false"
    }
    const record= await Product_category.find()
    
    res.render("admin/pages/product-category/index",{
        titlePage:"Danh mục sản phẩm",
        record:record,
})
}
//Create category
module.exports.create=async(req,res)=>{
    const find={
        deleted:"false"
    }
    const record= await Product_category.find()
    const newRecord=createTree(record)
    res.render("admin/pages/product-category/create",{
        titlePage:"Tạo mới danh mục sản phẩm",
        newRecord:newRecord,
})
}
// end Create category
// Create category post
module.exports.createPost=async(req,res)=>{


    if(req.body.position==''){
       const count= await Product_category.countDocuments()
       req.body.position=count+1
    }else{
        req.body.position=parseInt(req.body.position)
    }
    try {
        const creatProductCategory=new Product_category(req.body)
        await creatProductCategory.save()
        req.flash('success', 'Cập nhật thành công');
    } catch (error) {
        req.flash('error', 'Cập nhật thất bại ');
    }

    res.redirect(`back`)

}

// Create category post
