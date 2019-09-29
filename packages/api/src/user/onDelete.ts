import functions from 'firebase-functions'
import { firestore } from 'firebase-admin'

import logger from '../logger'

async function onDelete(user: functions.auth.UserRecord) {
  logger.log('removing a user from firestore', user.uid)
  const collection = firestore().collection('users')

  await collection.doc(user.uid).delete()

  return null
}

export default onDelete
