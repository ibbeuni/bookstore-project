let mysql = require('mysql')


let conn = mysql.createConnection({
    host :'127.0.0.1',
    user :'root',
    password :'root',
    database : 'book_store'
})

conn.connect();


exports.get = (req, res) => {
    // var sql = 'SELECT member_id, member_name, member_phone, member_address FROM membership_table WHERE member_token = ?'
    var sql = 'SELECT * FROM membership_table'
    // var value = [req.body.member_id, req.body.member_name, req.body. member_phone, req.body. member_address]

    conn.query(sql, (err, data) => {

        if(err) {
            return res.send('錯誤:' + err.message)
        }
        res.send(data)
    })
}