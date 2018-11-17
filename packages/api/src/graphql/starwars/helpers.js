// @flow

import DataLoader from 'dataloader'
import fetch from 'cross-fetch'

import logger from '../../logger'

const get = async (url: string) => fetch(url)
  .then(res => res.json())
  .catch(err => logger.error(err))

async function getAll(type: string | number) {
  return get(`https://swapi.co/api/${type}/`).then(response => response.results)
}

async function getOne(type: string | number, index: string | number) {
  return get(`https://swapi.co/api/${type}/${index}`).then(response => ({
    ...response,
    ...{ id: index },
  }))
}

const loader = new DataLoader((urls: Array<string>) => {
  const promises = urls.map((url) => {
    const id = url.split('/').reverse()[1]

    return fetch(url)
      .then(response => response.json())
      .then(response => ({ ...response, ...{ id } }))
  })

  return Promise.all(promises)
})

export { getAll, getOne, loader }
