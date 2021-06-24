const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    image: [String],
    description: {
        type: String
    },
    comments: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "comment"
    },
    postedBy: {
        type: String
    },
    publishedAt: {
        type: Date
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = Post = mongoose.model('post', PostSchema);