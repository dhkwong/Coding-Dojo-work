const mongoose = require('mongoose');
const express = require("express");

const UserSchema = mongoose.Schema({
    name: {type:String, required:true},
    quote: {type:String, required:true},
    date: { type: Date, default: Date.now }
});

const User = mongoose.model('User', UserSchema);
// module.exports = User;
