const ProductCategory=require('../model/model.product.category')


const getSubCategory=async (parent_id)=>{
    const children=await ProductCategory.find({
        deleted:false,
        status:"active",
        parent_id:parent_id
    })
    let childrens=[...children]
    for (const item of children){
         const child=await getSubCategory(item.id)
         childrens=childrens.concat(child)
    }
    return childrens
}
module.exports=getSubCategory