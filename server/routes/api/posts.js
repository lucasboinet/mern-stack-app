const express = require('express');
const router = express.Router();

const Post = require('../../models/Post');
const Comment = require('../../models/Comment');

/** 
@route GET api/posts
@description Get all posts
@access Public 
*/
router.get('/', (req, res) => {
    Post.find()
        .populate('comments')
        .then(completePosts => {
            res.json(completePosts)
        })
        .catch(err => res.status(404).json({nopostsfound: "No posts found"}));
})


/** 
@route POST api/posts
@description add post
@access Public 
*/
router.post('/', (req, res) => {
    Post.create(req.body)
        .then(post => {
            res.json({msg: 'Post added successfully'})
        })
        .catch(err => res.status(400).json({error: "Unable to add this post", err: err}));
})

/** 
@route GET api/posts/:id
@description get post
@access Public 
*/
router.get('/:id', (req, res) => {
    Post.findOne({_id: req.params.id })
        .populate('comments')
        .then(post => {
            res.json({post: post})
        })
        .catch(err => {
            res.status(400).json({error: "Unable to find post: " + req.params.id});
        })
})

/** 
@route POST api/posts/comment
@description add comment
@access Public 
*/
router.post('/comment', (req, res) => {
    Comment.create({postedBy: "User", message: req.body.message})
        .then(comment => {
            return Post.findOneAndUpdate({ _id: req.body.id }, { $push: {comments: comment._id }}, {new: true}).populate('comments');
        }) 
        .then(post => {
            res.json({msg: 'Comment added successfully', post: post})
        })
        .catch(err => res.status(400).json({error: "Unable to add this comment", err: err}));
})

/** 
@route PUT api/posts/:id
@description update post
@access Public 
*/
router.put('/:id', (req, res) => {
    Post.findByIdAndUpdate(req.params.id, req.body)
        .then(post => res.json({msg: "Updated successfully"}))
        .catch(err => res.status(400).json({error: "Unable to update this post"}));
})

/** 
@route DELETE api/posts/:id
@description delete post
@access Public 
*/
router.delete('/:id', (req, res) => {
    Post.findByIdAndRemove(req.params.id, req.body)
        .then(post => res.json({ mgs: 'Post entry deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such a post' }));
})

module.exports = router;