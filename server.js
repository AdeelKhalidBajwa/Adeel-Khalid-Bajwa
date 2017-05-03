var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.sendfile('homepage.html');
})

app.listen(process.env.PORT, function () {
  console.log('listening on port '+process.env.PORT)
})
