const mongoose = require('mongoose');
const User = mongoose.model('User');
module.exports=function(app){
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


}