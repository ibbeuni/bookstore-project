let db = require('../dataBase/index')


exports.get = (req, res) => {
    var sql = 'SELECT * FROM video_table where product_id = ?'
    db.query(sql,[req.params.id], (err, data) => {
        if(err) {
            return res.send('錯誤:' + err.message)
        }
        res.send(data)
    })
    // res.send(req.params.id)
}