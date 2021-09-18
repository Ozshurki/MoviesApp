const express = require('express');

import { signup, getUser, login } from '../controllers/users-controllers'

export const userRoutes = express.Router();


userRoutes.post('/login', login);

userRoutes.post('/signup', signup);
userRoutes.get('/get-users', getUser);
