const express = require('express');
const dotenv = require('dotenv').config()
const database=require("./config/database")
const pathAdmin=require('./config/system')

const flash = require('express-flash')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const methodOverride = require('method-override')
const bodyParser = require('body-parser')

const routerAdmin=require("./routers/admin/index.router");
const router=require("./routers/clients/index.router");

var path = require('path');

database.connect();
const app = express();

const port =process.env.PORT;
app.use(cookieParser('SDDDDSSDD'));
app.use(session({ cookie: { maxAge: 60000 }}));
app.use(flash());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.set('view engine', 'pug');
app.set('views', `${__dirname}/views`);
app.use(express.static(`${__dirname}/public`));
app.locals.prefixAdmin=pathAdmin.prefixAdmin
router(app);
routerAdmin(app);
// Tiny mce
app.use('/tinymce', express.static(path.join(__dirname, 'node_modules', 'tinymce')));
// Tiny mce

app.listen(port,()=>{
    console.log("OK");
})