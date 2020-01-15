const express = require("express");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quotingdojo_db', { useNewUrlParser: true });
const UserSchema = new mongoose.Schema({
    name: {type:String, required:true},
    quote: {type:String, required:true},
    date: { type: Date, default: Date.now }
})
// create an object to that contains methods for mongoose to interface with MongoDB
const User = mongoose.model('User', UserSchema);

const app = express();
app.use(express.static(__dirname + "/static"));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({ extended: true })); //for post

require('./server/config/routes.js')(app);

app.listen(8000, () => console.log("listening on port 8000"));