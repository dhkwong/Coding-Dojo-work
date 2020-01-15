const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.listen(8000, () => console.log("listening on port 8000"));
app.use(express.urlencoded({extended: true}));//pulls data from requests in POST
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get("/cuddles", (req, res) => {
    content = {

        "name": "cuddles",
        "food": "donuts",
        "image": "/cat.png",
        "age" : 3,
        "sleepingspots": ["under the bed", "in a sunbeam"]
    }
    res.render('cuddles', {"content":content});
})

app.get("/mochi", (req, res) => { 
    content = {
        "name": "mochi",
        "food": "donuts",
        "image":"/cat1.png",
        "age" : 5,
        "sleepingspots": ["under the bed", "in TWO sunbeams"]
    }
    res.render('cuddles', {"content":content});
})
app.post('/users', (req, res) => {
    console.log(req.body.name, req.body.email) 
    res.redirect('/')
});

app.get("/", (req, res) => {
    res.render('cats');
})
