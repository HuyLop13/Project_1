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
    featured:String,
    weight:Number,
    slug:{  type:String,
            slug: "title",unique: true},
    position:Number,
    deleted:{type:Boolean,default:false},
    thumbnail:String,
    status:String,
    createdBy:{
        account_id:String,
        createAt:{
            type:Date,
            default:Date.now
        }
    },
    deletedBy:{
        account_id:String,
        deleteAt:Date
    },
    editedBy:[{
        account_id:String,
        editAt:Date
    },
    ]
    
},{timestamps: true})
const Product=mongoose.model("Product",mongooseSchema,'Product')//Product t2 là tên file trong mongodb 
module.exports=Product;