const express = require("express");
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://localhost/loginreg_db', { useNewUrlParser: true });

const UserSchema = new mongoose.Schema({
    firstname: { type: String, required: [true, "User must have a first name"] }, //match()
    lastname: { type: String, required: [true, "User must have a last name"] },
    email: { type: String, required: [true, "User must have email"] },
    birthday: { type: Date, required: [true, "User must have birthday"] },
    password: { type: String, required: [true, "user must have a password"] }
}, { timestamps: true })


// create an object to that contains methods for mongoose to interface with MongoDB
const User = mongoose.model('User', UserSchema);



const app = express();
app.use(express.static(__dirname + "/static"));
app.listen(8000, () => console.log("listening on port 8000"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({ extended: true })); //for post

const session = require('express-session');//starts session
app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: 'keyboard cat', //secret key
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

const flash = require('express-flash');//messages
app.use(flash());

// app.get('/login', (req, res) => {
    
//     try {
//         res.render('login')

//     } catch (error) {
//         res.redirect('/');
//     }
// });

app.get('/', (req, res) => {
    res.render('login')
});

app.post('/register', (req, res) => {
    User.find({ email: req.body.email }, (err, data) => {
        if (err) {
            console.log("email exists");
            res.redirect('/')
        } else {
            console.log(data)
            if (data.length != 0) {
                console.log("email exists");
                res.redirect('/')
            } else {
                bcrypt.hash(req.body.password, 10)
                    .then(hashedpassword => {
                        console.log(hashedpassword)
                        req.body.password = hashedpassword
                        delete req.body.confirm_password
                        User.create(req.body, (err2, data2) => {
                            if (err2) {
                                console.log("user creation failed", err2);
                                res.redirect('/')
                            } else {
                                res.redirect('/index')
                            }
                        })
                    })
                    .catch(err3 => {
                        console.log("bcrypt error", err3)
                        res.redirect('/')
                    })

            }
        }
    })

})


app.post('/login', (req, res) => {
    User.findOne({ email: req.body.login_email })
        .then(user => {
            console.log("userdata:" + user)

            return bcrypt.compare(req.body.login_password, user.password)
                .then(result => {
                    //add to session and login
                    console.log(result)
                    req.session.uid = user.id
                    console.log("sess id:" + req.session.uid)
                    return res.redirect('/index')
                })
                .catch(err => {
                    console.log(req.body.login_password, user.password)
                    console.log("error in login", err);
                    for (var key in err.errors) {
                        req.flash('unable to login', err.errors[key].message);
                    }
                    res.redirect('/');
                })

        })
        .catch(err => {
            console.log("We have an error!", err);
            for (var key in err.errors) {
                req.flash('registration', err.errors[key].message);
            }
            res.redirect('/');
        })
})

app.get('/index', (req, res) => {
    User.findOne({ _id: req.session.uid })
        .then(user => {
            console.log(user, req.session.uid);
            return res.render('index', { user: user })
        })
        .catch(err => {
            console.log("error pulling user for login", err);
            // adjust the code below as needed to create a flash message with the tag and content you would like
            for (var key in err.errors) {
                req.flash('login error', err.errors[key].message);
            }
            res.redirect('/');
        })

});
app.get('/logout', (req, res) => {
    req.session.uid = null;
    res.redirect('/');
})

// app.post('/sessions', (req, res) => {
//     console.log(" req.body: ", req.body);
//     User.findOne({ email: req.body.email, password: req.body.password }, (err, user) => {
//         if (err) {
//             // Code...
//         }
//         else {
//             // Code...
//             req.session.user_id = user._id;
//             req.session.email = user.email;
//         }
//     })
// })

// app.post('/addpost/', (req, res) => {
//     const post = new Post();
//     post.name = req.body.postname;
//     post.content = req.body.postcomment
//     post.save()
//         .then(newPostData => console.log('Post created: ', newPostData))
//         .catch(err => console.log(err));
//     res.redirect('/') //saves and goes to home

// });

// app.post('/addcomment/:id', (req, res) => {
//     var comment = new Comment(); //maybe save comment first then update?
//     // const postdata = req.body;
//     // post.create(postdata)
//     var id = req.param('id');
//     comment.name = req.body.commentname;
//     comment.content = req.body.commentcomment;
//     comment.save()
//         .then(savedata => Post.updateOne({ _id: id }, { $push: { comments:  savedata } })
//             .then(updated => { res.redirect('/') })
//             .catch(err => res.json(err))
//         )
//         .catch(err => res.json(err))


// });


