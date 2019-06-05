const express = require('express');
const router = express.Router();
const Song = require('../models/songModel');

//add a new song to songs collection in songDB
router.post('/songs', (req, res, next) => {
    Song.create(req.body).then(song => {
        res.send(song);
    }).catch(next);
});

//retrieve all songs from songs collection in songDB
router.get('/songs', (req, res, next) => {
   Song.find().then(songs => {
       res.send(songs);
   }).catch(next);
});

//update the song that matches given id
router.put('/songs/:id', (req, res, next) => {
    Song.findByIdAndUpdate({_id: req.params.id}, req.body).then(song => {
        res.send(song);
    }).catch(next);
});

//delete the song that matches given id
router.delete('/songs/:id', (req, res, next) => {
    Song.findByIdAndDelete({_id: req.params.id}).then(song => {
       res.send(song);
    }).catch(next);
});

//export the router to use in index.js
module.exports = router;