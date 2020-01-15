const mongoose = require('mongoose');
const express = require("express");
mongoose.connect('mongodb://localhost/ratemycakes_db', { useNewUrlParser: true });

const Cake = mongoose.model('Cake');

const app = express();
app.use(express.json());
module.exports = { 
    index: function (req, res) {//
        Cake.find( {new:true})
            .then(cake => res.json(cake))
            .catch(err => res.json(err));
    },
    insert: function (req, res) {//creates cake
        const cake = new Cake();
        console.log("body",req.body);
        cake.baker=req.body.baker;
        cake.image = req.body.image;
        cake.save()
            .then(newCakeData => {
                console.log("I've inserted a cake in cakes.js", newCakeData)
                res.json(newCakeData)})
            .catch(err => res.json(err))
       
    },
    find: function (req, res) {
        cakeid = req.param('cakeid')
        Cake.find({ _id: cakeid })
            .then(cake => res.json(cake))
            .catch(err => res.json(err));
    },
    update: function (req, res) { //insert ratings
        cakeid = req.param('cakeid')
        console.log("update in cakes.js", req.body)
        Cake.findByIdAndUpdate( cakeid, { $push: {ratings:req.body} }, {new:true})
            .then(cake => {
                console.log("findbyid",cake)
                res.json(cake)})
            .catch(err => res.json(err));
    },
    remove: function (req, res) {
        
        cakeid = req.param('cakeid');
        console.log("cakeid", cakeid);
        Cake.remove({ _id: cakeid })
            .then(result => res.json(result))
            .catch(err => res.json(err));
    },
}
