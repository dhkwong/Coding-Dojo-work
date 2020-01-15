const mongoose = require('mongoose');
const express = require("express");
mongoose.connect('mongodb://localhost/quotingdojo_db', { useNewUrlParser: true });
const User = mongoose.model('User');

const app = express();
app.use(express.json());
module.exports = {
    index: function (req, res) {//
        User.find()
            .then(users => res.json(users))
            .catch(err => res.json(err));
    },
    insert: function (req, res) {//
        const user = new User();
        user.name = req.param('username')
        user.save()
            .then(newUserData => console.log('user created: ', newUserData))
            .catch(err => console.log(err));
        result = User.find()
        console.log(result)
        res.redirect('/')
    },
    find: function (req, res) {
        username = req.param('username')
        User.find({ name: username })
            .then(user => res.json(user))
            .catch(err => res.json(err));
    },
    remove: function (req, res) {
        username = req.param('username')
        User.remove({ name: username })
            .then(result => res.redirect('/'))
            .catch(err => res.json(err));
    },
};