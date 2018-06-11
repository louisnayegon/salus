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

app.get('/services/:id', function (req, res) {
  var service = config.services[req.params.id]
  var tar = require("tar")
  const path = require('path');
  var filename = path.join(__dirname, service.filename)
  tar.c(
    {
      gzip: "zf",
      file: filename,
      sync: true
    },
    service.backups
  )
  res.download(filename, service.filename)
})

var server = app.listen(port, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})
