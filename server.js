var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io').listen(8080);
var bodyParser = require('body-parser');

app.listen(8000);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

var gSocket = null;
app.all('*', function (req, res) {
    if (gSocket) {
        console.log("Proxying request to ", req.url, " body: ", req.body);
        gSocket.emit("data", {method: req.method, path: req.path, params: req.params, body: JSON.stringify(req.body)});
    }
    res.sendStatus(200);
});

var conn = io.on('connection', function (socket) {
    gSocket = socket;
    console.log("someone connected");
});

