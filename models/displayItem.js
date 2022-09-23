const makeDbconfig=require('../library/db')
async function displayItem(){
    const db=makeDbconfig.makeDb();
    try{
        const fetchQuery=await db.query("SELECT id,product_name,price,imageurl FROM product LIMIT 4")
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
    displayItem
}