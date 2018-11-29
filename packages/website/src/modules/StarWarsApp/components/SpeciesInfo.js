// @flow

import * as React from 'react'

import type { Species } from '@mattailes/types'

import ContentRow from './ContentRow'
import DisplayArray from './DisplayArray'
import FlexContainer from './FlexContainer'

const SpeciesInfo = ({
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
  designation
}: Species) => (
  <FlexContainer direction='column'>
    <ContentRow title='Name'>{name}</ContentRow>
    <ContentRow title='Skin Colors'>{skinColors}</ContentRow>
    <ContentRow title='Hair Colors'>{hairColors}</ContentRow>
    <ContentRow title='Average Lifespan'>{averageLifespan}</ContentRow>
    <ContentRow title='Classification'>{classification}</ContentRow>
    <ContentRow title='Eye Colors'>{eyeColors}</ContentRow>
    <ContentRow title='Language'>{language}</ContentRow>
    <ContentRow title='Average Height'>{averageHeight}</ContentRow>
    <ContentRow title='Designation'>{designation}</ContentRow>
    <ContentRow title='Homeworld'>
      <DisplayArray array={[homeworld]} url='../planet/' />
    </ContentRow>
    <ContentRow title='People'>
      <DisplayArray array={people} url='../person/' />
    </ContentRow>
    <ContentRow title='Films'>
      <DisplayArray array={films} url='../film/' />
    </ContentRow>
  </FlexContainer>
)

export default SpeciesInfo
