import { firestore } from 'firebase-admin'
import { differenceInMinutes } from 'date-fns'
import fetch from 'cross-fetch'

const DEFAULT_TTL = 5

function escapedRequest(url: string) {
  return url.replace(/:|\//g, '-')
}

function isNotStale(timestamp: Date, ttl: number) {
  return differenceInMinutes(timestamp, new Date()) >= ttl
}

async function setInCache(request: string) {
  const response = await fetch(request)
  const data = await response.json()
  const timestamp = firestore.Timestamp.fromDate(new Date())

  console.log('putting data into cache', timestamp, request)
  firestore()
    .collection('cache')
    .doc(escapedRequest(request))
    .set({ timestamp, data })

  return data
}

async function requestFromCache(request: string, ttl: number = DEFAULT_TTL) {
  const doc = await firestore()
    .collection('cache')
    .doc(escapedRequest(request))
    .get()

  if (doc.exists) {
    console.log('doc exists in cache')
    const { timestamp, data } = doc.data()

    if (isNotStale(timestamp, ttl)) {
      return data
    }
  } else {
    console.log('doc does not exist in cache')
  }

  return setInCache(request)
}

export default requestFromCache
