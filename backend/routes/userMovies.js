const express = require('express');
const UserMoviesService = require('../services/userMovies');
const validationHandler = require('../utils/middlewares/validationHandler');

const { movieIdSchema } = require('../utils/schemas/movies');
const { userIdSchema } = require('../utils/schemas/users');
const { createUserMovieSchema } = require('../utils/schemas/userMovies');

function userMoviesApi(app) {
  const router = express.Router();
  const userMovieService = new UserMoviesService();
  app.use('/api/user-movies', router);
  router.get(
    '/',
    validationHandler({ userId: userIdSchema }, 'query'),
    async (req, res, next) => {
      const { userId } = req.query;
      try {
        const userMovies = await userMovieService.getUserMovies({ userId });
        res.status(200).json({
          data: userMovies,
          message: 'user movies listed',
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.post(
    '/',
    validationHandler(createUserMovieSchema),
    async (req, res, next) => {
      const { body: userMovie } = req;

      try {
        const createUserMovieId = await userMovieService.createUserMovie({
          userMovie,
        });
        res.status(201).json({
          data: createUserMovieId,
          message: 'user movie created',
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.delete(
    '/:userMovieId',
    validationHandler(movieIdSchema, 'params'),
    async (req, res, next) => {
      const { userMovieId } = req.params;

      try {
        const deleteUserMovieId = await userMovieService.deleteUserMovie({
          userMovieId,
        });
        res.status(200).json({
          data: deleteUserMovieId,
          message: 'user movie deleted',
        });
      } catch (error) {
        next(error);
      }
    }
  );
}

module.exports = userMoviesApi;
