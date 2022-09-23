const authModel=require('../models/validation');
const jwt=require('jsonwebtoken')

async function signup(req,res){
    try{
        console.log('controller SIGNUP');
        console.log(req.body,'sign up');
        
        
        const userName=req.body.userName;
        const userPassword=req.body.userPassword;
        const email=req.body.email;
         
        if(userName.length<1 || userPassword.length<1 || email.length<1) {
            return res.status(401).json({sucess:false,message:'please fill all inputfilelds'})
        }
        
        authModel.signup(userName,userPassword,email);
        return res.status(200).json({sucess:true,message:'signup sucessfully'});
       
    }catch(err){
        return res.json({message:'error'}).status(500);
    }
}

async function login(req,res){
    try{

        const userName=req.body.userName;
        const userPassword=req.body.userPassword;
        
        if(userName.length<1 || userPassword.length<1){
            
            return res.status(200 ).json({sucess:false,message:'plese fill your input field'});  
        }
        const data= await authModel.login(userName,userPassword);
        console.log(data)
        if(data.length>0){
            const id=data[0].id
            console.log(id+'checking id ')
            const token = jwt.sign({id},'jwtsecretkey',{expiresIn:'3h'})
            console.log(token)
            return res.status(200).json({sucess:true,message:'sucessfully loged in',token:token});   
        }
        else{
            return res.status(401).json({sucess:false,message:'you have enterd a bad credentials, please try  again'}); 
        }   
    }
    catch(err){
        console.log(err)
        return res.status(500).json({message:'error'});
    }
}
const tokenCheckController = async (req,res)=>{
    res.json({ success: true, message: 'User verified' }).status(200);
}

    module.exports={
    signup,
    login,
    tokenCheckController
    
}