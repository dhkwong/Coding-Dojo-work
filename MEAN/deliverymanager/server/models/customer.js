const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
    product: { type: String, required: [true, 'Must have a Product name!'], minlength:[3, 'needs more than 3 characters']},
    price:{ type: Number, required:[true, 'Must have a price'], min:[0.01, 'Must be a valid price']},
    location:{type: String, required:[true, 'Must have a Location!'], minlength:[8, 'needs more than 8 characters, too short!']},
    deliverydate:{type:Date, required:[true, 'must have a date']}
})
mongoose.model('Order',OrderSchema);
const CustomerSchema = new mongoose.Schema({
    name: {type: String, required:[true, 'Must have a name!'], minlength:[4, 'needs more than 4 characters']},
    company: {type: String, required:[true, 'Must have a Company!'], minlength:[2, 'needs more than 2 characters']},
    location:{type: String, required:[true, 'Must have a Location!'], minlength:[8, 'needs more than 8 characters, too short!']},
    orders:[OrderSchema]
}, {timestamps: true });
mongoose.model('Customer', CustomerSchema);
