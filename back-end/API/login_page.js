let mysql = require('mysql')
let conn = mysql.createConnection({
    host :'127.0.0.1',
    user :'root',
    password :'root',
    database : 'book_store'
})

conn.connect();

// let db = require('../dataBase/index')

exports.get = (req, res) =>{
    // res.send('ok')
var sql = 'select * from login_table where ID=? and PASSWORD=?';

 conn.query(sql, [req.query.ID, req.query.PASSWORD], (err, data) => {
    // console.log(req.qurey.id)
        if(err) {
            return res.send({
                status:404,
                message:'login fail'
            })
        }
        if(data.length > 0){
            res.send({
                status:200,
                message:'login succeed'
            })
        }else{
            res.send({
                status:202,
                message:'something might be wrong'
            })
        }
    })
}