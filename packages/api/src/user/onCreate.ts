import functions from 'firebase-functions'
import { firestore } from 'firebase-admin'

import logger from '../logger'

export default function onCreate(user: functions.auth.UserRecord) {
  logger.log('creating a user in firestore', user.uid)
  const collection = firestore().collection('users')

  collection.doc(user.uid).set({
    ...user.toJSON(),
    role: 'user'
  })
}
