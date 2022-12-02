let express = require('express')
let router = express.Router()
let member = require('./API/member')
let videotable = require('./API/video_table')
let booktable = require('./API/book_table')


router.get('/member', member.get)
router.get('/videotable', videotable.get)
router.get('/booktable', booktable.get)


module.exports = router