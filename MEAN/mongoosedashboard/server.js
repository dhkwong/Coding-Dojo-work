const express = require("express");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoosedashboard_db', { useNewUrlParser: true });
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },

})
// create an object to that contains methods for mongoose to interface with MongoDB
const Otter = mongoose.model('Otter', UserSchema);

const app = express();
app.use(express.static(__dirname + "/static"));
app.listen(8000, () => console.log("listening on port 8000"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({ extended: true })); //for post

app.get('/otters/new', (req, res) => {
    res.render("newotter") //renders new otter making page, then redirects below to /otters to save
});

app.post('/otters', (req, res) => {
    const otter = new Otter();
    otter.name = req.body.name;
    otter.save()
        .then(newOtterData => console.log('otter created: ', newOtterData))
        .catch(err => console.log(err));
    res.redirect('/') //saves and goes to home
})

app.get('/otter/:id', (req, res) => {
    var id = req.param("id");
    Otter.find({ _id: id })
        .then(data => { res.render('results', { 'otter': data }) })
        .catch(err => res.json(err));
});
app.get('/otter/edit/:id', (req, res) => { //gets an otter by id to edit, and renders edit page
    var id = req.param("id");
    Otter.find({ _id: id })
        .then(data => { res.render('otteredit', { 'otter': data }) })
        .catch(err => res.json(err));
});

app.post('/otter/:id', (req, res) => { //edits the otter in question
    var id = req.param("id");
    Otter.update({ _id: id }, { name: req.body.name })
        .then(data=>{console.log(data); return Promise.resolve(data)})//promise chaining
        .then(data => { res.redirect('/') })
        .catch(err => res.json(err));
});



app.get('/', (req, res) => {
    Otter.find()
        .then(data => {
            console.log("hi"),
                res.render("index", { otters: data })
        })
        .catch(err => res.json(err));
});

app.get('/otter/destroy/:id', (req, res) => {
    let id = req.param("id")
    Otter.remove({ _id: id })
        .then(data => { res.redirect('/') })
        .catch(err => res.json(err));

})

