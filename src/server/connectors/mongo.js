const { MongoClient } = require('mongodb')

const MONGO_URL = 'mongodb://localhost:27017'

module.exports = async () => {
  const client = await MongoClient.connect(MONGO_URL)

  return { Links: client.db('hackernews').collection('links'), Users: client.db('hackernews').collection('users') }
}
