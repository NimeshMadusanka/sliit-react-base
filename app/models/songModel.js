const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define the songDB SongSchema
songSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    artist: {
        type: String,
        required: [true, 'Artist is required']
    },
    genre: {
        type:String
    }
});
//assigning name and schema to the collection
const Song = mongoose.model("song", songSchema);
//exports the Song model to use in api.js
module.exports = Song;