let db = require('../dataBase/index')

exports.get = (req, res) => {
    var sql = 'SELECT * FROM book_table WHERE product_id BETWEEN 101 AND 125 ORDER BY Rand() Limit 10'
    db.query(sql, (err, data) => {
        if(err) {
            return res.send('錯誤:' + err.message)
        }
        res.send(data)
    })
}