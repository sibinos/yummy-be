const makeDbconfig=require('../library/db')

async function signup(userName,userPassword,email){
    const db=makeDbconfig.makeDb();
    try{
        const signQuery= await db.query(`INSERT INTO users(userName,userPassword,email) VALUES ("${userName}","${userPassword}","${email}")`)
        return
    }catch(err){
        console.log(err);
        return false
    }finally{
        await db.close();
    }
}

async function login(userName,userPassword){
    const db=makeDbconfig.makeDb();
    try{
        let loginQuery=await db.query("SELECT * FROM users WHERE userName=? AND userPassword=?",[userName,userPassword]);
        console.log(loginQuery+"loginquery")
        return loginQuery;
    }
    catch(err){
        console.log(err)
    }
    finally{
        await db.close();
    }
}

module.exports={
    signup,
    login,

}




