const express = require('express');
const router = express.Router();
const api = require('../api');

router.get('/', api.obtenerLibros);
router.post('/', api.crearLibro);
router.put('/:id', api.actualizarLibro);
router.delete('/:id', api.eliminarLibro);

module.exports = router; 