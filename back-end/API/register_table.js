let mysql = require('mysql')
let conn = mysql.createConnection({
    host :'127.0.0.1',
    user :'root',
    password :'root',
    database : 'book_store'
})

conn.connect();

exports.post = (req, res) => {

    let sql2 = "INSERT INTO membership_table (member_id, member_password, member_name, member_phone, member_birthday, member_address) VALUES (?,?,?,?,?,?)"
    let val = [req.body.params.id, req.body.params.password, req.body.params.name, req.body.params.phone, req.body.params.birthday, req.body.params.address]

    conn.query(sql2, val, (err, data) =>{

        console.log(req.body.params.member_id) 
        // console.log(req.body.params.member_password) 
        // res.send('ok')

        if(err){
            return res.send({
                status:400,
                message:err,
            })
        }res.send({
            status:200,
            message:'register succeed',
        })
    })

    //查詢用帳號是否有重複登錄
    // const sql1 = 'select * from login_table where ID = ?'
    // conn.query(sql1, [req.body.params.ID], (err,data)=>{
    //     if(err){
    //         return res.send({
    //             status:400,
    //             message:'error'
    //         })
    //     }
    //     if(data.length > 0){

    //         return res.send({
    //             status:202,
    //             message:'帳號已存在'

    //         })
    //     }else{
    //         //開始註冊
    //         let inner_value = [req.body.params.ID, req.body.params.PASSWORD]
    //         conn.query(sql2,inner_value, (err,data)=>{
    //             if(err){
    //                 return res.send({
    //                     status:400,
    //                     message:'register fail',
    //                 })
    //             }
    //             res.send({
    //                 status:200,
    //                 message:'register succeed'
    //             })
    //         })
    //     }
    // })

}