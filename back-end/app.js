let express = require('express')
let app = express()
let cors = require('cors')
let router = require('./router')


app.use(cors());
app.use(router);
app.use(express.static(__dirname + '/public'));
app.listen(3000, () => {
    console.log('server is running');
});