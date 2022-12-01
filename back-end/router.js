let express = require('express')
let router = express.Router()
let member = require('./API/member')
let videopage = require('./API/VideoPage')


router.get('/member', member.get)
router.get('/videopage', videopage.get)


module.exports = router