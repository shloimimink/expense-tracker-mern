const express = require('express');
const router = express.Router();
const {getTransactions, AddTransaction, DeleteTransaction} = require('../controllers/transactions');

router.route('/')
    .get(getTransactions)
    .post(AddTransaction);

router.route('/:id')
    .delete(DeleteTransaction);

module.exports = router;
