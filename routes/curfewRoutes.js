const express = require('express');
const curfewController = require('../controllers/curfewController');

const router = express.Router();

router.get('/', curfewController.getCurfew);

module.exports = router;
