import DataLoader from 'dataloader'
import { firestore } from 'firebase-admin'
import { DocumentData } from '@google-cloud/firestore'

import logger from '../logger'

async function getAll(collection: string) {
  const results: DocumentData[] = []
  try {
    const snapshots = await firestore().collection(collection).get()

    snapshots.forEach((snapshot) => results.push(snapshot.data()))
  } catch (error) {
    logger.error(`Error in getAll function for type: ${collection}`, error)
  }

  return results
}

async function getOne(collection: string, id: string | number) {
  let result = {}
  try {
    const snapshots = await firestore().collection(collection).where('id', '==', id).limit(1).get()

    snapshots.forEach((snapshot) => {
      result = snapshot.data()
    })
  } catch (error) {
    logger.error(`Error in getOne function for type: ${collection} and id: ${id}`, error)
  }

  return result
}

interface Props {
  id: number
  collection: string
}
const loader = new DataLoader<Props, {}>((keys) => {
  try {
    return Promise.all(
      keys.map((key) =>
        firestore()
          .collection(key.collection)
          .where('id', '==', key.id)
          .limit(1)
          .get()
          .then((docs) => {
            const array: DocumentData[] = []

            docs.forEach((doc) => array.push(doc.data()))

            return array[0]
          })
      )
    )
  } catch (error) {
    logger.error('Error in dataloader', error)
  }

  return Promise.resolve([])
})

const batchLoad = (ids: number[], collection: string) =>
  loader.loadMany(ids.map((id) => ({ id, collection })))

export { getAll, getOne, loader, batchLoad }
