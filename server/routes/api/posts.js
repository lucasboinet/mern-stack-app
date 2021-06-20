const express = require('express');
const router = express.Router();

const Post = require('../../models/Post');

/** 
@route GET api/posts/test
@description tests posts route
@access Public 
*/
router.get('/test', (req, res) => res.send('posts route testing!'));

/** 
@route GET api/posts
@description Get all posts
@access Public 
*/
router.get('/', (req, res) => {
    Post.find()
        .then(posts => res.json(posts))
        .catch(err => res.status(404).json({nopostsfound: "No posts found"}));
})

/** 
@route POST api/posts
@description add post
@access Public 
*/
router.post('/', (req, res) => {
    Post.create(req.body)
        .then(post => res.json({msg: 'Post added successfully'}))
        .catch(err => res.status(400).json({error: "Unable to add this post", err: err}));
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