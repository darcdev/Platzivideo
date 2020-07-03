const express = require('express');
const app = express();
const authApi = require('./routes/auth');
const moviesApi = require('./routes/movies');
const userMoviesApi = require('./routes/userMovies');

const {
  logErrors,
  wrapErrors,
  errorHandler,
} = require('./utils/middlewares/errorHandlers');
const notFoundHandler = require('./utils/middlewares/notFoundHandler');
//app modules
const { config } = require('./config');

app.use(express.json());

//routes
authApi(app);
moviesApi(app);
userMoviesApi(app);
// middlewares de error
app.use(notFoundHandler);
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
