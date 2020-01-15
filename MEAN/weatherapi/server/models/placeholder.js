const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/placeholder', {useNewUrlParser: true});
const PlaceholderSchema = new mongoose.Schema({
    title: { type: String, required: true},
    description: { type: String, default: '', },
}, {timestamps: true });
module.exports = mongoose.model('Placeholder', PlaceholderSchema);
