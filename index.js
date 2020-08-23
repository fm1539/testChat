const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');

const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.render('index');
});

io.on('connection', socket => {
    socket.on('chat-message', function(msg) {
        io.emit('chat-message', msg)
    });
});

app.get('/chat', function(req, res) {
    res.render("chat")
});


http.listen(3000, function() {
    console.log("socket running on 3000");
});
