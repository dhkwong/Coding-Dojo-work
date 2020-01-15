const Placeholder = require('../models/placeholder.js')
const express = require("express");
const mongoose = require('mongoose');
// const request = require('request');

// const rp = require('request-promise');
const app = express();
app.use(express.json());
module.exports = {
    index: function (req, res) {
        // // http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={ffe897f865a4bca94a689fa4e6ceb72e}
        // rp('api.openweathermap.org/data/2.5/weather?q={san jose}').then(body => {
        //     console.log("this is rp body", body);
        //     res.json(body);
        // }).catch(err => {
        //     console.log(err);
        // });
        // // request('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={ffe897f865a4bca94a689fa4e6ceb72e}', function (error, response, body) {
        // //     if (!error && response.statusCode == 200) {
        // //         console.log(body) // Show the HTML for the Google homepage. 
        // //     }
        // //     else {
        // //         response
        // //     }
        // // });
    },


}
