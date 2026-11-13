const express = require('express');
const PruebaController = require('../controllers/PruebaController');

const router = express.Router();
const controller = new PruebaController();

router.get('/', controller.bienvenida);
router.get('/verificar', controller.verificar);
router.post('/recibir', controller.recibir);
router.post('/sumar', controller.sumar);

module.exports = router;