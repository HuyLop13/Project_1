const mongoose=require("mongoose")

const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);
const mongoosePermissionSchema =new mongoose.Schema({
    title:String,
    description:String,
    slug:{  type:String,
        slug: "title",unique: true},
    permissions:{type:Array,default:[]},
    deleted:{type:Boolean,default:false},
},{timestamps: true})
const Permission=mongoose.model("Permission",mongoosePermissionSchema,'Permission')//Product t2 là tên file trong mongodb 
module.exports=Permission;