const Product =require("../../model/model")
const filterStatusHelper=require("../../helper/filterStatus")
const searchHelper=require("../../helper/search")
const paginationHelper=require("../../helper/pagination")
const systemConfig=require("../../config/system")
const Account=require('../../model/account.model')

module.exports.product=async (req, res)=>{
    const filterStatus=filterStatusHelper(req.query);
    const search=searchHelper(req.query)

    //object find
    const find={deleted:false}
    // loc theo href
    if(req.query.status){
        find.status=req.query.status
    };
    //search theo href
    if(search.keyword){find.title=search.regex};
    //Pagination
    const pagination={limitItem:5, currentPage:1}
    const totalProducts=await Product.countDocuments(find)
    const paginations=paginationHelper(pagination,req.query,totalProducts)
// Arrange
    const sort={}
    if(req.query.sortKey && req.query.sortValue){
        sort[req.query.sortKey]=req.query.sortValue
    }else{
        sort.position="desc"
    }
// End Arrange
    const products=await Product.find(find)
                                .sort(sort)
                                .limit(pagination.limitItem)
                                .skip(pagination.skip);
    for (const product of products){
        const account=await Account.findOne({_id:product.createdBy.account_id})
        if(account){
            product.userName=account.fullname
        }   
    }
        res.render("admin/pages/products/index",{
            titlePage:"Trang san pham",
            products:products,
            filterStatus:filterStatus,
            keyword:search.keyword,
            pagination:paginations,
    })
};

//Change Status
module.exports.changeStatus= async(req, res)=>{
    const status=req.params.status
    const id=req.params.id
    await Product.updateOne({_id:id},{status:status})
    req.flash('success', 'Cập nhật thành công');

    res.redirect('back')
}
//End Change Status

//Change Multi Status
module.exports.changeMultiStatus=async(req, res)=>{
    const status=req.body.status
    const ids=req.body.ids.split(",")
    switch (status) {
        case "active":
            await Product.updateMany({ _id: { $in: ids } },{status:status})
            break;
        case "inactive":
            await Product.updateMany({ _id: { $in: ids } },{status:status})
            break;
        case "delete-all":
            req.body.deletedBy={
                account_id:res.locals.user.id,
                deleteAt: new Date()
            }
            await Product.updateMany({ _id: { $in: ids } },{deleted:true,deletedBy:req.body.deletedBy})
            break;
        case "change-position":
            for(const item of ids){
                const [id,position]=item.split("-")
                parseInt(position)
                await Product.updateOne({_id:id},{position:position})
            }
            break;
        default:
            break;
    }
    res.redirect('back')

}
//End Change Multi Status

//Delete one item
module.exports.deleteItem= async(req, res)=>{
    const id=req.params.id
    
    req.body.deletedBy={
        account_id:res.locals.user.id,
        deleteAt: new Date()
    }
    await Product.updateOne({_id:id},{deleted:true,deletedBy:req.body.deletedBy})
    res.redirect('back')
}
//end Delete one item
// Create
module.exports.create=(req,res)=>{
    res.render("admin/pages/products/create",{
        titlePage:"Thêm mới sản phẩm"})
}
//End  Create

// Create Post
module.exports.createPost=async(req,res)=>{
    req.body.price=parseInt(req.body.price)
    req.body.discountPercentage=parseInt(req.body.discountPercentage)
    req.body.stock=parseInt(req.body.stock)
    req.body.createdBy={
        account_id:res.locals.user.id
    }

    if(req.body.position==''){
       const count= await Product.countDocuments()
       req.body.position=count+1
    }else{
        req.body.position=parseInt(req.body.position)
    }
     const creatProduct=new Product(req.body)
    await creatProduct.save()
    res.redirect(`${systemConfig.prefixAdmin}/product`)
    req.flash('success', 'Cập nhật thành công');
}
//End  Create

// Edit Item
module.exports.edit=async (req,res)=>{
    try{
        const find={
            deleted:false,
            _id:req.params.id
        }
        const product=await Product.findOne(find)
        res.render("admin/pages/products/edit",{
            titlePage:"Chỉnh sửa sản phẩm",
            product:product    
        })
    }catch(error){
        res.redirect("back")
    }
    }
// End Edit Item

// Update Edit item
module.exports.editPatch=async (req,res)=>{
    const id=req.params.id
    req.body.price=parseInt(req.body.price)
    req.body.discountPercentage=parseInt(req.body.discountPercentage)
    req.body.stock=parseInt(req.body.stock)
    if(req.file){
        req.body.thumbnail=`/uploads/${req.file.filename}`
    } 
    req.body.position=parseInt(req.body.position)

    const editedBy={
        account_id:res.locals.user.id,
        editAt:new Date()
    }
    try {  
        await Product.updateOne({_id:id},{...req.body,$push:{editedBy:editedBy}})
        req.flash('success', 'Cập nhật thành công ');
    }catch(error) {
        req.flash('error', 'Cập nhật thất bại ');
        
    }
    res.redirect(`${systemConfig.prefixAdmin}/product`)
}
//End  Update Edit item
// Detail item
module.exports.detail=async (req,res)=>{
    try{
        const find={
            deleted:false,
            _id:req.params.id
        }
        const product=await Product.findOne(find)
        res.render("admin/pages/products/detail",{
            titlePage:product.title,
            product:product    
        })
    }catch(error){
        res.redirect("back")
    }
}
//End Detail item
