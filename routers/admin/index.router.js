const dashboardRouter=require("./dashboard.router")
const productRouter=require("./products.router")
const pathAdmin=require("../../config/system")

module.exports=(app)=>{
        app.use(pathAdmin.prefixAdmin + "/dashboard",dashboardRouter)
        app.use(pathAdmin.prefixAdmin + "/product",productRouter)
    }