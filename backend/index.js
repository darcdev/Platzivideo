const express = require('express');
const app = express();

//app modules
const config = require('./config/index');

app.get('/' , (req, res) => {
    res.send('<h1>hola</h1>');
})
app.get('/json' , (req,res) => {
    res.json({
        hola : 'mundo'
    })
})

app.listen(config.port , () => {
    console.log(`Listening http://localhost:${config.port}`);
})