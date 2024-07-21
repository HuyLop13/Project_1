const mongoose=require("mongoose")
const generate=require('../helper/generateRandom')
const accountSchema =new mongoose.Schema({
    fullname:String,
    email:String,
    password:String,
    token:{
        type:String,
        default:generate.generateRandom(20)
    },
    avatar:{
        type:String,
        default:""
    },
    phone:String,
    role_id:String,
    status:String,
    deleted:{type:Boolean,default:false},
 
},{timestamps: true})
const Account=mongoose.model("accounts",accountSchema,'accounts')//Product t2 là tên file trong mongodb 
module.exports=Account;