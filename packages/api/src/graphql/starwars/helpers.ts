import DataLoader from 'dataloader'
import admin, { ServiceAccount } from 'firebase-admin'

import cert from '../../../../../keys/server.json'

admin.initializeApp({
  credential: admin.credential.cert(cert as ServiceAccount),
  databaseURL: 'https://server-b6f04.firebaseio.com'
})
const firestore = admin.firestore()
firestore.settings({ timestampsInSnapshots: true })

async function getAll(type: string | number) {
  const snapshots = await firestore.collection(`starwars_${type}`).get()

  const results = []
  snapshots.forEach(snapshot => results.push(snapshot.data()))

  return results
}

async function getOne(type: string | number, id: string | number) {
  const snapshots = await firestore
    .collection(`starwars_${type}`)
    .where('id', '==', id)
    .get()

  let result = {}
  snapshots.forEach(snapshot => (result = snapshot.data()))

  return result
}

interface Props {
  id: number
  type: string
}
const loader = new DataLoader<Props, {}>(keys =>
  Promise.all(
    keys.map(key =>
      firestore
        .collection(`starwars_${key.type}`)
        .where('id', '==', key.id)
        .limit(1)
        .get()
        .then(docs => {
          const array = []

          docs.forEach(doc => array.push(doc.data()))

          return array[0]
        })
    )
  )
)

const batchLoad = (ids: number[], type: string) =>
  loader.loadMany(ids.map(id => ({ id, type })))

export { getAll, getOne, loader, batchLoad }
