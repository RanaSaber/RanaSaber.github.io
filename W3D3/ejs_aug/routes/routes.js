const express = require('express');
const handler = require('../services/handler');

const router = express.Router();

router.get('/', handler.home);
router.post('/postSkill', handler.postSkill);
router.get('/skills', handler.getSkills);
router.post('/postSubskills', handler.postSubskills);
router.get('/subskills', handler.getSubskills);

module.exports = router;