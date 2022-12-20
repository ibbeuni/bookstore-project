let mysql = require('mysql')


let conn = mysql.createConnection({
    host :'127.0.0.1',
    user :'root',
    password :'root',
    database : 'book_store'
})

conn.connect();


exports.post = (req, res) => {
    var sql = 'SELECT * FROM membership_table where member_token=?'
    
    conn.query(sql, [req.body.token] ,(err, data) => {

        if(err) {
            return res.send('錯誤:' + err.message)
        }
        res.send(data)
    })
}

exports.post = (req, res) => {
    console.log(res.body)

    var sql1 = 'update membership_table set member_name =?, member_phone=?, member_birthday=?, member_address=? where member_token=?'
    var input_value = [ req.body.member_name, req.body.member_phone, req.body.member_birthday, req.body.member_address ]

    conn.query(sql1, input_value , (err, data) => {
        if(err){
            console.log(err)
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