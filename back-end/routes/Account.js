const express = require('express');
const router = express.Router();
const accDao = require('../dao/AccDao')

router.get('/', (req, res) => {
    accDao.getUserList().then(function (results) {
        res.send(results);
    })
});

router.post('/', (req, res) => {
    accDao.findById(req.body.data).then(function (results) {
        console.log(results.length)
        if (results.length > 0) {
            accDao.updateMember(req.body.data).then(function (result) {
                res.send(result);
            })
        } else {
            accDao.addMember(req.body.data).then(function (result) {
                res.send(result);
            })
        }
    })

});

router.put('/', (req, res) => {
    res.send("get user list");
});

router.delete('/:id', (req, res) => {
    accDao.deleteMember(req.params.id).then(function (result) {
        res.send(result);
    })
});

module.exports = router;