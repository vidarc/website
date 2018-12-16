import DataLoader from 'dataloader'
import admin from 'firebase-admin'

admin.initializeApp()
const firestore = admin.firestore()
firestore.settings({ timestampsInSnapshots: true })

async function getAll(type: string | number) {
  const results = []
  try {
    const snapshots = await firestore.collection(`starwars_${type}`).get()

    snapshots.forEach(snapshot => results.push(snapshot.data()))
  } catch (error) {
    console.error(`Error in getAll function for type: ${type}`, error)
  } finally {
    return results
  }
}

async function getOne(type: string | number, id: string | number) {
  let result = {}
  try {
    const snapshots = await firestore
      .collection(`starwars_${type}`)
      .where('id', '==', id)
      .limit(1)
      .get()

    snapshots.forEach(snapshot => (result = snapshot.data()))
  } catch (error) {
    console.error(
      `Error in getOne function for type: ${type} and id: ${id}`,
      error
    )
  } finally {
    return result
  }
}

interface Props {
  id: number
  type: string
}
const loader = new DataLoader<Props, {}>(keys => {
  try {
    return Promise.all(
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
  } catch (error) {
    console.error('Error in dataloader', error)
  }
})

const batchLoad = (ids: number[], type: string) =>
  loader.loadMany(ids.map(id => ({ id, type })))

export { getAll, getOne, loader, batchLoad }
