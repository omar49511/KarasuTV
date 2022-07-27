const mongoose = require('mongoose');
const AnimeSchema = new mongoose.Schema(
    {
        title: {type: String, required: true, unique: true},
        description: {type: String},
        img: {type: String},//background image
        imgTitle: {type: String},
        imgSm: {type: String},//small image
        trailer: {type: String},
        video: {type: String},
        year: {type: String},
        limit: {type: Number},//limit of age to watch
        genre: {type: String},
        isActive: {type: Boolean, default: true},
    },
    {timestamps: true}
);

module.exports = mongoose.model('Anime', AnimeSchema);