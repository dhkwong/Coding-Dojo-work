const express = require("express");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoosedashboard_db', { useNewUrlParser: true });
require('./server/config/mongoose.js');
const Otter = new mongoose.model('Otter');
const app = express();
app.use(express.static(__dirname + "/static"));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/client/views');
app.use(express.urlencoded({ extended: true })); //for post
require('./server/config/routes.js')(app);

app.listen(8000, () => console.log("listening on port 8000"));

