const express = require('express');
const handler = require('../services/handler');

const router = express.Router();

router.get('/', handler.home);

router.post('/postFlavors', handler.postFlavors);

router.get('/postFlavors', handler.flavorError);

router.get('/selectQuantity', handler.quantity);

router.post('/postQuantity', handler.postQuantity);

router.get('/postQuantity', handler.quantityError);

router.get('/thankyou', handler.showOrder);

module.exports = router;
