const express = require('express');
const checkAuth = require("../../server/middlewares/check-auth");
import { signup, getUser, login } from '../controllers/users-controllers'

export const userRoutes = express.Router();


userRoutes.post('/login', login);
userRoutes.post('/signup', signup);

userRoutes.use(checkAuth);
userRoutes.get('/get-users', getUser);
