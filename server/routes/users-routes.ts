const express = require('express');
const checkAuth = require("../middlewares/check-auth");
import { signup, getUser, login } from '../controllers/users-controllers'

export const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);

// Middleware for route protection (doesnt work)
router.use(checkAuth);
router.get('/get-users', getUser);


