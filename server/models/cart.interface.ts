import {Document, model, Schema} from 'mongoose';

export interface CartDoc extends Document{
    token: {type: String, required: true, unique: true},
    movies: {type: [String], required: true}
}