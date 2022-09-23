const util=require('util')
var mysql = require('mysql');

function makeDb(){
  const config={
    host: "localhost",
    user: "root",
    password: "sibin2000", 
    database:"db"
  }
  const conn =mysql.createConnection(config);
  console.log("database connected");
  return {
    query(sql,args){
      return util.promisify(conn.query)
      .call(conn,sql,args);
    },
    close(){
      return util.promisify(conn.end).call(conn);
    }
  }

};
module.exports={
  makeDb
};

