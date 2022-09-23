const express=require('express');
const{
    signup,
    login,
    tokenCheckController
    
    
}=require('../controllers/validation');
const {dropdownData}=require('../controllers/dropdown');
const {cartData}=require('../controllers/cart')
const{authanticateToken}=require('../middileware/validate');
const {addItem}=require('../controllers/addItem')
const {displayItem}=require('../controllers/displayItem')
const{removeItem}=require('../controllers/removeItem')
const{updateCount}=require('../controllers/updateCount')
 
const router=express.Router();
router.post('/signup',signup);
router.post('/login',login);
router.post('/tokenCheckController',authanticateToken,tokenCheckController);
router.get('/dropdown',authanticateToken,dropdownData);
router.get('/cart',authanticateToken,cartData)
router.get('/displayItem',authanticateToken,displayItem)
router.post('/addItem',authanticateToken,addItem)
router.post('/removeItem',authanticateToken,removeItem)
router.post('/updateCount',authanticateToken,updateCount)


module.exports=router;

