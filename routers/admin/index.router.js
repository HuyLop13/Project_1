const dashboardRouter=require("./dashboard.router")
const productRouter=require("./products.router")
const product_categoryRouter=require('./product-category.router')
const pathAdmin=require("../../config/system")
const permission=require("./permission.router")

module.exports=(app)=>{
        app.use(pathAdmin.prefixAdmin + "/dashboard",dashboardRouter)
        app.use(pathAdmin.prefixAdmin + "/product",productRouter)
        app.use(pathAdmin.prefixAdmin + "/product-category",product_categoryRouter)
        app.use(pathAdmin.prefixAdmin + "/permission",permission)
    }