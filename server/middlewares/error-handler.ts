 export const errorHandler = (error, req, res, next) =>{
    if(res.headerSent) next(error);

    res.status(error.code || 500);
    res.json({message: error.message});
}