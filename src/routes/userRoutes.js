const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router.post('/', controller.create);       // Criar
router.get('/', controller.list);          // Listar todos
router.get('/:id', controller.get);        // Obter um
router.put('/:id', controller.update);     // Atualizar
router.delete('/:id', controller.remove);  // Deletar

module.exports = router;
