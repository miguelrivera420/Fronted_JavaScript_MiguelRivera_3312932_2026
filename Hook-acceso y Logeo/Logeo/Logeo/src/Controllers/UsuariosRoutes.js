const express = require("express")
const router = express.Router()

const UsuariosController = require("../Controllers/UsuariosController")

const usuariosController = new UsuariosController()

router.get("/", usuariosController.ver)
router.post("/",usuariosController.insertar)
router.put("/:id", usuariosController.actualizar)
router.delete("/:id", usuariosController.eliminar)

module.exports = router