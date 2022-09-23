const jwt=require('jsonwebtoken')
function authanticateToken(req,res,next){
  try{
    const token=req.headers.token;
    // console.log(token+"auth token")
    
    const decode=jwt.verify(token,'jwtsecretkey')
    // console.log(decode.id)
    req.body.uid=decode.id;
    // console.log(req.body.product_id,"iddddd");
    
    next()
  }
  catch(error){
    console.log(error);
    res.status(401).json({success:false,message:'user verification failed'})
}

}
module.exports={
    authanticateToken
}