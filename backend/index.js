const express = require('express');
const app = express();
const moviesApi  = require('./routes/movies');
const { logErrors  , errorHandler} = require('./utils/middlewares/errorHandlers');
//app modules
const {config} = require('./config');

app.use(express.json());
moviesApi(app);

// middlewares de error
app.use(logErrors)
app.use(errorHandler)

app.listen(config.port , () => {
    console.log(`Listening http://localhost:${config.port}`);
})