var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


const User = mongoose.model('user', {username: String, password: String}, 'user');   // 在定义schema的时候，如果不加第二个参数，那么即使你在model中定义了表名为‘user’，mongoose会智能的在表名末尾添加一个's'，那么你查询的表就会变成‘users’表，所以，为了安全，务必加上{collection:'table_name'}

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('./dist'));

app.get('/', function (req, res) {
    res.sendfile('./dist/index.html');
});

app.post('/login', function(req, res){
    let username = req.body.username;
    let password = req.body.password;
    User.findOne({'username': username}, function(error, adventure) {
        if(adventure.password == password) {
            res.send("success");
        } else {
            res.send("fail");
        }
    })
})

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
    initServer();
});


function initServer() {
    mongoose.connect('mongodb://localhost:27017/user', { useNewUrlParser: true });
    User.countDocuments({}, function(error, count) {
        if(count == 0) {
            let admin = new User({"username": "admin", "password": "admin123"});
            // admin.save().then( () => console.log("user"));
            admin.save();
        }
    });

}
