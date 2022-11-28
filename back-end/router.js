let express = require('express')
let router = express.Router()
let member = require('./API/member')


router.get('/member', member.get)


module.exports = router