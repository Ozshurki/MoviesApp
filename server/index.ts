const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const HttpError = require('./models/http-error');
import {userRoutes} from './routes/users-routes';

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/users', userRoutes);
app.use((req,res,next) =>{
    const error = new HttpError("Could not find this route", 404);
    throw error;
})

// Errors middleware
app.use((error,req,res,next)=>{

    if(res.headerSent){
        next(error);
    }
    res.status(error.code || 500);
    res.json({message: error.message});
})


// Connection to DataBase
mongoose.connect('mongodb+srv://ozshurkiozshu123@cluster0.tkjon.mongodb.net/Users?retryWrites=true&w=majority', {
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



