const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    timeframe: {
        type: Number
    },
    location: {
        type: String
    },
    jobType: {
        type: String,
        required: True
    },
    budget: {
        type: Number
    },
    postOwner: {
        type: String,
        required: True
    }

})


module.exports = mongoose.model('Post', postSchema)