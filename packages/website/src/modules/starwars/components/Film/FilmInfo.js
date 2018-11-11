// @flow

import * as React from 'react'
import { css } from 'emotion'

import type { Film } from '@mattailes/types'

import FilmDisplay from './FilmDisplay'

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
    <FilmDisplay title='Episode' content={episodeId} />
    <FilmDisplay title='Title' content={title} />
    <FilmDisplay title='Release Date' content={releaseDate} />
    <FilmDisplay title='Opening Crawl' content={openingCrawl} />
    <FilmDisplay title='Director' content={director} />
    <FilmDisplay title='Producer' content={producer} />
    <FilmDisplay
      title='Species'
      content={species.map(data => data.name).join(', ')}
    />
    <FilmDisplay
      title='Starships'
      content={starships.map(data => data.name).join(', ')}
    />
    <FilmDisplay
      title='Vehicles'
      content={vehicles.map(data => data.name).join(', ')}
    />
    <FilmDisplay
      title='Characters'
      content={characters.map(data => data.name).join(', ')}
    />
    <FilmDisplay
      title='Planets'
      content={planets.map(data => data.name).join(', ')}
    />
  </div>
)

export default FilmInfo
