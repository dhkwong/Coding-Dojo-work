const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.listen(8000, () => console.log("listening on port 8000"));
app.use(express.urlencoded({ extended: true }));//pulls data from requests in POST
const session = require('express-session');//session
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
app.use(express.static(__dirname + "/static"));//ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.get("/", (req, res) => {
    if (!req.session.counter) { 
        req.session.counter = 1;
        console.log(req.session.counter)
        var counter = req.session.counter;
    }
    else {
        console.log(counter, req.session.counter)
        req.session.counter += 1;
        counter = req.session.counter;
    }
    res.render('index', { 'counter': counter });
})

app.get("/reset", (req, res) => {
    req.session.counter = 0;
    console.log(req.session.counter);
    res.redirect('/');
})

