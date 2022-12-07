const express = require('express');
const router = express.Router();
const accDao = require('../dao/AccDao')

router.get('/', (req, res) => {
    accDao.getUserList().then(function(results){
        res.send(results);
      })
});

router.post('/', (req, res) => {
    res.send("get user list");
});

router.put('/', (req, res) => {
    res.send("get user list");
});

router.delete('/', (req, res) => {
    res.send("get user list");
});

module.exports = router;