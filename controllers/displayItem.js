const authModel=require('../models/displayItem');
async function displayItem(req,res){
    
    try {
      const result= await authModel.displayItem()
      console.log('request recived')
      return res.status(200).json({sucess:true,result});
        
    } catch (error) {
        console.log(error);
        return res.json({message:'error'}).status(500);
    }
}
module.exports={
    displayItem
}