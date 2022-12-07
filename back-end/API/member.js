let db = require('../dataBase/index')


exports.get = (req, res) => {
    var sql = 'SELECT * FROM membership_table'
    var value = [req.query.member_id, req.query.member_password, req.query.member_passwordCfrm,req.query.member_name, req.query.member_phone, req.query.member_birthday, req.query.member_address ]

    db.query(sql, value, (err, data) => {

        if(err) {
            return res.send('錯誤:' + err.message)
        }
        res.send(data)
    })
}

exports.nameUpdate = (req, res) => {

    // res.send('okok')
    // console.log('ok')
    var sql = 'update membership_table set member_name = ? where id = ?'
    
    // console.log(req.body.params.member_id)
    // console.log(req.body.params.member_name)
    db.query(sql, )



}   