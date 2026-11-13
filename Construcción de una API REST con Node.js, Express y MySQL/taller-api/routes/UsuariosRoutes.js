const express = require('express');
const UsuariosController = require('../controllers/UsuariosController');

module.exports = (db) => {
  const router = express.Router();
  const controller = new UsuariosController(db);

  router.post('/', controller.guardar);
  router.get('/', controller.traer);
  router.get('/:id', controller.buscar);
  router.put('/:id', controller.actualizar);
  router.delete('/:id', controller.eliminar);

  return router;
};