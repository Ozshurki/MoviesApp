const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const HttpError = require('./models/http-error');
import {router as userRoutes} from './routes/users-routes';
import {router as cartRoutes} from './routes/cart-routes';
import {errorHandler} from './middlewares/error-handler'

const app = express();

// Parse request body
app.use(bodyParser.json());
app.use(cors());

app.use((req,res,next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
})

app.use('/api/users', userRoutes);
app.use('/api/cart', cartRoutes);

// Unknown route middleware
app.use((req,res,next) => {throw new HttpError("Could not find this route", 404)})
app.use(errorHandler)

// Connection to DataBase
mongoose.connect('mongodb+srv://ozshurki:ozshurki@cluster0.tkjon.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => {
        app.listen(5000, () => {
            console.log("Connected to database successfully");
        })
    })
    .catch(err => {
        console.log(err);
    });

mongoose.set('useFindAndModify', false);