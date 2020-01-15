const express = require("express");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hello_mongoose_db', { useNewUrlParser: true });
const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})
// create an object to that contains methods for mongoose to interface with MongoDB
const User = mongoose.model('User', UserSchema);


const app = express();
app.use(express.static(__dirname + "/static"));
app.listen(8000, () => console.log("listening on port 8000"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({ extended: true })); //for post

app.post('/users', (req, res) => {
    const user = new User();
    user.name = req.body.name;
    user.age = req.body.age;
    user.save()
        .then(newUserData => console.log('user created: ', newUserData))
        .catch(err => console.log(err));
        console.log(req.body.name, req.body.age)
    content = {
        "name": req.body.name,
        "age": req.body.age
    }
    res.render('results', { 'content': content })
})

app.get("/", (req, res) => {
    app.get('/', (req, res) => {
        User.find()
            .then(data => res.render("index", { users: data }))
            .catch(err => res.json(err));
    });
    res.render('index');
})
