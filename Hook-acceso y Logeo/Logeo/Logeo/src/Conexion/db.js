let mysql=require("mysql2");

let conectar = mysql.createConnection({
    host:"127.0.0.1",
    user: "root",
    password:"Admin",
    database:"acceso",
    port: 3306
})

conectar.connect((error)=>{
    if(error){
        console.log("Error en la db")
    }
    else{
        console.log("Conexion exitosa")
    }
})
module.exports=conectar.promise()