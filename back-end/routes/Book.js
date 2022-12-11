const express = require('express');
const router = express.Router();
const bookDao = require('../dao/BookDao')

router.get('/', (req, res) => {
    bookDao.getUserList().then(function (results) {
        res.send(results);
    })
});

router.post('/', (req, res) => {
    bookDao.findById(req.body.data).then(function (results) {
        console.log(results.length)
        if (results.length > 0) {
            bookDao.updateBook(req.body.data).then(function (result) {
                res.send(result);
            })
        } else {
            bookDao.addBook(req.body.data).then(function (result) {
                res.send(result);
            })
        }
    })

});

router.put('/', (req, res) => {
    res.send("get user list");
});

router.delete('/:id', (req, res) => {
    bookDao.deleteBook(req.params.id).then(function (result) {
        res.send(result);
    })
});

module.exports = router;