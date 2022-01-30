const express = require("express");
import {createMovie, getCart} from "../controllers/cart-controllers";

export const router = express.Router();

router.post('/create', createMovie);
router.get('/', getCart);
