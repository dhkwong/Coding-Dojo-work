const mongoose = require('mongoose');
const RatingsSchema = new mongoose.Schema({
    name: {type: String, required:[true, 'Give me a title'], minlength:[4, 'needs more than 4 characters']},
    rating:{type:Number, required:[true, 'Give me a rating!'], min:[1, 'Give me a rating!']},
    description:{type: String, required:[true, 'Give me a description!'], minlength:[4, 'needs more than 3 characters']}
})
mongoose.model('Review', RatingsSchema)
const MovieSchema = new mongoose.Schema({
    title: {type: String, required:[true, 'Give me a title'], minlength:[4, 'needs more than 4 characters']},
    name: {type: String, required:[true, 'Give me a name!'], minlength:[4, 'needs more than 4 characters']},
    rating: {type:Number, required:[true, 'Give me a rating!'], min:[1, 'Give me a rating!']},
    description: {type: String, required:[true, 'Give me a description!'], minlength:[4, 'needs more than 3 characters']},
    ratings: [RatingsSchema]
}, { timestamps: true });
mongoose.model('Movie', MovieSchema);
