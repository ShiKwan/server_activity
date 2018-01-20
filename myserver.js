var http = require('http')
var serverOne = http.createServer(function (req, res) {
  res.end('Server One running! Path hit : ' + req.url + '<h1> Hello World!</h1>')
})

var serverTwo = http.createServer(function (req, res) {
  res.end('Server Two running! Path hit : ' + req.url + '<h1> Welcome to hell!</h1>')
})

serverOne.listen(7000, function () {
  console.log('Server is running!')
})

serverTwo.listen(7500, function () {
  console.log('Server two is running on port 7500! ')
})
