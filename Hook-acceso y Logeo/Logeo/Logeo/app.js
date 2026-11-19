let express=require("express");
let cors=require("cors");
let PORT=3000

const AccesoRoutes = require("./src/Routes/AccesoRoutes")
const UsuariosRoutes = require("./src/Routes/UsuariosRoutes")
const RolesRoutes = require("./src/Routes/RolesRoutes")

const app=express();
app.use(cors())
app.use(express.json());


app.use("/api", AccesoRoutes);
app.use("/api/usuarios", UsuariosRoutes)
app.use("/api/roles", RolesRoutes)



app.listen(PORT,()=>{
    console.log("Servidor ejecutandose correctamente " + PORT)
})