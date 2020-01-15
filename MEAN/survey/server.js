const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.listen(8000, () => console.log("listening on port 8000"));
app.use(express.urlencoded({extended: true}));//pulls data from requests in POST
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');



app.post('/results', (req, res) => {
    console.log(req.body.name, req.body.email) 
    content={
        "name":req.body.name,
        "location":req.body.dropdownlocation,
        "language":req.body.dropdownlanguage,
        "comments":req.body.comments

    }
    res.render('results', {'content':content})
});

app.get("/", (req, res) => {
    res.render('index');
})
