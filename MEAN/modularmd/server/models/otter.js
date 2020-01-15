const mongoose = require('mongoose');
const express = require("express");

const OtterSchema = new mongoose.Schema({
    name: { type: String, required: true },

})
// create an object to that contains methods for mongoose to interface with MongoDB
const Otter = mongoose.model('Otter', OtterSchema);
module.exports = Otter;