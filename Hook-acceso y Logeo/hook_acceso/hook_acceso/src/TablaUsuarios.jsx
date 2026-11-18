import { useEffect, useState } from "react"

function TablaUsuarios(){

    const [usuarios,setUsuarios]=useState([])

    const [id,setId]=useState("")
    const [nombre,setNombre]=useState("")
    const [apellido,setApellido]=useState("")
    const [direccion,setDireccion]=useState("")
    const [telefono,setTelefono]=useState("")
    const [correo,setCorreo]=useState("")
    const [contraseña,setContraseña]=useState("")

    useEffect(()=>{
        traerDatos()
    },[])

    async function traerDatos(){
        let respuesta = await fetch("http://localhost:3000/api/usuarios")
        let datos = await respuesta.json()
        console.log("Datos completos desde la BD:", datos);
        setUsuarios(datos)
    }

    async function insertar(){

        let respuesta = await fetch("http://localhost:3000/api/usuarios",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                nombre:nombre,
                apellido:apellido,
                direccion:direccion,
                telefono:telefono,
                correo:correo,
                contraseña:contraseña
            })
        })

        let datos = await respuesta.json()
        alert(datos.mensaje)

        limpiar()
        traerDatos()
    }

    async function actualizar(){

        let respuesta = await fetch("http://localhost:3000/api/usuarios/"+id,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                nombre:nombre,
                apellido:apellido,
                direccion:direccion,
                telefono:telefono,
                correo:correo,
                contraseña:contraseña
            })
        })

        let datos = await respuesta.json()
        alert(datos.mensaje)

        limpiar()
        traerDatos()
    }

    function editar(index){
        setId(index.id)
        setNombre(index.nombre)
        setApellido(index.apellido)
        setDireccion(index.direccion)
        setTelefono(index.telefono)
        setCorreo(index.correo)
        setContraseña("")
    }

    async function eliminar(id){

        let respuesta = await fetch("http://localhost:3000/api/usuarios/"+id,{
            method:"DELETE"
        })

        let datos = await respuesta.json()
        alert(datos.mensaje)

        traerDatos()
    }

    function limpiar(){
        setId("")
        setNombre("")
        setApellido("")
        setDireccion("")
        setTelefono("")
        setCorreo("")
        setContraseña("")
    }

    return(
        <div>

            <h1>Gestion Usuarios</h1>

            <h2>Formulario </h2>

            <input placeholder="Nombre" type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
            <br />
            <input placeholder="Apellido" type="text" value={apellido} onChange={(e)=>setApellido(e.target.value)}/>
            <br />
            <input placeholder="Direccion" type="text" value={direccion} onChange={(e)=>setDireccion(e.target.value)}/>
            <br />
            <input placeholder="Telefono" type="text" value={telefono} onChange={(e)=>setTelefono(e.target.value)}/>
            <br />
            <input placeholder="Correo" type="email" value={correo} onChange={(e)=>setCorreo(e.target.value)}/>
            <br />
            <input placeholder="Contraseña" type="password" value={contraseña} onChange={(e)=>setContraseña(e.target.value)}/>
            <br />

            <button onClick={insertar}>Registrar</button>
            <button onClick={actualizar}>Actualizar</button>
            

            <h2>Lista de Usuarios</h2>

            <table border={1}>
                <thead>
                    <tr>
                        <th>Id Usuario</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Direccion</th>
                        <th>Telefono</th>
                        <th>Correo</th>
                        <th>Modificacion</th>
                    </tr>
                </thead>

                <tbody>
                    {usuarios.map((index)=>(
                        <tr key={index.id}>
                            <td>{index.id}</td>
                            <td>{index.nombre}</td>
                            <td>{index.apellido}</td>
                            <td>{index.direccion}</td>
                            <td>{index.telefono}</td>
                            <td>{index.correo}</td>

                            <td>
                                <button onClick={()=>editar(index)}> Actualizar </button>
                                <button onClick={()=>eliminar(index.id)}> Eliminar </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default TablaUsuarios