const productRouter=require("./products.router")
const homeRouter=require("./home.router")   
const createSubMenu=require('../../middleware/createSubMenu.middleware')
module.exports=(app)=>{
        app.use(createSubMenu.tree)
        app.use('/',homeRouter)  
        app.use('/product',productRouter)
    }