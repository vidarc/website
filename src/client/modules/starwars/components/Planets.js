// @flow

import * as React from 'react'
import { Table } from 'semantic-ui-react'
import ArrayToList from './ArrayToList'

type PlanetData = {
  surface_water: string,
  population: string,
  diameter: string,
  residents: Array<string>,
  gravity: string,
  rotation_period: string,
  films: Array<string>,
  orbital_period: string,
  climate: string,
  name: string,
  terrain: string,
}

type PlanetDataInput = {
  data: Array<PlanetData>,
}

const Planets = ({ data }: PlanetDataInput) => (
  <Table celled>
    <Planets.Header />
    <Table.Body>{data.map(planet => <Planets.Row {...planet} />)}</Table.Body>
  </Table>
)

Planets.Header = () => (
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>Name</Table.HeaderCell>
      <Table.HeaderCell>Population</Table.HeaderCell>
      <Table.HeaderCell>Terrain</Table.HeaderCell>
      <Table.HeaderCell>Climate</Table.HeaderCell>
      <Table.HeaderCell>Gravity</Table.HeaderCell>
      <Table.HeaderCell>Rotation Period</Table.HeaderCell>
      <Table.HeaderCell>Orbital Period</Table.HeaderCell>
      <Table.HeaderCell>Surface Water</Table.HeaderCell>
      <Table.HeaderCell>Diameter</Table.HeaderCell>
      <Table.HeaderCell>Films</Table.HeaderCell>
      <Table.HeaderCell>Residents</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
)

Planets.Row = (props: PlanetData) => (
  <Table.Row>
    <Table.Cell>{props.name}</Table.Cell>
    <Table.Cell>{props.population}</Table.Cell>
    <Table.Cell>{props.terrain}</Table.Cell>
    <Table.Cell>{props.climate}</Table.Cell>
    <Table.Cell>{props.gravity}</Table.Cell>
    <Table.Cell>{props.rotation_period}</Table.Cell>
    <Table.Cell>{props.orbital_period}</Table.Cell>
    <Table.Cell>{props.surface_water}</Table.Cell>
    <Table.Cell>{props.diameter}</Table.Cell>
    <Table.Cell>
      <ArrayToList data={props.films} />
    </Table.Cell>
    <Table.Cell>
      <ArrayToList data={props.residents} />
    </Table.Cell>
  </Table.Row>
)

export default Planets
