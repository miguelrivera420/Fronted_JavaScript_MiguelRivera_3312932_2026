let express = require("express");
let cors = require("cors");
const app = express();
const mysql = require("mysql2")
const PORT=5000;

app.use(express.json());
app.use(cors());

let conectar = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password:"miguelrivera24",
    database: "ejemplo2",
    port: 3306
})

conectar.connect((error)=>{
    if(error){
        console.log("error de conexion con la base de datos")
    }
    else{
        console.log("conexion exitosa")
    }
})

app.get("/prueba", (req, res) => {
    res.json({ mensaje: "Prueba" });
});

app.post("/productos",(req,res)=>{
    const {nombre,categoria,precio,cantidad} = req.body
    if(!nombre || !categoria || !precio || !cantidad){
        return res.json({"mensaje":"faltan datos por llenar"})
    }
    conectar.query("INSERT INTO producto (nombre,categoria,precio,cantidad) VALUES (?,?,?,?)", [nombre,categoria,precio,cantidad],(error)=>{
        if(error){
            return res.json({"mensaje":"error al registrar el producto"})
        }
        else{
            return res.json({"mensaje":"producto registrado correctamente"})
        }
    })  
})

app.get("/productos",(req,res)=>{
    conectar.query("SELECT * FROM producto",(error,resultados)=>{
        if(error){
            return res.json({"mensaje":"error al traer datos de producto"})
        }
        else{
            return res.json(resultados)
        }
    })
})

app.listen(PORT,()=>{
    console.log("servidor" + PORT)
})