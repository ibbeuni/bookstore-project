let mysql = require('mysql')


let conn = mysql.createConnection({
    host :'127.0.0.1',
    user :'root',
    password :'root',
    database : 'book_store'
})

conn.connect();


exports.get = (req, res) => {
    var sql = 'SELECT * FROM membership_table'
    var value = [req.query.member_id, req.query.member_password]

    conn.query(sql, value, (err, data) => {

        if(err) {
            return res.send('錯誤:' + err.message)
        }
        res.send(data)
    })
}

exports.post = (req, res) => {

    // res.send(req.body)
    // console.log('ok')
    
    // "UPDATE Customers SET PostalCode = 00000 WHERE Country = 'Mexico"
    // "UPDATE Customers SET ContactName = 'Alfred Schmidt', City = 'Frankfurt' WHERE CustomerID = 1;"
    // 'UPDATE membership_table set member_name = "", member_phone = "", member_birthday = "", member_address = "" where member_id = 456@gmail.com'
    var sql1 = 'update membership_table set member_name=?, member_phone=?, member_birthday=?, member_address=? where member_id= 456@gmail.com'
    var input_value = [ req.body.params.name, req.body.params.phone, req.body.params.birthday, req.body.params.address ]

    console.log(req.body.params.name)
    console.log(req.body.params.phone)
    console.log(req.body.params.birthday)
    console.log(req.body.params.address)

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