let mysql = require('mysql')


let conn = mysql.createConnection({
    host :'127.0.0.1',
    user :'root',
    password :'root',
    database : 'book_store'
})

conn.connect();


exports.get = (req, res) => {
    var sql = 'SELECT * FROM cart_table'
    conn.query(sql, (err, data) => {
        if(err) {
            return res.send('錯誤:' + err.message)
        }
        res.send(data)
    })
}

exports.post = (req, res) => { 
    let sql2 = 'insert into cart_table (product_id, img_cover, product_name, product_price, amount) value (?,?,?,?,?)'
    var input_value = [ req.body.params.product_id, req.body.params.img_cover, req.body.params.product_name, req.body.params.product_price,req.body.params.amount  ]

    console.log(req.body.params.product_id)
    console.log(req.body.params.img_cover)
    console.log(req.body.params.birthday)
    console.log(req.body.params.address)

    conn.query(sql2, input_value , (err, data) => {
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
exports.delete = (req, res) =>{

    let sql3 = "DELETE FROM cart_table WHERE product_id=?"

    conn.query(sql3, [])
}


