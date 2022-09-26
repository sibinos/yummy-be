const express =require('express')
const app= express(); 
app.use(express.json())
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,token");
    next();
});

const signupRoutes=require('./Routes/auth')
const loginRoutes=require('./Routes/auth')
const dropdownRoutes=require('./Routes/auth')
const tokenCheckControllerRoutes=require('./Routes/auth')
const cartRoutes=require('./Routes/auth')
const addtocartRoutes=require('./Routes/auth')
const displayRoutes=require('./Routes/auth')
const removeRoutes=require('./Routes/auth')
const updateRoutes=require('./Routes/auth')

app.use('/auth',signupRoutes)
app.use("/login",loginRoutes)
app.use('/tokenCheckController',tokenCheckControllerRoutes)
app.use('/dropdown',dropdownRoutes)
app.use('/cart',cartRoutes)
app.use('/displayItem',displayRoutes)
app.use('/addItem',addtocartRoutes)
app.use('/remove',removeRoutes)
app.use('/updateCount',updateRoutes)


app.listen(8001,()=>{console.log('server running')}); 
