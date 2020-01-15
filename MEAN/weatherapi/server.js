const express = require("express");
const mongoose = require('mongoose');
const app = express();
// mongoose.connect('mongodb://localhost/ratemycakes_db', { useNewUrlParser: true });

require('./server/config/mongoose.js');
// const Cake = new mongoose.model('Cake');
// app.set('view engine', 'ejs');
// app.set('views', __dirname + '/client/views');
app.use(express.json());
app.use(express.static(__dirname + '/public/dist/public'));
require('./server/config/routes.js')(app);
app.listen(8000, () => console.log('listening on port 8000'));
