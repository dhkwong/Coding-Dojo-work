const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: { type: String, required:[true, 'Give me a title'], minlength:[4, 'needs more than 3 characters']},
    price:{ type: Number, required:[true, 'Give me a price'], minlength:[3, 'needs more than 3 characters']},
    image:{type:String, required:[true,'Give me an image url'], minlength:[6,'too short, probably not a valid link']}
}, {timestamps: true });
mongoose.model('Product', ProductSchema);
