const express = require('express');
const router = express.Router();
const getAllUsers = require('../controllers/user/getAllUsers');
const getUserById = require('../controllers/user/getUserById');

router.get('/', getAllUsers.getAllUsers);
router.get('/users', getAllUsers.getAllUsers);
router.get('/users/:id', getUserById.getUserById);

module.exports = router;