const makeDbconfig=require('../library/db')
async function removeItem(product_id,user_id){
    const db=makeDbconfig.makeDb();
    try{
        
        const fetchQuery=await db.query("DELETE FROM carts WHERE product_id=? AND user_id=?" ,[product_id,user_id]);
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
    removeItem
}