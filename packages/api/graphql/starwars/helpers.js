// @flow

import fetch from 'cross-fetch'
import DataLoader from 'dataloader'

import logger from './../../logger'

const get = async (url: string) =>
  fetch(url)
    .then(res => res.json())
    .catch(err => logger.error(err))

export const getAll = async (type: string | number) =>
  get(`https://swapi.co/api/${type}/`).then(response => response.results)

export const getOne = async (type: string | number, index: string | number) =>
  get(`https://swapi.co/api/${type}/${index}`).then(response => response.results)

export const loader = new DataLoader((urls: Array<string>) => {
  const promises = urls.map(url => fetch(url).then(response => response.json()))

  return Promise.all(promises)
})
