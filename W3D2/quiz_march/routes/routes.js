const express = require('express');
const handler = require('../services/handler');

const router = express.Router();

router.get('/', handler.home);

router.post('/postData', handler.postData);

router.get('/submit', handler.showHistory);

module.exports = router;
