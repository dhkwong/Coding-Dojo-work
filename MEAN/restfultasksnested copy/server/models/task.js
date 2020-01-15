const mongoose = require('mongoose');
const express = require("express");

const TaskSchema = mongoose.Schema({
    title: {type:String, required:true},
    description: {type:String, default:""},
    completed:{type:Boolean, default:false},
    createdat: { type: Date, default: Date.now },
    updatedat: { type: Date, default: Date.now },
});

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;

