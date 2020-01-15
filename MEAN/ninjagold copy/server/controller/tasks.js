const mongoose = require('mongoose');
const express = require("express");
mongoose.connect('mongodb://localhost/quotingdojo_db', { useNewUrlParser: true });

const Task = mongoose.model('Task');
const app = express();
app.use(express.json());
module.exports = {
    index: function (req, res) {//
        Task.find()
            .then(task => res.json(task))
            .catch(err => res.json(err));
    },
    insert: function (req, res) {//
        const task = new Task();
        console.log("body",req.body);
        // Task.create(req.body);
        task.title=req.body.title;
        task.description=req.body.description;
        task.completed = req.body.completed;
        task.save()
            .then(newTaskData => console.log('Task created: ', newTaskData))
            .catch(err => console.log(err));

        res.redirect('/')
    },
    find: function (req, res) {
        taskid = req.param('taskid')
        Task.find({ _id: taskid })
            .then(task => res.json(task))
            .catch(err => res.json(err));
    },
    update: function (req, res) {
        taskid = req.param('taskid')
        Task.updateOne({ _id: taskid }, { $set: { title: req.body.title, description: req.body.description } })
            .then(task => res.json(task))
            .catch(err => res.json(err));
    },
    remove: function (req, res) {
        taskid = req.param('taskid')
        Task.remove({ _id: taskid })
            .then(result => res.redirect('/'))
            .catch(err => res.json(err));
    },
};