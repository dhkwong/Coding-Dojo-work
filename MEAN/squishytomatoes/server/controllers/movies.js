const mongoose = require('mongoose');
const Movie = mongoose.model('Movie');
const Review = mongoose.model('Review');
module.exports = {
    all: function (req, res) {//
        Movie.find({})
            .then(movie => res.json(movie))
            .catch(err => res.json(err));
    },
    getOneById: (req, res) => {
        Movie.findById({ _id: req.params.id })
            .then((data) => {
                res.json({ movie: data })
            })
            .catch(err => res.json(err));
    },
    create: (req, res) => {
        const movie = new Movie(req.body);
        console.log("in create controller", req.body)
        movie.save()
            .then((data) => {
                res.json({ newMovie: data });
            })
            .catch(err => {
                const errors = Object.keys(err.errors).map(key => err.errors[key].message);
                res.status(400).json(errors);

            });
    },
    update: (req, res) => {
        const review = new Review(req.body);
        console.log("just created review to push to movie", req.body);
        review.save()
            .then((data) => {
                console.log("review", data)
                console.log("id", req.body)
                Movie.findByIdAndUpdate(req.params.id, { $push: { ratings: data } })
                    .then(data2 => {
                        return res.json(data2)
                    })
                    .catch(err => {
                        console.log(err)
                        const errors = Object.keys(err.errors).map(key => err.errors[key].message);
                        return res.status(400).json(errors);
                    });
            })
            .catch(err => {
                const errors = Object.keys(err.errors).map(key => err.errors[key].message);
                res.status(400).json(errors);

            });
    },
    delete: (req, res) => {
        Movie.findOneAndDelete({ _id: req.params.id })
            .then((data) => {
                console.log("In findOneandDelete controller");
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    },
}
