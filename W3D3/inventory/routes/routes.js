const express = require('express');
const handler = require('../services/handler');

const router = express.Router();

router.get('/', handler.home);
router.post('/addItem', handler.addItem);
router.put('/editItem', handler.editItem);
router.delete('/deleteItem', handler.deleteItem);

module.exports = router;