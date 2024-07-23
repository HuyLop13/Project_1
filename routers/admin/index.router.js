const dashboardRouter=require("./dashboard.router")
const productRouter=require("./products.router")
const product_categoryRouter=require('./product-category.router')
const pathAdmin=require("../../config/system")
const role=require("./role.router")
const account=require("./account.router")
const auth=require("./auth.router")
const myAccount=require('./my_account.router')

const authMiddleWare=require('../../middleware/auth.middleware')

module.exports=(app)=>{
        app.use(pathAdmin.prefixAdmin + "/dashboard",
            authMiddleWare.requiredAuth,
            dashboardRouter)
        app.use(pathAdmin.prefixAdmin + "/product",
            authMiddleWare.requiredAuth,
            productRouter)
        app.use(pathAdmin.prefixAdmin + "/product-category",
            authMiddleWare.requiredAuth,
            product_categoryRouter)
        app.use(pathAdmin.prefixAdmin + "/role",
            authMiddleWare.requiredAuth,
            role)
        app.use(pathAdmin.prefixAdmin + "/account",
            authMiddleWare.requiredAuth,
            account)
        app.use(pathAdmin.prefixAdmin + "/auth",
            auth)
        app.use(pathAdmin.prefixAdmin + "/my_account",
            authMiddleWare.requiredAuth,
            myAccount)
    }