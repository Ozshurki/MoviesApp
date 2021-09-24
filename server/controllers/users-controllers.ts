import {User} from '../models/user'

const bcrypt = require('bcryptjs');
const saltRound: number = 12;
const jwt = require('jsonwebtoken');
const HttpError = require('../models/http-error');
export const PRIVATE_KEY = "privateKey123";

//************** Middleware functions ****************

interface userValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

// Get users middleware
export const getUser = async (req, res, next) => {

    let users: any;

    try{
        users = await User.find({}, '-password');
    }catch (err){
        const error = new HttpError("Could not fetch users", 500);
        next(error);
    }
res.json({users: users.map(user => user.toObject({getters: true}))});
}

// Signup middleware
export const signup = async (req, res, next) => {

    const {firstName, lastName, email, password} = req.body;
    let hashedPassword: string;
    let userExists: boolean;

    try {
        userExists = !!(await User.findOne(({email: email})));
    } catch (err) {
        const error = new HttpError("Signup Failed, please try again later", 500);
        return next(error);
    }
    if (userExists) {
        const error = new HttpError("User already exists", 422);
        return next(error);
    }

    try {
        hashedPassword = await bcrypt.hash(password, saltRound);
    } catch (err) {
        const error = new HttpError("Could not create user", 500);
        return next(error);
    }

    const createdUser = new User({
        firstName,
        lastName,
        email,
        password: hashedPassword
    })

    let token: string;

    try {
        await createdUser.save();   // Save in db
        token = jwt.sign(   // Create Token
            {userId: createdUser.id, email: createdUser.email},
            PRIVATE_KEY,
            {expiresIn: "1h"});

    } catch (err) {
        const error = new HttpError("Signup failed, please try again.", 500);
        return next(error);
    }
    res.status(201).json({
        message: "Signing up successfully!",
        userId: createdUser.id,
        email: createdUser.email,
        token: token
    });
}

// Login middleware
export const login = async (req, res, next) => {

    const {email, password} = req.body;
    let userExists;

    // Search user in db
    try {
        userExists = await User.findOne(({email: email}));
    } catch (err) {
        const error = new HttpError("Could not login", 500);
        return next(error);
    }

    if (!userExists) {
        const error = new HttpError("Invalid credential. user not found on database", 401);
        return next(error);
    }

    let isValidPassword: boolean;
    isValidPassword = false;

    try {
        isValidPassword = await bcrypt.compare(password, userExists.password);
    } catch (err) {
        const error = HttpError("Invalid credential, please try again.", 500);
        return next(error);
    }

    if (!isValidPassword) {
        const error = HttpError("Invalid credential, could not log you in.", 401);
        return next(error);
    }

    let token: string;

    try {
        token = jwt.sign(   // Create Token
            {userId: userExists.id, email: userExists.email},
            PRIVATE_KEY,
            {expiresIn: "1h"});

    } catch (err) {
        const error = new HttpError("Logging in failed, please try again.", 500);
        return next(error);
    }
    res.json({
        message: "Logged in!",
        userId: userExists.id,
        email: userExists.email,
        token: token
    })
}