const makeDbconfig=require('../library/db')
async function addItem(product_id,user_id,quantity){
    const db=makeDbconfig.makeDb();
    try{ 
        const cart=await db.query("SELECT * FROM  carts WHERE product_id=? AND user_id=?",[product_id,user_id])
        
        console.log(cart)
        if(cart.length<1){
            const fetchQuery=await db.query(`INSERT INTO carts(product_id,user_id,quantity)  VALUES (${product_id},${user_id},${quantity})`);
            console.log(fetchQuery)
        }else{
            console.log("already")

            const exist=await db.query("UPDATE carts SET quantity=quantity+1 WHERE product_id=? AND user_id=?",[product_id,user_id]);
        }
        // const fetchQuery=await db.query(`INSERT INTO carts(product_id,user_id,quantity)  VALUES (${product_id},${user_id},${quantity})`);
        // return fetchQuery
    }
    catch(err){
        console.log(err)
        
    }
    // finally{
    //     await db.close();
    // }
}
module.exports={
    addItem
}