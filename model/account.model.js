const mongoose=require("mongoose")

const mongooseAccountSchema =new mongoose.Schema({
    fullname:String,
    email:String,
    password:String,
    token:String,
    avatar:String,
    phone:Number,
    role_id:String,
    status:String,
    deleted:{type:Boolean,default:false},
 
},{timestamps: true})
const Account=mongoose.model("Accounts",accountSchema,'accounts')//Product t2 là tên file trong mongodb 
module.exports=Account;