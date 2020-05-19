const { config } = require('../../config');
const boom = require('boom');

function withErrorStack(error, stack){
    if(config.dev){
        return  { ...error , stack}
    }
    return error;
}
function wrapErrors(err,req,res,next){
    if(!err.isBoom) next(boom.badImplementation(err));
    next(err);
}
function logErrors(err,req,res,next){
    console.log(err);
    next(err);
}
function errorHandler(err,req,res,next){ // eslint-disable-line
    const { 
        output : {payload ,statusCode}
    } = err;

    res.status(statusCode);
    res.json(withErrorStack(payload, err.stack))
}
module.exports = {
    logErrors,
    errorHandler,
    wrapErrors
}