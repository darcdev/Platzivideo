const express = require('express');
const passport = require('passport');

const MoviesService = require('../services/movies');
const validationHandler = require('../utils/middlewares/validationHandler');
const {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema,
} = require('../utils/schemas/movies');

const cacheResponse = require('../utils/cacheResponse');
const {
  FIVE_MINUTES_IN_SECONDS,
  SIXTY_MINUTES_IN_SECONDS,
} = require('../utils/time');

require('../utils/auth/strategies/jwt');

function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  const moviesService = new MoviesService();

  router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
      cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
      const { tags } = req;
      try {
        const movies = await moviesService.getMovies({ tags });
        res.status(200).json({
          data: movies,
          message: 'movies listed',
        });
      } catch (e) {
        next(e);
      }
    }
  );
  router.get(
    '/:movieId',
    passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
      cacheResponse(res, SIXTY_MINUTES_IN_SECONDS);
      const { movieId } = req.params;
      try {
        const movie = await moviesService.getMovie({ movieId });
        res.status(200).json({
          data: movie,
          message: 'movie retrieved',
        });
      } catch (e) {
        next(e);
      }
    }
  );
  router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    validationHandler(createMovieSchema),
    async (req, res, next) => {
      const { body: movie } = req;
      try {
        const createMovieId = await moviesService.createMovie({ movie });
        res.status(201).json({
          data: createMovieId,
          message: 'movies created',
        });
      } catch (e) {
        next(e);
      }
    }
  );
  router.put(
    '/:movieId',
    passport.authenticate('jwt', { session: false }),
    validationHandler({ movieId: movieIdSchema }, 'params'),
    validationHandler(updateMovieSchema),
    async (req, res, next) => {
      const { movieId } = req.params;
      const { body: movie } = req;
      try {
        const updatemovieId = await moviesService.updateMovie({
          movieId,
          movie,
        });
        res.status(200).json({
          data: updatemovieId,
          message: 'movies updated',
        });
      } catch (e) {
        next(e);
      }
    }
  );
  router.delete(
    '/:movieId',
    passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
      const { movieId } = req.params;
      try {
        const deletemovieId = await moviesService.deleteMovieId({ movieId });
        res.status(200).json({
          data: deletemovieId,
          message: 'movie deleted',
        });
      } catch (e) {
        next(e);
      }
    }
  );
}

module.exports = moviesApi;
