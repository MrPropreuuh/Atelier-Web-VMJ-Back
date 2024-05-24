const express = require('express');
const router = express.Router();
const { apiItems } = require('../controllers/itemController');

router.get('/api/items', apiItems);

module.exports = router;
