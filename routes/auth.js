const express = require('express');
const { register, login, refresh, getMe, logout } = require('../controllers/auth');

const auth_router = express.Router();

auth_router.route('/register').post(register)
auth_router.route('/login').post(login)
auth_router.route('/refresh').post(refresh)
auth_router.route('/me').post(getMe)
auth_router.route('/register').post(logout)

module.exports = auth_router;