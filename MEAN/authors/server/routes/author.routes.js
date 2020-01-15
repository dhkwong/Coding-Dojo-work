const express = require('express');
const router = express.Router();
const authors = require('./../controllers/authors.js');
//routes from http.service.ts
console.log("in router");
router.get('/', authors.all)
    .get('/:id', authors.getOneById)
    .post('/newauthor', authors.create)
    .put('/:id', authors.update)
    .delete('/:id', authors.delete)

module.exports = router;
