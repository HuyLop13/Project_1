const mongoose=require("mongoose")
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);

const mongooseCategorySchema =new mongoose.Schema({
    title:String,
    parent_id:{type:String,default:""},
    description:String,
    slug:{  type:String,
            slug: "title",unique: true},
    position:Number,
    deleted:{type:Boolean,default:false},
    thumbnail:String,
    status:String,
    
    
},{timestamps: true})
const Product_category=mongoose.model("Product_category",mongooseCategorySchema,'Product_category')//Product t2 là tên file trong mongodb 
module.exports=Product_category;