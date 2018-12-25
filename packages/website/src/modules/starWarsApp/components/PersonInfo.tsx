import * as React from 'react'

import { Person } from '@mattailes/types'

import ContentRow from './ContentRow'
import DisplayArray from './DisplayArray'
import FlexContainer from './FlexContainer'

const PersonInfo = ({
  name,
  eye_color: eyeColor,
  gender,
  height,
  hair_color: hairColor,
  birth_year: birthYear,
  mass,
  skin_color: skinColor,
  homeworld,
  species,
  films,
  starships,
  vehicles
}: Person) => (
  <FlexContainer direction='column'>
    <ContentRow title='Name'>{name}</ContentRow>
    <ContentRow title='Eye Color'>{eyeColor}</ContentRow>
    <ContentRow title='Gender'>{gender}</ContentRow>
    <ContentRow title='Height'>{height}</ContentRow>
    <ContentRow title='Hair Color'>{hairColor}</ContentRow>
    <ContentRow title='Birth Year'>{birthYear}</ContentRow>
    <ContentRow title='Mass'>{mass}</ContentRow>
    <ContentRow title='Skin Color'>{skinColor}</ContentRow>
    <ContentRow title='Homeworld'>
      <DisplayArray array={[homeworld]} url='../planet/' />
    </ContentRow>
    <ContentRow title='Species'>
      <DisplayArray array={species} url='../species/' />
    </ContentRow>
    <ContentRow title='Films'>
      <DisplayArray array={films} url='../film/' />
    </ContentRow>
    <ContentRow title='Starships'>
      <DisplayArray array={starships} url='../starship/' />
    </ContentRow>
    <ContentRow title='Vehicles'>
      <DisplayArray array={vehicles} url='../vehicle/' />
    </ContentRow>
  </FlexContainer>
)

export default PersonInfo
