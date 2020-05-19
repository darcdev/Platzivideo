const boom  = require('boom');

function validate(data, schema){ //eslint-disable-line
    return false;
}

function validateHandler(schema , check = "body"){
    return function(req,res,next){
        const error = validate(req[check] , schema);

        error ? next(boom.badRequest(error)) : next()
    }
}

module.exports = validateHandler;