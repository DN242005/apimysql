const express = require('express');
const router = express.Router();
const userController = require('../controllers');

// Ruta de prueba básica
router.get('/', (req, res) => {
  res.send('API funcionando correctamente desde rutas');
});

// Nueva ruta: Obtener todos los usuarios
router.get('/users', userController.getUsers);
router.post('/users', userController.postUser);

module.exports = router;

