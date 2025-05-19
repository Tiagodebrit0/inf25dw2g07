const express = require('express');
const router = express.Router();
const autorController = require('../controllers/autoresControllers');

// Todas as rotas agora são públicas (sem OAuth)
router.get('/', autorController.getAllAutores);
router.get('/:id', autorController.getAutorById);
router.post('/', autorController.createAutor);
router.put('/:id', autorController.updateAutor);
router.delete('/:id', autorController.deleteAutor);

module.exports = router;

