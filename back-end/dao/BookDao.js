let db = require('../dataBase/index')

const getUserList = function () {
    var sql = 'SELECT * FROM book_store.book_table'

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

const findById = function(book){

    var sql = 'SELECT * FROM book_store.book_table WHERE product_id = ?'

    return new Promise(function (resolve, reject) {
        db.query(
            sql,book['product_id'],
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

const addBook = function (book) {

    var sql = 'insert into book_table SET ?'

    return new Promise(function (resolve, reject) {

        db.query(sql, book, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve('success');
            }
        })
    })

};

const updateBook = function(book){
    var sql = 'UPDATE book_table SET ? WHERE product_id = ?' 

    return new Promise(function (resolve, reject) {

        db.query(sql, [book,book['product_id']], (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve('success');
            }
        })
    })
}

const deleteBook = function(bookID){
    var sql = 'DELETE FROM book_table WHERE product_id = ?' 

    return new Promise(function (resolve, reject) {

        db.query(sql, bookID, (err, data) => {
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

module.exports = { getUserList, addBook, updateBook, deleteBook, findById, app2 };