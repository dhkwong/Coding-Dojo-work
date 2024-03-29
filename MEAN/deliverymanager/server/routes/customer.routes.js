const express = require('express');
const router = express.Router();
const customers = require('./../controllers/customers');

router.get('/', customers.all)
    .get('/:id', customers.getOneById)
    .post('/', customers.create)
    .put('/:id', customers.update)
    .delete('/:id', customers.delete)
    .delete('/:id/:oid', customers.deleteorder)
    .put('/:id/edit', customers.updateCustomer)

module.exports = router;
