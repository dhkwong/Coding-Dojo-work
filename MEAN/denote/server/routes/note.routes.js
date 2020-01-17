const express = require('express');
const router = express.Router();
const notes = require('./../controllers/notes');

// router.get('/', notes.all)
//     .get('/:id', notes.getOneById)
//     .post('/', notes.create)
//     .put('/:id', notes.update)
//     .delete('/:id', notes.delete)

module.exports = router;
