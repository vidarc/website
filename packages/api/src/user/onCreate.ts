import functions from 'firebase-functions'
import { firestore } from 'firebase-admin'

import logger from '../logger'

export default function onCreate(user: functions.auth.UserRecord) {
  logger.log('creating a user in firestore', user.uid)
  const collection = firestore().collection('users')

  const { displayName, email, uid } = user

  collection.doc(uid).set({
    displayName,
    email,
    role: 'user'
  })
}
