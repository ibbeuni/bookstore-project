let express = require('express')
let router = express.Router()
let member = require('./API/member')
let videotable = require('./API/video_table')
let videodetail = require('./API/video_detail')
let eventdetail = require('./API/event_detail')
let booktable = require('./API/book_table')
let productdetail = require('./API/productdetail')
let eventtable = require('./API/event_table')
let salestable = require('./API/sales_table')
let totaltable = require('./API/total_table')
let logintable = require('./API/login_page')
let registertable = require('./API/register_table')
let random_all = require('./API/random_all')
let random_appreciation = require('./API/random_appreciation')
let random_painting = require('./API/random_painting')
let random_art = require('./API/random_art')
let random_photography = require('./API/random_photography')
let shoopingcartable = require('./API/soppingcart_table')
let best_list = require('./API/best_list')
let best_list_appreciation = require('./API/best_list_appreciation')
let best_list_painting = require('./API/best_list_painting')
let best_list_art = require('./API/best_list_art')
let best_list_photography = require('./API/best_list_photography')
const accRoute = require('./routes/Account')



router.use('/acc',accRoute)


router.get('/member', member.get)
router.post('/member/post', member.post)
router.get('/videotable', videotable.get)
router.get('/videodetail:id', videodetail.get)
router.get('/eventdetail:id', eventdetail.get)
router.get('/productdetail:id', productdetail.get)
router.get('/booktable', booktable.get)
router.get('/eventtable', eventtable.get)
router.get('/salestable', salestable.get)
router.get('/totaltable', totaltable.get)
router.get('/logintable', logintable.get)
router.post('/registertable', registertable.post)
router.get('/random_all', random_all.get) 
router.get('/random_appreciation', random_appreciation.get) 
router.get('/random_painting', random_painting.get) 
router.get('/random_art', random_art.get) 
router.get('/random_photography', random_photography.get) 
router.get('/shoppingcartable', shoopingcartable.get)
router.get('/best_list', best_list.get)
router.get('/best_list_appreciation', best_list_appreciation.get)
router.get('/best_list_painting', best_list_painting.get)
router.get('/best_list_art', best_list_art.get)
router.get('/best_list_photography', best_list_photography.get)

module.exports = router