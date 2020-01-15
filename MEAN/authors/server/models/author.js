const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const AuthorSchema = new mongoose.Schema({
    name: { type: String, required:[true, 'Give me a title'], minlength:[3, 'needs more than 3 characters']}
}, {timestamps: true });
AuthorSchema.plugin(uniqueValidator);
mongoose.model('Author', AuthorSchema);
