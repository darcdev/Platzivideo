const express = require('express');
const app = express();
const moviesApi  = require('./routes/movies');
const { logErrors  ,wrapErrors ,  errorHandler} = require('./utils/middlewares/errorHandlers');
const notFoundHandler = require('./utils/middlewares/notFoundHandler');

//app modules
const {config} = require('./config');

app.use(express.json());
moviesApi(app);
app.use(notFoundHandler)
// middlewares de error
app.use(logErrors)
app.use(wrapErrors)
app.use(errorHandler)

app.listen(config.port , () => {
    console.log(`Listening http://localhost:${config.port}`);
})