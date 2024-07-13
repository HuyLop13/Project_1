const mongoose=require("mongoose")

const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);
const mongooseRoleSchema =new mongoose.Schema({
    title:String,
    description:String,
    slug:{  type:String,
        slug: "title",unique: true},
    permissions:{type:Array,default:[]},
    deleted:{type:Boolean,default:false},
},{timestamps: true})
const Role=mongoose.model("Role",mongooseRoleSchema,'Role')//Product t2 là tên file trong mongodb 
module.exports=Role;