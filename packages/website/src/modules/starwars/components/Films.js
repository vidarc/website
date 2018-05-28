// @flow

import * as React from 'react'
import ArrayToList from './ArrayToList'

type FilmData = {
  title: string,
  episode_id: number,
  opening_crawl: string,
  director: string,
  producer: string,
  release_date: string,
  species: Array<string>,
  starships: Array<string>,
  vehicles: Array<string>,
  characters: Array<string>,
  planets: Array<string>,
}

type FilmDataInput = {
  data: Array<FilmData>,
}

const Films = ({ data }: FilmDataInput) => (
  <Table celled>
    <Films.Header />
    <Table.Body>{data.map(film => <Films.Row {...film} />)}</Table.Body>
  </Table>
)

Films.Header = () => (
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>Title</Table.HeaderCell>
      <Table.HeaderCell>Episode</Table.HeaderCell>
      <Table.HeaderCell>Opening Crawl</Table.HeaderCell>
      <Table.HeaderCell>Director</Table.HeaderCell>
      <Table.HeaderCell>Producer</Table.HeaderCell>
      <Table.HeaderCell>Release Date</Table.HeaderCell>
      <Table.HeaderCell>Species</Table.HeaderCell>
      <Table.HeaderCell>Starships</Table.HeaderCell>
      <Table.HeaderCell>Vehicles</Table.HeaderCell>
      <Table.HeaderCell>Characters</Table.HeaderCell>
      <Table.HeaderCell>Planets</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
)

Films.Row = (props: FilmData) => (
  <Table.Row>
    <Table.Cell>{props.title}</Table.Cell>
    <Table.Cell>{props.episode_id}</Table.Cell>
    <Table.Cell>{props.opening_crawl}</Table.Cell>
    <Table.Cell>{props.director}</Table.Cell>
    <Table.Cell>{props.producer}</Table.Cell>
    <Table.Cell>{props.release_date}</Table.Cell>
    <Table.Cell>
      <ArrayToList data={props.species} />
    </Table.Cell>
    <Table.Cell>
      <ArrayToList data={props.starships} />
    </Table.Cell>
    <Table.Cell>
      <ArrayToList data={props.vehicles} />
    </Table.Cell>
    <Table.Cell>
      <ArrayToList data={props.characters} />
    </Table.Cell>
    <Table.Cell>
      <ArrayToList data={props.planets} />
    </Table.Cell>
  </Table.Row>
)

export default Films
