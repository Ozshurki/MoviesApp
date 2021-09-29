const jwt = require('jsonwebtoken');
const HttpError = require("../models/http-error");
import {PRIVATE_KEY} from "../controllers/users-controllers";


module.exports = (req, res, next) => {
    let token:string;
    let decodedToken:string;

    try {
        token = req.headers.authorization.split(' ')[1];
        if (!token)
            return res.status(401).json({
                message: "Unauthorized"
            });

        decodedToken = jwt.verify(token, PRIVATE_KEY)
        res.local.jwt = decodedToken;
        req.userData = {userId: decodedToken};
        next();

    } catch (err) {
        const error = new HttpError("Authentication failed", 401);
        return next(error);
    }
}