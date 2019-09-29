import functions from 'firebase-functions'
import admin from 'firebase-admin'

const firestore = admin.firestore()

export default function onCreate(user: functions.auth.UserRecord) {
  const collection = firestore.collection('users')

  collection.doc(user.uid).set({
    ...user,
    role: 'user'
  })
}
