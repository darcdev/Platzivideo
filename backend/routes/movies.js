const express = require('express');
const { moviesMock } = require('../utils/mocks/movies');

function moviesApi(app){
    const router = express.Router();
    app.use('/api/movies' , router)

    router.get('/' , async (req, res,next) => {
        try{
            const movies = await Promise.resolve(moviesMock);
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
        try{
            const movie = await Promise.resolve(moviesMock[0]);
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
        try{
            const createMovieId = await Promise.resolve(moviesMock[0].id);
            res.status(201).json({
                data : createMovieId,
                message : 'movies created'
            })
        }
         catch(e){
            next(e);
         }
    })
    router.put('/' , async (req, res,next) => {
        try{
            const updatemovieId = await Promise.resolve(moviesMock[0].id);
            res.status(200).json({
                data : updatemovieId,
                message : 'movies updated'
            })
        }
         catch(e){
            next(e);
         }
    })
    router.delete('/' , async (req, res,next) => {
        try{
            const deletemovieId = await Promise.resolve(moviesMock[0].id);
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