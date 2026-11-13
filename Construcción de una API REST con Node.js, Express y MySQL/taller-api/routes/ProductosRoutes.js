const express = require('express');
const ProductosController = require('../controllers/ProductosController');

module.exports = (db) => {
  const router = express.Router();
  const controller = new ProductosController(db);

  router.get('/agotados', controller.agotados);
  router.get('/bajo-stock', controller.bajoStock);

  router.post('/', controller.guardar);
  router.get('/', controller.traer);
  router.get('/:id', controller.buscar);
  router.put('/:id', controller.actualizar);
  router.delete('/:id', controller.eliminar);

  return router;
};