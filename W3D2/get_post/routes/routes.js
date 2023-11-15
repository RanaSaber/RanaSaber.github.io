const express = require('express');
const handler = require('../services/handler');

const router = express.Router();

let count = 0;

router.get('/', handler.home);

router.post('/sendData', handler.postData);

router.get('/preview', handler.preview);

module.exports = router;