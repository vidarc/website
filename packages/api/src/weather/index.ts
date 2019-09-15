import { Request, Response, config } from 'firebase-functions'
import fetch from 'cross-fetch'
import { differenceInMinutes } from 'date-fns'

const BASE_URL = 'https://api.openweathermap.org'
const BASE_API_URL = '/data/2.5/'

function createRequest(type: string, city: string, zip: number): URL {
  const url = new URL(BASE_API_URL + type, BASE_URL)

  url.searchParams.append('appid', config().weather.key)
  url.searchParams.append('units', 'imperial')

  if (city) {
    url.searchParams.append('q', city)
  } else {
    url.searchParams.append('zip', `${zip},us`)
  }

  return url
}

function isNotStale(timestamp: Date) {
  return differenceInMinutes(timestamp, new Date()) >= 10
}

async function weatherApi(
  { query, originalUrl }: Request,
  res: Response,
  cache: Map<string, { timestamp: Date; data: any }>
) {
  if (cache.has(originalUrl) && isNotStale(cache.get(originalUrl).timestamp)) {
    console.log('sending cached data')
    res.send(cache.get(originalUrl).data)
  } else {
    const { city, type = 'forecast', zip = 23220 } = query

    const request = createRequest(type, city, zip)
    const response = await fetch(request.href)
    const data = await response.json()
    cache.set(originalUrl, { timestamp: new Date(), data })

    res.send(data)
  }
}

export default weatherApi
