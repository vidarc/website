// @flow

import * as React from 'react'

import { Button } from '@mattailes/ui'
import { graphql } from 'react-apollo'
import type { Film } from '@mattailes/types'
import type { OperationComponent } from 'react-apollo'

import gql from 'graphql-tag'

const FILM_QUERY = gql`
  query {
    getAllFilms {
      title
      producer
      episode_id
    }
  }
`

type Response = {
  getAllFilms?: Array<Film>
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
        {getAllFilms.map(film => (
          <p key={film.episode_id}>
            {film.title}
            {' '}
-
            {film.producer}
          </p>
        ))}
        <Button primary onClick={() => refetch()}>
          Refetch!
        </Button>
      </div>
    )
  },
)

export default FilmQueryComponent
