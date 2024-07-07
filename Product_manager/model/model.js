const mongoose=require("mongoose")
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);

const mongooseSchema =new mongoose.Schema({
    title:String,
    description:String,
    category:String,
    price:Number,
    discountPercentage:Number,
    rating:Number,
    stock:Number,
    weight:Number,
    slug:{  type:String,
            slug: "title",unique: true},
    position:Number,
    deleted:{type:Boolean,default:false},
    thumbnail:String,
    status:String,
    
    
},{timestamps: true})
const Product=mongoose.model("Product",mongooseSchema,'Product')//Product t2 là tên file trong mongodb 
module.exports=Product;