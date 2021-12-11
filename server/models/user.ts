import { Schema, model } from 'mongoose';
const uniqueValidator = require('mongoose-unique-validator');
import {UserDoc} from './user.interface';

const UserSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

// For unique email
UserSchema.plugin(uniqueValidator);

export const User = model<UserDoc>('User', UserSchema);