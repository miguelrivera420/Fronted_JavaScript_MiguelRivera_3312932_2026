
let conectar = require("../Conexion/db")
let bcrypt = require("bcrypt")

class UsuariosController {
    ver = async (req, res) => {
        let [respuesta] = await conectar.query(
            "SELECT id,nombre,apellido,direccion,telefono,correo FROM usuarios"
        )
        return res.json(respuesta)
    }
    
    insertar = async (req, res) => {
        let { nombre, apellido, direccion, telefono, correo, contraseña } = req.body
        let password = await bcrypt.hash(contraseña, 10)
        let respuesta = await conectar.query(
            "INSERT INTO usuarios (nombre,apellido,direccion,telefono,correo,contrasena) VALUES (?,?,?,?,?,?)",
            [nombre, apellido, direccion, telefono, correo, password]
        )

        return res.json({
            mensaje: "Usuario registrado correctamente"
        })
    }

    actualizar = async (req, res) => {
        let { nombre, apellido, direccion, telefono, correo, contraseña } = req.body
        let password = await bcrypt.hash(contraseña, 10)
        let respuesta = await conectar.query(
            "UPDATE usuarios SET nombre=?, apellido=?, direccion=?, telefono=?, correo=?, contraseña=? WHERE id=?",
            [nombre, apellido, direccion, telefono, correo, password, req.params.id]
        )
        return res.json({
            mensaje: "Usuario actualizado correctamente"
        })
    }

    eliminar = async (req, res) => {
        await conectar.query("DELETE FROM roles WHERE id_usuario",[req.params.id]);
        let respuesta = await conectar.query(
            "DELETE FROM usuarios WHERE id=?",
            [req.params.id]
        )
        return res.json({
            mensaje: "Usuario eliminado correctamente"
        })
    }
}

module.exports = UsuariosController