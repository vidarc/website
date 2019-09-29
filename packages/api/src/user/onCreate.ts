import functions from 'firebase-functions'
import { firestore } from 'firebase-admin'

import logger from '../logger'

async function onCreate(user: functions.auth.UserRecord) {
  logger.log('creating a user in firestore', user.uid)
  const collection = firestore().collection('users')

  const { displayName, email, uid } = user

  await collection.doc(uid).set({
    displayName,
    email,
    role: 'user'
  })

  return null
}

export default onCreate
