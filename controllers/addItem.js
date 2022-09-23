const authModel=require('../models/addItem');
async function addItem(req,res){
    
    try {
    //   console.log(req.body+" yyyy ")
      const product_id=req.body.product_id;
      const user_id=req.body.uid;
      const quantity=req.body.quantity;
      
    //   console.log(product_id,user_id)
      const result= await authModel.addItem(product_id,user_id,quantity)
    //   console.log('request recived'+'caaart data adding')
      return res.status(200).json({sucess:true,result});
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'error'});
    }
}
module.exports={
    addItem
}