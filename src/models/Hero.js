const mongoose = require('mongoose');

const HeroSchema = new mongoose.Schema({
    id: {
        type: Number, unique: true, required: true
    },
    name: {
        type: String, required: true
    },
    slug: {
        type: String, required: true
    },
    powerstats: {
        type: Object, required: true
    },
    biography: {
        type: Object, required: true
    },
    images: {
        type: Object, required: true
    },
    createdAt: {
        type: Date, default: Date.now
    }
});

module.exports = mongoose.model('Hero', HeroSchema);
