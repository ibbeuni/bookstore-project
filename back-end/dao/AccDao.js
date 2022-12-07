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

const app2 = () => {
    console.log('app2');
};

module.exports = { getUserList, app2 };