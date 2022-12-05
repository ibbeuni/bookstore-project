let express = require('express')
let router = express.Router()
let member = require('./API/member')
let videotable = require('./API/video_table')
let booktable = require('./API/book_table')
let eventtable = require('./API/event_table')
let salestable = require('./API/sales_table')
let totaltable = require('./API/total_table')
let logintable = require('./API/login_page')
let registertable = require('./API/register_table')


router.get('/member', member.get)
router.get('/videotable', videotable.get)
router.get('/booktable', booktable.get)
router.get('/eventtable', eventtable.get)
router.get('/salestable', salestable.get)
router.get('/totaltable', totaltable.get)
router.get('/logintable', logintable.get)
router.post('/registertable', registertable.post)


module.exports = router