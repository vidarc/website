// @flow

import DataLoader from 'dataloader'
import fetch from 'cross-fetch'

import logger from '../../logger'

const get = async (url: string) => fetch(url)
  .then(res => res.json())
  .catch(err => logger.error(err))

const getAll = async (type: string | number) => get(`https://swapi.co/api/${type}/`).then(response => response.results)

const getOne = async (type: string | number, index: string | number) => get(`https://swapi.co/api/${type}/${index}`)

const loader = new DataLoader((urls: Array<string>) => {
  const promises = urls.map(url => fetch(url).then(response => response.json()))

  return Promise.all(promises)
})

export { getAll, getOne, loader }
