import {Cart} from "../models/cart";
const HttpError = require("../models/http-error");


export const createMovie = async (req, res, next) => {

    const {imdbID, token} = req.body;
    let myCart: object;

    // Get all user cart
    try{
        myCart = await Cart.findOne(({token: token}));
    }catch (err){
        const error = new HttpError("Could not save the movie, please try again later.", 500);
        return next(error);
    }

    // Search for the wanted movie in the cart
    if(imdbID in myCart) {
        const error = new HttpError("Movie already exists.", 422);
        return next(error);
    }

    const movie = new Cart({
        token,
        imdbID
    });

    // Save movie in cart
    try{
        await movie.save();
    }catch (err){
        const error = new HttpError("Failed to save the movie, please try again later.", 500);
        return next(error);
    }

    res.status(200).json({message:"Saved successfully!"});
}

export const getCart = async (req, res, next) => {

}