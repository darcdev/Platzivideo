const express = require('express');
const app = express();
const moviesApi  = require('./routes/movies');

//app modules
const config = require('./config/index');

moviesApi(app);
app.listen(config.port , () => {
    console.log(`Listening http://localhost:${config.port}`);
})