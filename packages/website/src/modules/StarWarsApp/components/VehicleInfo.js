// @flow

import * as React from 'react'

import type { Vehicle } from '@mattailes/types'

import ContentRow from './ContentRow'
import DisplayArray from './DisplayArray'
import FlexContainer from './FlexContainer'

const VehicleInfo = ({
  name,
  passengers,
  vehicle_class: vehicleClass,
  consumables,
  model,
  crew,
  manufacturer,
  cargo_capacity: cargoCapacity,
  length,
  max_atmosphering_speed: maxAtmospheringSpeed,
  cost_in_credits: costInCredits,
  pilots,
  films
}: Vehicle) => (
  <FlexContainer direction='column'>
    <ContentRow title='Name'>{name}</ContentRow>
    <ContentRow title='Passengers'>{passengers}</ContentRow>
    <ContentRow title='Vehicle Class'>{vehicleClass}</ContentRow>
    <ContentRow title='Consumables'>{consumables}</ContentRow>
    <ContentRow title='Model'>{model}</ContentRow>
    <ContentRow title='Crew'>{crew}</ContentRow>
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

export default VehicleInfo
