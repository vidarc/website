const { MongoClient } = require('mongodb')

const MONGO_URL = 'mongodb://localhost:27017'

module.exports = async () => {
  const db = await MongoClient.connect(MONGO_URL)

  return { Links: db.db('hackernews').collection('links') }
}
