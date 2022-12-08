let db = require('../dataBase/index')


exports.get = (req, res) => {
    var sql = 'SELECT * FROM login_table'
    var value = [req.query.member_id, req.query.member_password]

    db.query(sql, value, (err, data) => {

        if(err) {
            return res.send('錯誤:' + err.message)
        }
        res.send(data)
    })
}

exports.post = (req, res) => {

    res.send(req.body)
    console.log('ok')
    var sql = 'insert into membership_table (member_passwordCfrm,member_name,member_phone,member_birthday,member_address) value (?,?,?,?,?)'
    var input_value = [req.body.params.member_passwordCfrm, req.body.params.member_name, req.body.params.member_phone,req.body.params.member_birthday,req.body.params.member_address ]
    console.log(req.body.params.member_passwordCfrm)
    db.query(sql, input_value , (err, data) => {
        if(err){
            return res.send({
                status:400,
                message:'fail'
            })
        }res.send({
            status:200,
            message:'ok'
        })
    })



}   