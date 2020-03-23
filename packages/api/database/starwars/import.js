const admin = require('firebase-admin')

const serviceAccount = require('../../../../keys/firebase.json')

const films = require('./films.json')
const people = require('./people.json')
const planets = require('./planets.json')
const species = require('./species.json')
const starships = require('./starships.json')
const vehicles = require('./vehicles.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://website-b10e5.firebaseio.com',
})

const db = admin.firestore()
const settings = { timestampsInSnapshots: true }
db.settings(settings)

const insert = (type, data) => {
  const doc = db.collection(`starwars_${type}`)

  data.forEach((object) => doc.add(object))
}

insert('films', films)
insert('people', people)
insert('planets', planets)
insert('species', species)
insert('starships', starships)
insert('vehicles', vehicles)

module.exports = {
  insert,
}
