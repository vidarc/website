'use strict'

let express = require('express')

let app = express()

app.use(express.static('build'))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/build/index.html')
})

let server = app.listen(3000, function() {
  let host = server.address().address
  let port = server.address().port

  console.log('The Express server is running at: ' + host + ':' + port)
})
