const express = require('express');
const { getUserById } = require('../controllers/userController');
const validateObjectIdAndAge = require('../middlewares/validateObjectIdAndAge');

const router = express.Router();

router.get('/:id', validateObjectIdAndAge, getUserById);

module.exports = router;
