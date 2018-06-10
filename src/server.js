'use strict'

var config = require('./conf/default.json')
try {
  var local = require('./conf/local.json')
  config = Object.assign({}, config, local)
}
catch (e) {
}

var express = require("express")
var port = config.port
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World\n')
})

app.get('/services', function (req, res) {
  res.send(config.services)
})

app.get('/services/[^/]+', function (req, res) {
  res.send('get service\n' + req.path)
})

var server = app.listen(port, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})
