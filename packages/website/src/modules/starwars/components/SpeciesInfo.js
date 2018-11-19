// @flow

import * as React from 'react'
import { css } from 'emotion'

import type { Species } from '@mattailes/types'

import ContentRow from './ContentRow'
import DisplayArray from './DisplayArray'

export default ({
  skin_colors: skinColors,
  hair_colors: hairColors,
  people,
  average_lifespan: averageLifespan,
  classification,
  eye_colors: eyeColors,
  homeworld,
  language,
  films,
  name,
  average_height: averageHeight,
  designation,
}: Species) => (
  <div
    className={css`
      display: flex;
      flex-direction: column;
    `}
  >
    <ContentRow title='Name'>{name}</ContentRow>
    <ContentRow title='Homeworld'>{homeworld}</ContentRow>
    <ContentRow title='Skin Colors'>{skinColors}</ContentRow>
    <ContentRow title='Hair Colors'>{hairColors}</ContentRow>
    <ContentRow title='People'>
      <DisplayArray array={people} url='../person/' />
    </ContentRow>
    <ContentRow title='Average Lifespan'>{averageLifespan}</ContentRow>
    <ContentRow title='Classification'>{classification}</ContentRow>
    <ContentRow title='Eye Colors'>{eyeColors}</ContentRow>
    <ContentRow title='Language'>{language}</ContentRow>
    <ContentRow title='Films'>
      <DisplayArray array={films} url='../film/' />
    </ContentRow>
    <ContentRow title='Average Heigh'>{averageHeight}</ContentRow>
    <ContentRow title='Designation'>{designation}</ContentRow>
  </div>
)
