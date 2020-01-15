
const mongoose = require('mongoose');

const User = mongoose.model('User');
var users = require('/Users/darylkwong/Desktop/Coding-Dojo/CodingDojo Practice/MEAN/controllers/server/controller/users.js');

module.exports=function(app){
    
    app.post('/usersave', (req, res) => {
        users.save(req,res);
    })
    app.get('/result', (req, res)=>{
        users.result(req,res);
    })
    
    app.get("/", (req, res) => {
        users.index(req,res);
    })


}