import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function TablaRoles(){

    const [rol, setRol] = useState([])
    const [id, setId] = useState("")
    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const navigate=useNavigate();
    
    useEffect(()=>{
        traerDatos()
    },[])

    async function traerDatos(){
        let respuesta = await fetch("http://localhost:3000/api/roles");
        let datos = await respuesta.json();
        console.log(datos)
        setRol(datos)
    }

    async function insertar(){
        let respuesta = await fetch("http://localhost:3000/api/roles",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre: nombre,
                descripcion: descripcion,
                id_usuario: id 
            })
        })

        let datos = await respuesta.json()
        alert(datos.mensaje)

        limpiar()
        traerDatos()
    }

    async function actualizar(){
        if (!id) {
            alert("Por favor selecciona un rol usando el botón 'Editar'.");
            return;
        }

        let respuesta = await fetch("http://localhost:3000/api/roles/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre: nombre,
                descripcion: descripcion,
                id_usuario: id
            })
        })

        let datos = await respuesta.json()
        alert(datos.mensaje)

        limpiar()
        traerDatos()
    }

    
    function limpiar(){
        setId("")
        setNombre("")
        setDescripcion("")
    }
    function llevarActualizar(id){
        navigate("/actualizarRol/"+id)
    }

    async function eliminarRoles(id){
        alert(id)
        let respuesta= await fetch("http://localhost:3000/api/roles/"+id,{
            method: "DELETE"
        })

        let msj=await respuesta.json()
        alert(msj.mensaje)  
        traerDatos() 
    
    }

    

    return(
        <div>
            <h1>Gestión Roles</h1>

            <h2>Formulario</h2>

            <input placeholder="Nombre del rol" type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
            <br />
            <input placeholder="Descripcion" type="text" value={descripcion} onChange={(e)=>setDescripcion(e.target.value)}/>
            <br />
            <input placeholder="Id usuario" type="number" value={id} onChange={(e)=>setId(e.target.value)}/>
            <br />

            <button onClick={insertar}>Registrar Rol</button>
            
            
            
            <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nombre rol</th>
                        <th>Descripcion</th>
                        <th>Id Usuario</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {rol.map((index)=>(
                        <tr key={index.id}>
                            <td>{index.id}</td>
                            <td>{index.nombre}</td>
                            <td>{index.descripcion}</td>
                            <td>{index.id_usuario}</td>

                            <td>
                                <button onClick={()=>llevarActualizar(index.id)}> Actualizar </button>
                                <button onClick={()=>eliminarRoles(index.id)}> Eliminar </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TablaRoles;