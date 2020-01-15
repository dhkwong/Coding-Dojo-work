const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.listen(8000, () => console.log("listening on port 8000"));

//listens for html from /static folder
app.set('view engine', 'html');
app.set('static', __dirname + '/static');
app.get('/', (request, response) => {
    response.render("/static/index.html");
});

//listens for ejs files from /views folder
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get("/cars", (req, res) => {
    res.render('cars');
})

app.get("/cats", (req, res) => {
    res.render('cats');
})
app.get("/cars/new", (req, res) => {
    res.render('form');
})