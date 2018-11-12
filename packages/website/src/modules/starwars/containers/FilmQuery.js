// @flow

import * as React from 'react'

import { Button } from '@mattailes/ui'
import { graphql } from 'react-apollo'
import type { Film } from '@mattailes/types'
import type { OperationComponent } from 'react-apollo'

import gql from 'graphql-tag'

import FilmInfo from '../components/FilmInfo'

const getRandomId = () => Math.floor(Math.random() * 7) + 1

const FILM_QUERY = gql`
  query FILM_QUERY($id: Int) {
    getFilm(id: $id) {
      title
      episode_id
      opening_crawl
      director
      producer
      release_date
      species {
        name
      }
      starships {
        name
      }
      vehicles {
        name
      }
      characters {
        name
      }
      planets {
        name
      }
    }
  }
`

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
