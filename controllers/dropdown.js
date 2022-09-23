const authModel=require('../models/dropdown');
async function dropdownData(req,res){
    
    try {
      const result= await authModel.dropdownData()
    //   console.log('request recived')
      return res.status(200).json({sucess:true,result});
        
    } catch (error) {
        console.log(error);
        return res.json({message:'error'}).status(500);
    }
}
module.exports={
    dropdownData
}