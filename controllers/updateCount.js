const authModel=require('../models/updateCount');
async function updateCount(req,res){
    
    try {
    //   console.log(req.body+" yyyy ")
      const product_id=req.body.product_id;
      const user_id=req.body.uid;
      const update=req.body.update;
      
    //   console.log(product_id,user_id)
      const result= await authModel.updateCount(product_id,user_id,update)
      if(result){
        res.status(200).json({sucess:true});
      }
      else{
        res.status(500).json({message:'error'});
      }
    //   console.log('request recived'+'caaart removing  adding')
    //   return res.status(200).json({sucess:true,result});
    console.log("update jj")
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'error'});
    }
}
module.exports={
    updateCount
}