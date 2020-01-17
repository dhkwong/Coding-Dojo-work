// TODO - replace with sql logic instead of mongoose
// const mongoose = require('mongoose');
// const Note = mongoose.model('Note')
// module.exports = {
//     all: async (req, res) => {
//         try {
//             const notes = await Note.find();
//             res.json({notes: notes});
//         }
//         catch (err) {
//             res.json(err);
//         }
//     },
//     getOneById: (req, res) => {
//         Note.findById({ _id : req.params.id })
//             .then((data) => {
//                 res.json({note: data})
//             })
//             .catch(err => res.json(err));
//     },
//     create: (req, res) => {
//         const note = new Note(req.body);
//         note.save()
//             .then((data) => {
//                 res.json({newNote: data});
//             })
//             .catch(err => res.json(err));
//     },
//     update: (req, res) => {
//         Note.updateOne({ _id : req.params.id }, req.body)
//             .then((data) => {
//                 res.json({updatedNote: data});
//             })
//             .catch(err => res.json(err));
//     },
//     delete: (req, res) => {
//         Note.findOneAndDelete({ _id : req.params.id })
//             .then((data) => {
//                 res.json(data);
//             })
//             .catch(err => {
//                 res.json(err);
//             });
//     },
// }
