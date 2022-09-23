const makeDbconfig=require('../library/db')
async function updateCount(product_id,user_id,update){
    const db=makeDbconfig.makeDb();
    try{
        if(update==='+'){
        const fetchQuery=await db.query("UPDATE carts SET quantity=quantity+1 WHERE product_id=? AND user_id=?" ,[product_id,user_id]);
        return true
        }
        else{
            const query=await db.query("UPDATE carts SET quantity=quantity-1 WHERE product_id=? AND user_id=?" ,[product_id,user_id]);
            const subQurey=await db.query("SELECT quantity FROM carts WHERE product_id=? AND user_id=?" ,[product_id,user_id]);
            // console.log(subQurey[0].quantity)
            if(subQurey[0].quantity<1){
            const deleteQuery=await db.query("DELETE FROM carts WHERE product_id=? AND user_id=?" ,[product_id,user_id]);
            }
            return true


        }
    }
    catch(err){
        console.log(err)
        return false
    }
    finally{
        await db.close();
    }
}
module.exports={
    updateCount
}