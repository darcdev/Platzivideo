const express = require('express');
const MoviesService = require('../services/movies');

function moviesApi(app){
    const router = express.Router();
    app.use('/api/movies' , router)

    const moviesService = new MoviesService();

    router.get('/' , async (req, res,next) => {
        const { tags } = req;
        try{
            const movies = await moviesService.getMovies({tags})
            res.status(200).json({
                data : movies,
                message : 'movies listed'
            })
        }
         catch(e){
            next(e);
         }
    })
    router.get('/:movieId' , async (req, res,next) => {
        const { movieId } = req.params;
        try{ 
            const movie = await moviesService.getMovie({movieId})
            res.status(200).json({
                data : movie,
                message : 'movie retrieved'
            })
        }
         catch(e){
            next(e);
         }
    })
    router.post('/' , async (req, res,next) => {
        const { body: movie} = req;
        try{
            const createMovieId = await moviesService.createMovie({movie});
            res.status(201).json({
                data : createMovieId,
                message : 'movies created'
            })
        }
         catch(e){
            next(e);
         }
    })
    router.put('/:movieId' , async (req, res,next) => {
        const {movieId} = req.params;
        const {body : movie} = req;
        try{
            const updatemovieId = await moviesService.updateMovie({movieId , movie });
            res.status(200).json({
                data : updatemovieId,
                message : 'movies updated'
            })
        }
         catch(e){
            next(e);
         }
    })
    router.delete('/:movieId' , async (req, res,next) => {
        const {movieId} = req.params;
        try{
            const deletemovieId = await moviesService.deleteMovieId({movieId});
            res.status(200).json({
                data : deletemovieId,
                message : 'movie deleted'
            })
        }
         catch(e){
            next(e);
         }
    })
}

module.exports = moviesApi;