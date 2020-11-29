import { Planet } from '@mattailes/types'

import ContentRow from './ContentRow'
import DisplayArray from './DisplayArray'
import FlexContainer from './FlexContainer'

const PlanetInfo = ({
  name,
  surface_water: surfaceWater,
  population,
  diameter,
  gravity,
  rotation_period: rotationPeriod,
  orbital_period: orbitalPeriod,
  climate,
  terrain,
  residents,
  films,
}: Planet) => (
  <FlexContainer direction="column">
    <ContentRow title="Name">{name}</ContentRow>
    <ContentRow title="Surface Water">{surfaceWater}</ContentRow>
    <ContentRow title="Population">{population}</ContentRow>
    <ContentRow title="Diameter">{diameter}</ContentRow>
    <ContentRow title="Gravity">{gravity}</ContentRow>
    <ContentRow title="Rotation Period">{rotationPeriod}</ContentRow>
    <ContentRow title="Orbital Period">{orbitalPeriod}</ContentRow>
    <ContentRow title="Climate">{climate}</ContentRow>
    <ContentRow title="Terrain">{terrain}</ContentRow>
    <ContentRow title="Residents">
      <DisplayArray array={residents} url="../person/" />
    </ContentRow>
    <ContentRow title="Films">
      <DisplayArray array={films} url="../film/" />
    </ContentRow>
  </FlexContainer>
)

export default PlanetInfo
