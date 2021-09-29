const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const HttpError = require('./models/http-error');
import {userRoutes} from './routes/users-routes';

const app = express();

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
app.use((req,res,next) =>{
    throw new HttpError("Could not find this route", 404);
})

// Errors middleware
app.use((error,req,res,next)=>{

    if(res.headerSent)
        next(error);

    res.status(error.code || 500);
    res.json({message: error.message});
})


// Connection to DataBase
mongoose.connect('mongodb+srv://ozshurki:ozshu123@cluster0.tkjon.mongodb.net/Users?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => {
        app.listen(5000, () => {
            console.log("Connected to database");
        })
    })
    .catch(err => {
        console.log(err);
    });

mongoose.set('useFindAndModify', false);



