import { Request, Response, config } from 'firebase-functions'
import requestFromCache from '../cache'
import logger from '../logger'

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

async function weatherApi({ query }: Request, res: Response) {
  const { city, type = 'forecast', zip = 23220 } = query

  const request = createRequest(type, city, zip)

  try {
    const data = await requestFromCache(request.href)
    res.send(data)
  } catch (error) {
    logger.error(error)
    res.send('ouchie')
  }
}

export default weatherApi
