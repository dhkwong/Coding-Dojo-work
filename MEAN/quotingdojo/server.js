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
app.listen(8000, () => console.log("listening on port 8000"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({ extended: true })); //for post

app.post('/usersave', (req, res) => {
    const user = new User();
    user.name = req.body.name;
    user.quote = req.body.quote;
    user.save()
        .then(newUserData => console.log('user created: ', newUserData))
        .catch(err => console.log(err));
    result = User.find()
    console.log(result)
    res.redirect('/result')
})
app.get('/result', (req, res)=>{
    User.find({}, function(err, results) {
        
        res.render('results', { 'results':results  });

    });
})

app.get("/", (req, res) => {
    app.get('/', (req, res) => {
        User.find()
            .then(data => res.render("index", { users: data }))
            .catch(err => res.json(err));
    });
    res.render('index');
})
