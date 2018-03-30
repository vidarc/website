import fetch from 'cross-fetch'
import DataLoader from 'dataloader'

import logger from './../logger'

const get = async url =>
  fetch(url)
    .then(res => res.json())
    .catch(err => logger.error(err))

export const getAll = async type => get(`https://swapi.co/api/${type}/`).then(response => response.results)

export const getOne = async (type, index) =>
  get(`https://swapi.co/api/${type}/${index}`).then(response => response.results)

export const loader = new DataLoader((urls) => {
  const promises = urls.map(url => fetch(url).then(response => response.json()))

  return Promise.all(promises)
})
