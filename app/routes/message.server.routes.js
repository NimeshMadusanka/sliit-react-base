const express = require('express');

const Router = express.Router();

Router.get('/', function (req, res) {
    res.json({message: '......Music is a part of the life......'});
});

Router.post('/post', function (req, res) {
    res.json({message:'welcome to the'})
});

module.exports = Router;
