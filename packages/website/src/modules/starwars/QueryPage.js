// @flow

import * as React from 'react'

import { Button } from '@mattailes/ui'
import { Query } from 'react-apollo'
import type { Film } from '@mattailes/types'

import gql from 'graphql-tag'

const query = gql`
  {
    getAllFilms {
      title
      producer
    }
  }
`

const QueryPage = () => (
  <Query query={query} notifyOnNetworkStatusChange>
    {({
      loading, error, data, refetch, networkStatus,
    }) => {
      if (networkStatus === 4) {
        return <p>Refetching.......</p>
      }
      if (loading) {
        return <p>Loading.......</p>
      }

      if (error) {
        return (
          <p>
OMG ERROR -
            {error.message}
          </p>
        )
      }

      return [
        <div>
          {data.getAllFilms.map((film: Film) => (
            <p key={film.episode_id}>
              {film.title}
              {' - '}
              {film.producer}
            </p>
          ))}
        </div>,
        <Button primary onClick={() => refetch()}>
          Refetch!
        </Button>,
      ]
    }}
  </Query>
)

export default QueryPage
