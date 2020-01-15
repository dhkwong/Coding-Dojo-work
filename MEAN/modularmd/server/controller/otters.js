const mongoose = require('mongoose');
const express = require("express");
require('../config/mongoose.js');
mongoose.connect('mongodb://localhost/mongoosedashboard_db', { useNewUrlParser: true });

const Otter = mongoose.model('Otter');


const app = express();
module.exports = {
    otternew: function (req, res) {
        res.render("newotter") //renders new otter making page, then redirects below to /otters to save
    },
    otters: function (req, req) {
        const otter = new Otter();
        otter.name = req.body.name;
        otter.save()
            .then(newOtterData => console.log('otter created: ', newOtterData))
            .catch(err => console.log(err));
        res.redirect('/') //saves and goes to home

    },
    otterid: function (req, res) {
        var id = req.param("id");
        Otter.find({ _id: id })
            .then(data => { res.render('results', { 'otter': data }) })
            .catch(err => res.json(err));

    },
    ottereditid: function (req, res) {
        var id = req.param("id");
        Otter.find({ _id: id })
            .then(data => { res.render('otteredit', { 'otter': data }) })
            .catch(err => res.json(err));
    },
    otterpostid: function (req, res) {
        var id = req.param("id");
        Otter.update({ _id: id }, { name: req.body.name })
            .then(data => { console.log(data); return Promise.resolve(data) })//promise chaining
            .then(data => { res.redirect('/') })
            .catch(err => res.json(err));
    },
    otterhome: function (req, res) {
        Otter.find()
            .then(data => {
                console.log("hi"),
                    res.render("index", { otters: data })
            })
            .catch(err => res.json(err));
    },
    destroy: function (req, res) {
        let id = req.param("id")
        Otter.remove({ _id: id })
            .then(data => { res.redirect('/') })
            .catch(err => res.json(err));

    }
};
