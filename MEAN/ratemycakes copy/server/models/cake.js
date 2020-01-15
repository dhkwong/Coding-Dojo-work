const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/placeholder', { useNewUrlParser: true });

const CakeSchema = new mongoose.Schema({
    baker:{type:String, required:true},
    image: { type: String, required: true }, //image is a string of a url
    ratings: [{ rating: Number , description: String}]
}, { timestamps: true });
module.exports = mongoose.model('Cake', CakeSchema);

