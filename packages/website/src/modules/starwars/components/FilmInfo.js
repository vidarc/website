// @flow

import * as React from 'react'
import { Link } from '@reach/router'
import { css } from 'emotion'

import type { Film } from '@mattailes/types'

import ContentRow from './ContentRow'

const FilmInfo = ({
  title,
  episode_id: episodeId,
  release_date: releaseDate,
  opening_crawl: openingCrawl,
  director,
  producer,
  species,
  starships,
  vehicles,
  characters,
  planets,
}: Film) => (
  <div
    className={css`
      display: flex;
      flex-direction: column;
    `}
  >
    <ContentRow title='Episode'>{episodeId}</ContentRow>
    <ContentRow title='Title'>{title}</ContentRow>
    <ContentRow title='Release Date'>{releaseDate}</ContentRow>
    <ContentRow title='Opening Crawl'>{openingCrawl}</ContentRow>
    <ContentRow title='Director'>{director}</ContentRow>
    <ContentRow title='Producer'>{producer}</ContentRow>
    <ContentRow title='Species'>
      {species.map(({ id, name }) => (
        <Link to={`/species/${id}`}>{name}</Link>
      ))}
    </ContentRow>
    <ContentRow title='Starships'>
      {starships.map(data => data.name).join(', ')}
    </ContentRow>
    <ContentRow title='Vehicles'>
      {vehicles.map(data => data.name).join(', ')}
    </ContentRow>
    <ContentRow title='Characters'>
      {characters.map(data => data.name).join(', ')}
    </ContentRow>
    <ContentRow title='Planets'>
      {planets.map(data => data.name).join(', ')}
    </ContentRow>
  </div>
)

export default FilmInfo
