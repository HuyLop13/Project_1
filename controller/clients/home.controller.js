const Product=require('../../model/model')

module.exports.home=async(req, res)=> {
    const find={
        deleted:false,
        featured:"1",
    }
    const features=await Product.find(find)
    const newFeatures=features.map((item)=>{
        item.currentPrice= Math.ceil(((100-item.discountPercentage)/100)*item.price)
        return item
    })

    
    res.render("clients/pages/home/index",{
        title:"Trang chu",
        features:newFeatures
    })
};
