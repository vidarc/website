import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'
import colors from 'colors'
import mongoClient from 'mongodb'
import assert from 'assert'
import path from 'path'

const app = express()

app.set('port', process.env.PORT || 3000)
app.use(express.static(__dirname + '/'))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// // Mongo connection
// const mongoURL = 'mongodb://localhost/website'
//
// MongoClient.connect(mongoURL, function(err, db) {
//   assert.equal(null, err)
//   console.log("connected to the mongo server")
//
//   db.close
// })

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

const server = app.listen(app.get('port'), function () {
  const host = server.address().address
  const port = server.address().port
  const message = 'Express server running at: ' + host + ' on port ' + port

  console.log(message.red.underline)
})
