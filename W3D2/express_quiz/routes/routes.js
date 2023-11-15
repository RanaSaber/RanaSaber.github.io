const express = require('express');
const handler = require('../services/handler');

const router = express.Router();

router.get('/', handler.home);

router.post('/login', handler.login);

router.get('/view', handler.view);

router.get('/category', handler.showCategory);

router.get('/error', handler.error);

router.use(handler.error);

module.exports = router;
