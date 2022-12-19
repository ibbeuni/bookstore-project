let db = require('../dataBase/index')

exports.get = (req, res) => {
    var sql = 'SELECT * FROM membership_table WHERE member_token = 1234567890'
    db.query(sql, (err, data) => {
        if(err) {
            return res.send('錯誤:' + err.message)
        }
        res.send(data)
    })
}