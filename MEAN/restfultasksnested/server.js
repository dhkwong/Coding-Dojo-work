const express = require("express");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restfultaskapi_db', { useNewUrlParser: true });

require('./server/config/mongoose.js');
const Task = new mongoose.model('Task');

const app = express();

app.use(express.static(__dirname + "/public/dist/public"));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/client/views');
// app.use(express.urlencoded({ extended: true })); //for post
app.use(express.json());
require('./server/config/routes.js')(app);

app.listen(8000, () => console.log("listening on port 8000"));