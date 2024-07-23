const Product_category=require('../model/model.product.category')
const createTree=require('../helper/createTree')
module.exports.tree=async(req, res,next)=> {
    const find={
        deleted:"false"
    }
    const record= await Product_category.find(find)
    const newRecord=createTree(record)
    res.locals.newRecord=newRecord
    next()
};
