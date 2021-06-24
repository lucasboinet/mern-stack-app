const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    postedBy: {
        type: String
    },
    message: {
        type: String
    },
    postedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = Comment = mongoose.model('comment', CommentSchema);