var express = require('express')
var app = express()
var path = require('path');

// app.use(express.static());

// app.use('/', express.static(path.join(__dirname + './')));

app.use(express.static(path.join(__dirname, 'public')))

// app.use(express.static(path.join(__dirname,"./")));

app.get("/", function(req, res)
{
    res.sendFile("homepage.html", {"root": __dirname+"/public"});
});
// app.get('/', function (req, res) {
//   res.sendfile('homepage.html');
// })

app.listen(process.env.PORT||3000, function () {
  console.log('listening on port '+process.env.PORT)
})
