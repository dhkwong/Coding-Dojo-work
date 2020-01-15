const mongoose = require('mongoose');
const Author = mongoose.model('Author')
module.exports = {
    // all: async (req, res) => {
    //     try {
    //         const authors = await Author.find();
    //         res.json({authors: authors});
    //     }
    //     catch (err) {
    //         res.json(err);
    //     }
    // },
    all: function (req, res) {//
        Author.find({})
            .then(author => res.json(author))
            .catch(err => res.json(err));
    },
    getOneById: (req, res) => {
        Author.findById({ _id: req.params.id })
            .then((data) => res.json(data)) //originally data was {{author: data}}

            .catch(err => res.json(err));
    },
    create: (req, res) => {
        console.log("In create")
        const author = new Author(req.body);
        author.save()
            .then((data) => {

                res.json({ newAuthor: data });
            })
            .catch(err => {
                const errors = Object.keys(err.errors).map(key => err.errors[key].message);
                res.status(402).json(errors);
            
            });
    },
    update: (req, res) => {
        Author.findByIdAndUpdate(req.params.id,req.body, {runValidators: true, context: 'query'} )
            .then((data) => {
                res.json({ updatedAuthor: data });
            })
            .catch(err => {
                const errors = Object.keys(err.errors).map(key => err.errors[key].message);
                res.status(402).json(errors);
                
            });
    },
    delete: (req, res) => {
        Author.findOneAndDelete({ _id: req.params.id })
            .then((data) => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    },
}
