/* eslint-disable import/prefer-default-export */
import firebase from 'firebase/app'

import { User } from './User.type'

export async function checkDatabase({ uid, displayName }: firebase.User): Promise<User> {
  const collection = firebase.firestore().collection('users')
  const user = await collection.doc(uid).get()

  if (user.exists) {
    return user.data() as User
  }

  collection.doc(uid).set({
    displayName,
    role: 'user'
  })

  return { displayName, role: 'user' }
}
