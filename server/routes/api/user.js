const express = require('express');
const router = express.Router();

const User = require('../../models/User');

/** 
@route GET api/user/:id
@description get user by id
@access Public 
*/
router.get('/:id', (req, res) => {
    User.findOne({_id: req.params.id}, {password: 0})
        .then(user => res.json({user: user}))
        .catch(err => res.status(400).json({error: "Unknown user"}));
})

/** 
@route POST api/user/login
@description login
@access Public 
*/
router.post('/login', (req, res) => {
    User.findOne({username: req.body.username, password: req.body.password}, {_id: 1})
        .then(user => res.json({sessid: user._id}))
        .catch(err => res.status(400).json({error: "Unknown user"}))
})

/** 
@route POST api/user/logout
@description logout
@access Public 
*/
router.post('/logout', (req, res) => {
    console.log(req.body)
    User.findOne({_id: req.body.id})
        .then(user => {
            res.json({message: "Logged out successfully"})
        })
        .catch(err => {
            res.status(400).json({error: "Can't logged out user"})
        })
})

module.exports = router;