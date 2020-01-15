const mongoose = require('mongoose');
const express = require("express");
mongoose.connect('mongodb://localhost/quotingdojo_db', { useNewUrlParser: true });
const User = mongoose.model('User');

const app = express();
module.exports = {
    index: function (req, res) {
        app.get('/', (req, res) => {
            User.find()
                .then(data => res.render("index", { users: data }))
                .catch(err => res.json(err));
        });
        res.render('index')
    },
    save: function (req, res) {
        const user = new User();
        user.name = req.body.name;
        user.quote = req.body.quote;
        user.save()
            .then(newUserData => console.log('user created: ', newUserData))
            .catch(err => console.log(err));
        result = User.find()
        console.log(result)
        res.redirect('/result')
    },
    result: function (req, res) {
        User.find({}, function (err, results) {
            res.render('results', { 'results': results })

        });
    }
};