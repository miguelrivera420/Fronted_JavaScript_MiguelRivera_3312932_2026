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

app.post("/personas",(req,res)=>{
    const {nombre,apellido,edad,telefono} = req.body
    if(!nombre || !apellido || !edad || !telefono){
        return res.json({"mensaje":"faltan datos por llenar"})
    }
    conectar.query("INSERT INTO persona (nombre,apellido,edad,telefono) VALUES (?,?,?,?)", [nombre,apellido,edad,telefono],(error)=>{
        if(error){
            return res.json({"mensaje":"error al registrar la persona"})
        }
        else{
            return res.json({"mensaje":"persona registrada correctamente"})
        }
    })  
})

app.get("/personas",(req,res)=>{
    conectar.query("SELECT * FROM persona",(error,resultados)=>{
        if(error){
            return res.json({"mensaje":"error al traer datos de persona"})
        }
        else{
            return res.json(resultados)
        }
    })
})

app.listen(PORT,()=>{
    console.log("servidor" + PORT)
})