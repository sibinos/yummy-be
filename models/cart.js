const makeDbconfig=require('../library/db')
async function cartData(user_id){
    const db=makeDbconfig.makeDb();
    try{
        
        const fetchQuery=await db.query("SELECT product_name,product_id,price,imageurl,quantity,userName,quantity*price AS total FROM product INNER JOIN carts ON product.id=carts.product_id INNER JOIN users ON users.id=carts.user_id WHERE user_id=?",[user_id]);
        return fetchQuery
    }
    catch(err){
        console.log(err)
    }
    finally{
        await db.close();
    }
}
module.exports={
    cartData
}