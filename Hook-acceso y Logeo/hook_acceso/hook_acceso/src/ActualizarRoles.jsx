import { useParams } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function ActualizarRoles(){

    const[id_usuario,setId_usuarios]=useState("")
    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")
    let {id}=useParams()

    let navigate=useNavigate()

    async function actualizar(){
        alert(id)
        let respuesta=await fetch("http://localhost:3000/api/roles/"+id,{
            method:"PUT",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                nombre: nombre,
                descripcion: descripcion,
                id_usuario: id_usuario
            })
        })
        let res = await respuesta.json()
        alert(res.mensaje)
        navigate("/roles")
    }
    return(                                         
    <div>
        <h1>Actualizar </h1>
        <input placeholder="Nombre del rol" type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
            <br />
            <input placeholder="Descripcion" type="text" value={descripcion} onChange={(e)=>setDescripcion(e.target.value)}/>
            <br />
            <input placeholder="Id usuario" type="number" value={id_usuario} onChange={(e)=>setId_usuarios(e.target.value)}/>
            <br />

            <button onClick={actualizar}>Actualizar</button>
    </div>
    )
}
export default ActualizarRoles