const authModel=require('../models/cart');
async function cartData(req,res){
    
    try {
    //   console.log(req.body.id)
      const user_id=req.body.uid;
      const result= await authModel.cartData(user_id)
    //   console.log('request recived'+'caaart')
      return res.status(200).json({sucess:true,result});
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'error'});
    }
}
module.exports={
    cartData
}