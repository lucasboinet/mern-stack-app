const express = require('express');
const router = express.Router();

const User = require('../../models/User');

/** 
@route POST api/user/login
@description login
@access Public 
*/
router.post('/login', (req, res) => {
    User.findOne({username: req.body.username, password: req.body.password}, {password: 0})
        .then(user => {
            res.json({user: user});
        })
        .catch(err => {
            res.status(400).json({error: "Unknown user"})
        })
})

router.post('/logout', (req, res) => {
    User.findOne({username: req.body.username, password: req.body.password})
        .then(user => {
            res.json({message: "Logged out successfully"})
        })
        .catch(err => {
            res.status(400).json({error: "Can't logged out user"})
        })
})

module.exports = router;