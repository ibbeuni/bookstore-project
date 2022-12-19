let db = require('../dataBase/index')

exports.get = (req, res) => {
    var sql = 'SELECT * FROM membership_table ORDER BY member_name = ? AND member_token = ?'
    db.query(sql, (err, data) => {
        if(err) {
            return res.send('錯誤:' + err.message)
        }
        res.send(data)
    })
}