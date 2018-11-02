// @flow

import * as React from 'react'

import { Button } from '@mattailes/ui'
import { graphql } from 'react-apollo'
import type { Film } from '@mattailes/types'
import type { OperationComponent } from 'react-apollo'

import gql from 'graphql-tag'

import { FilmInfo } from '../components/Film'

const FILM_QUERY = gql`
  query FILM_QUERY {
    getAllFilms {
      title
      episode_id
      opening_crawl
      director
      producer
      release_date
    }
  }
`

type Response = {
  getAllFilms: Array<Film>
}

const withFilmQuery: OperationComponent<Response> = graphql(FILM_QUERY, {
  options: {
    notifyOnNetworkStatusChange: true,
  },
})

const FilmQueryComponent = withFilmQuery(
  ({
    data: {
      loading, error, getAllFilms, refetch, networkStatus,
    },
  }) => {
    if (networkStatus === 4) {
      return <p>Refetching.........</p>
    }

    if (loading) {
      return <p>Loading............</p>
    }

    if (error || !getAllFilms) {
      return <p>Error.............</p>
    }

    return (
      <div>
        {getAllFilms.sort((a, b) => a.episode_id - b.episode_id).map(film => (
          <FilmInfo {...film} key={film.episode_id} />
        ))}
        <Button primary onClick={() => refetch()}>
          Refetch!
        </Button>
      </div>
    )
  },
)

export default FilmQueryComponent
