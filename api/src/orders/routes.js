const express = require('express');
const router = express.Router();
const controller = require('./controller')

router.get('/', controller.list);
router.get('/:id', controller.read);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.del);

module.exports = app => app.use('/orders', router);