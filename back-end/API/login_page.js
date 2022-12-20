// let mysql = require('mysql')
// let conn = mysql.createConnection({
//     host :'127.0.0.1',
//     user :'root',
//     password :'root',
//     database : 'book_store'
// })

// conn.connect();

let db = require('../dataBase/index')

exports.post = (req, res) =>{
    // res.send('ok')
    console.log(req.body)
var sql = 'select * from membership_table where member_id = ? and member_password = ?';
var sql2 = 'update membership_table set member_token =? where member_id=?'
const token = Math.floor(Math.random()*10000000000000000000) 
// console.log(token)

 db.query(sql, [req.body.member_id, req.body.member_password], function(err, data) {
  
        if(err) {
            console.log(err)
            return res.send({
                status:404,
                message:'login fail'
            })
        }
        if(data.length > 0){
            db.query(sql2, [token, req.body.member_id], err=>{
                console.log(err)
                res.send({
                status:200,
                message:'login succeed',
                token: token
            })})
           
            
        }else{
            console.log( err)
            res.send({
                status:202,
                message:'something might be wrong'
            })
        }
    })

    

}