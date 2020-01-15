require('./server/config/database');
const express = require('express');
const app = express();
const session = require('express-session');
const path = require('path');
const bp = require('body-parser');

app.use(express.urlencoded({extended: true}));
app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())
app.use((request, response, next)=>{
    console.log("request.url",request.url);
    next();
});
app.use(express.static( path.join(__dirname, './public/dist/public')));
app.use(session({
    secret: '701ka2dnj3v6zy46',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
const router = require('./server/routes');
app.use(router);

app.listen(8000, () => console.log('listening on port 8000'));
