const express = require('express');
const router = express.Router();
const {registerStudent} = require('../controller/studentController');

router.post('/student',registerStudent);


module.exports = router;