const Product=require('../../model/model')

module.exports.home=async(req, res)=> {
    const find={
        deleted:false,
        featured:"1",
    }
    const features=await Product.find(find)
    res.render("clients/pages/home/index",{
        title:"Trang chu",
        features:features
    })
};
