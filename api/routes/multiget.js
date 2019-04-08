const express = require('express');
const router = express.Router();

const multigetController = require('../controllers/multigetController')

router.post('/', multigetController.getMultiGet);

module.exports = router;