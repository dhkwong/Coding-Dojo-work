const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: { type: String, required:[true, 'Give me a title'], minlength:[4, 'needs more than 3 characters']},
    price:{ type: Number, required:[true, 'Give me a price'], min: [0.01, 'Must have a price']},
    image:{type:String, required:[true,'Give me an image url'], minlength:[6,'too short, probably not a valid link']}
}, {timestamps: true });
mongoose.model('Product', ProductSchema);
