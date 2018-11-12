// @flow

import * as React from 'react'

import { Button } from '@mattailes/ui'
import { graphql } from 'react-apollo'
import { loader } from 'graphql.macro'
import type { Film } from '@mattailes/types'
import type { OperationComponent } from 'react-apollo'

import FilmInfo from '../components/FilmInfo'

const FILM_QUERY = loader('../schemas/getFilm.graphql')

const getRandomId = () => Math.floor(Math.random() * 7) + 1

type Response = {
  getFilm: Film
}

const withFilmQuery: OperationComponent<Response> = graphql(FILM_QUERY, {
  options: {
    notifyOnNetworkStatusChange: true,
    variables: {
      id: getRandomId(),
    },
  },
})

const FilmQueryComponent = withFilmQuery(
  ({
    data: {
      loading, error, getFilm, refetch, networkStatus,
    },
  }) => {
    if (networkStatus === 4) {
      return <p>Refetching.........</p>
    }

    if (loading) {
      return <p>Loading............</p>
    }

    if (error || !getFilm) {
      return <p>Error.............</p>
    }

    return (
      <div>
        <FilmInfo {...getFilm} />
        <Button primary onClick={() => refetch({ id: getRandomId() })}>
          Refetch!
        </Button>
      </div>
    )
  },
)

export default FilmQueryComponent
