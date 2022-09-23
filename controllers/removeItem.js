const authModel=require('../models/removeItem');
async function removeItem(req,res){
    
    try {
    //   console.log(req.body+" yyyy ")
      const product_id=req.body.product_id;
      const user_id=req.body.uid;
      
    //   console.log(product_id,user_id)
      const result= await authModel.removeItem(product_id,user_id)
    //   console.log('request recived'+'caaart removing  adding')
      return res.status(200).json({sucess:true,result});
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'error'});
    }
}
module.exports={
    removeItem
}