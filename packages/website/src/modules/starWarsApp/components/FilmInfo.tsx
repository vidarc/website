import * as React from 'react'

import { Film } from '@mattailes/types'

import ContentRow from './ContentRow'
import DisplayArray from './DisplayArray'
import FlexContainer from './FlexContainer'

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
  planets
}: Film) => (
  <FlexContainer direction='column'>
    <ContentRow title='Episode'>{episodeId}</ContentRow>
    <ContentRow title='Title'>{title}</ContentRow>
    <ContentRow title='Release Date'>{releaseDate}</ContentRow>
    <ContentRow title='Opening Crawl'>{openingCrawl}</ContentRow>
    <ContentRow title='Director'>{director}</ContentRow>
    <ContentRow title='Producer'>{producer}</ContentRow>
    <ContentRow title='Species'>
      <DisplayArray array={species} url='../species/' />
    </ContentRow>
    <ContentRow title='Starships'>
      <DisplayArray array={starships} url='../starship/' />
    </ContentRow>
    <ContentRow title='Vehicles'>
      <DisplayArray array={vehicles} url='../vehicle/' />
    </ContentRow>
    <ContentRow title='Characters'>
      <DisplayArray array={characters} url='../person/' />
    </ContentRow>
    <ContentRow title='Planets'>
      <DisplayArray array={planets} url='../planet/' />
    </ContentRow>
  </FlexContainer>
)

export default FilmInfo
