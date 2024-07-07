const productRouter=require("./products.router")
const homeRouter=require("./home.router")   

module.exports=(app)=>{
        app.use('/',homeRouter)
        
        app.use('/product',productRouter)
    }