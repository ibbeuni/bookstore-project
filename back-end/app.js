let express = require('express')
let app = express()
let cors = require('cors')
let router = require('./router')
let bodyparser = require('body-parser')




app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
app.use(cors({}));
app.use(router);

app.use(express.static(__dirname + '/public'));
app.listen(3000, () => {
    console.log('server is running');
});

// 政廷測試區



// 政廷測試區
