// @flow

import * as React from 'react'

import type { Starship } from '@mattailes/types'

import ContentRow from './ContentRow'
import DisplayArray from './DisplayArray'
import FlexContainer from './FlexContainer'

const StarshipInfo = ({
  name,
  passengers,
  consumables,
  model,
  starship_class: starshipClass,
  crew,
  hyperdrive_rating: hyperdriveRating,
  MGLT,
  manufacturer,
  cargo_capacity: cargoCapacity,
  length,
  max_atmosphering_speed: maxAtmospheringSpeed,
  cost_in_credits: costInCredits,
  pilots,
  films
}: Starship) => (
  <FlexContainer direction='column'>
    <ContentRow title='Name'>{name}</ContentRow>
    <ContentRow title='Passengers'>{passengers}</ContentRow>
    <ContentRow title='Consumables'>{consumables}</ContentRow>
    <ContentRow title='Model'>{model}</ContentRow>
    <ContentRow title='Starship Class'>{starshipClass}</ContentRow>
    <ContentRow title='Crew'>{crew}</ContentRow>
    <ContentRow title='Hyperdrive Rating'>{hyperdriveRating}</ContentRow>
    <ContentRow title='Maximum Number of Megalights'>{MGLT}</ContentRow>
    <ContentRow title='Manufacturer'>{manufacturer}</ContentRow>
    <ContentRow title='Cargo Capacity'>{cargoCapacity}</ContentRow>
    <ContentRow title='Length'>{length}</ContentRow>
    <ContentRow title='Max Atmosphering Speed'>
      {maxAtmospheringSpeed}
    </ContentRow>
    <ContentRow title='Cost in Credits'>{costInCredits}</ContentRow>
    <ContentRow title='Pilots'>
      <DisplayArray array={pilots} url='../person/' />
    </ContentRow>
    <ContentRow title='Films'>
      <DisplayArray array={films} url='../film/' />
    </ContentRow>
  </FlexContainer>
)

export default StarshipInfo
