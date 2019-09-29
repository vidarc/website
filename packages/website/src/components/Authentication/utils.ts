/* eslint-disable import/prefer-default-export */
import firebase from 'firebase/app'

import { User } from '../../context/User'

export async function checkDatabase({ uid, displayName }: firebase.User): Promise<User> {
  const collection = firebase.firestore().collection('users')
  const user = await collection.doc(uid).get()

  if (user.exists) {
    return user.data() as User
  }

  return { displayName, role: 'user' }
}
