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
  </div>
)

export default FilmInfo
