let conectar = require("../Conexion/db")
let bcrypt = require("bcrypt")

class AccesoController {

    login = async (req, res) => {
        let { correo, contrasena } = req.body
        let [respuesta] = await conectar.query(
            "SELECT contrasena from usuarios where correo=?",
            [correo]
        )
        console.log(respuesta)
        let validar = await bcrypt.compare(contrasena, respuesta[0].contrasena)
        if (validar) {
            return res.json({
                mensaje: "logueo correcto"
            })
        }
        else {
            return res.json({
                mensaje: "logueo incorrecto"
            })
        }
    }

    registrarse = async (req, res) => {
        let { nombre, apellido, direccion, telefono, correo, contrasena } = req.body
        let password = await bcrypt.hash(contrasena, 10)
        let respuesta = await conectar.query(
            "INSERT INTO usuarios (nombre,apellido,direccion,telefono,correo,contrasena) VALUES (?,?,?,?,?,?)",
            [nombre, apellido, direccion, telefono, correo, password]
        )
        console.log(respuesta)
        return res.json({
            mensaje: "Usuario registrado correctamente",
            usuario: {
                usuario: nombre,
                apellido: apellido
            }
        })
    }
}

module.exports = AccesoController