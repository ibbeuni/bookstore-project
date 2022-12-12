let db = require('../dataBase/index')

const getUserList = function () {
    var sql = 'SELECT * FROM book_store.membership_table'

    return new Promise(function (resolve, reject) {
        db.query(
            sql,
            function (err, rows) {
                if (rows === undefined) {
                    reject(new Error("Error rows is undefined"));
                } else {
                    resolve(rows);

                }
            }
        )
    })

};

const findById = function(member){

    var sql = 'SELECT * FROM book_store.membership_table WHERE member_id = ?'

    return new Promise(function (resolve, reject) {
        db.query(
            sql,member['member_id'],
            function (err, rows) {
                if (err) {
                    reject(new Error("error"));
                } else {
                    resolve(rows);
                }
            }
        )
    })

};

const addMember = function (member) {

    var sql = 'insert into membership_table SET ?'

    return new Promise(function (resolve, reject) {

        db.query(sql, member, (err, data) => {
            if (err) {
                reject(new Error("error"));
            } else {
                resolve('success');
            }
        })
    })

};

const updateMember = function(member){
    var sql = 'UPDATE membership_table SET ? WHERE member_id = ?' 

    return new Promise(function (resolve, reject) {

        db.query(sql, [member,member['member_id']], (err, data) => {
            if (err) {
                reject(new Error("error"));
            } else {
                resolve('success');
            }
        })
    })
}

const deleteMember = function(memberID){
    var sql = 'DELETE FROM membership_table WHERE member_id = ?' 

    return new Promise(function (resolve, reject) {

        db.query(sql, memberID, (err, data) => {
            if (err) {
                reject(new Error("error"));
            } else {
                resolve('success');
            }
        })
    })

}

const app2 = () => {
    console.log('app2');
};

module.exports = { getUserList, addMember, updateMember, deleteMember, findById, app2 };