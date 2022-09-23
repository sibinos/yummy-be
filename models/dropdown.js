const makeDbconfig=require('../library/db')
async function dropdownData(){
    const db=makeDbconfig.makeDb();
    try{
        const fetchQuery=await db.query("SELECT product_name,price,imageurl,catagory_name FROM product INNER JOIN category ON product.category_id=category.id")
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
    dropdownData
}