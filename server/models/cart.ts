import { Schema, model } from 'mongoose';
const uniqueValidator = require('mongoose-unique-validator');
import {CartDoc} from './cart.interface';

const CartSchema = new Schema({
    token: {type: String, required: true, unique: true},
    movies: {type: [String], required: true}
});

// For unique email
CartSchema.plugin(uniqueValidator);

export const Cart = model<CartDoc>('Cart', CartSchema);